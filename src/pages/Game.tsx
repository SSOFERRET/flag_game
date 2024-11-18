import style from "./Game.module.css";
import { useEffect, useRef, useState } from "react";
import { getGameCommand, getJudge, IGameCommand } from "../utils/game.util";
import boundStore from "../stores/boundStore.store";
import Layout from "../components/Layout";
import heart2 from "./../assets/images/heart2.webp";
import heart3 from "./../assets/images/heart3.webp";
import { useNavigate } from "react-router-dom";
import {Howl} from "howler";
import { IState } from "../models/game.model";

function Game() {
  const nav = useNavigate();

  const left = boundStore.use.left();
  const right = boundStore.use.right();
  const score = boundStore.use.score();
  const life = boundStore.use.life();

  const loseLife = boundStore.use.loseLife();
  const addScore = boundStore.use.addScore();
  const setContinue = boundStore.use.setContinue();

  const prevStateRef = useRef<IState|null>(null);
  const currentCommandRef = useRef<IGameCommand|null>(null);
  const [judged, setJudged] = useState<"yet"|"pass"|"fail">("yet");

  const playAudio = (sounds: string[]) => {
    return new Promise((resolve) => {
      const soundScript = new Howl({
        src: [sounds[1]],
        onend: () => resolve(true),
      });

      const soundSide = new Howl({
        src: [sounds[0]],
        onend: () => {
          soundScript.play();
        },
      });

      soundSide.play();
    });
  };

  const handleUserAction = () => {
    const { left: currentLeft, right: currentRight } = boundStore.getState();
    const currentState = { left: currentLeft, right: currentRight };

    if (currentCommandRef.current && prevStateRef.current) {
      const judge = getJudge(
        prevStateRef.current,
        currentState,
        currentCommandRef.current!.side,
        currentCommandRef.current!.command
      );

      if (judged !== "fail" && !judge) {
        setJudged("fail")
      }  
    }
  };

  const handleFail = () => {
    const { life: currentLife } = boundStore.getState();
        if (currentLife > 0)
          loseLife();
        else if (currentLife === 0) {
          setTimeout(() => nav("/end", { replace: true }), 3000);
          setContinue(false);
        }
  }

  const gameStart = async () => {
    const {left: prevLeft, right: prevRight} = boundStore.getState();
    const gameCommand = getGameCommand();

    prevStateRef.current = {left: prevLeft, right: prevRight};
    currentCommandRef.current = gameCommand;

    await playAudio(gameCommand.sounds);

      if (judged  === "yet") {
        const { left: currentLeft, right: currentRight } = boundStore.getState();
        const currentState = { left: currentLeft, right: currentRight };
        const judge = getJudge(prevStateRef.current!, currentState, gameCommand.side, gameCommand.command);
        setJudged(judge ? "pass" : "fail");
      }

      setTimeout(() => {
        const { continueGame } = boundStore.getState();
      if (continueGame) {
        setJudged("yet");
        gameStart();
      }
      }, 100);
  };

  useEffect(() => {
    gameStart();
  }, []);

  useEffect(() => {
    handleUserAction();
  }, [left, right])

  useEffect(() => {
    switch(judged) {
      case "fail": return handleFail();
      case "pass": return addScore();
      case "yet" : return;
    }
  }, [judged])

  return (
    <>
      <Layout
        headChild={<section className={style.score}>{score}</section>}
        footChild={
          <section className={style.life}>
            <img className={style.heart} src={life >= 1 ? heart3 : ""} />
            <img className={style.heart} src={life >= 2 ? heart2 : ""} />
            <img className={style.heart} src={life >= 3 ? heart3 : ""} />
          </section>
        }
      />
    </>
  );
}

export default Game;

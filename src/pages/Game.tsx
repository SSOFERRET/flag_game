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
  const addScore = boundStore.use.addScore();
  
  const prevStateRef = useRef<IState|null>(null);
  const currentCommandRef = useRef<IGameCommand|null>(null);
  
  const [life, loseLife] = useState<number>(3);
  const continueGameRef = useRef<boolean>(true);

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

    const judge = getJudge(
      prevStateRef.current!,
      currentState,
      currentCommandRef.current!.side,
      currentCommandRef.current!.command
    );

    if (judged !== "fail" && !judge) {
      setJudged("fail")
    }
  };

  const handleFail = () => {

      if (life > 0)
        loseLife((prev) => prev - 1);
      else if (life === 0) {
        setTimeout(() => nav("/end", { replace: true }), 3000);
        continueGameRef.current = false;
      }
  }

  const gameStart = async () => {
    const {left: prevLeft, right: prevRight} = boundStore.getState();
    const gameCommand = getGameCommand();

    console.log("시작")
    prevStateRef.current = {left: prevLeft, right: prevRight};
    currentCommandRef.current = gameCommand;
    console.log("상태, 스크립트 저장 완료")

    await playAudio(gameCommand.sounds);

      if (judged  === "yet") {
        const { left: currentLeft, right: currentRight } = boundStore.getState();
        const currentState = { left: currentLeft, right: currentRight };
        const judge = getJudge(prevStateRef.current!, currentState, gameCommand.side, gameCommand.command);
        setJudged(judge ? "pass" : "fail");
      }

      setTimeout(() => {
      if (continueGameRef.current) {
        setJudged("yet");
        gameStart();
      }
      }, 100);
  };

  useEffect(() => {
    if (prevStateRef.current && currentCommandRef.current)
      handleUserAction();
  }, [left, right])

  useEffect(() => {
    gameStart();

    return () => {
      continueGameRef.current = false;
    }
  }, []);

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
            <img className={style.heart} src={life >= 1 ? heart3 : ""} alt='' />
            <img className={style.heart} src={life >= 2 ? heart2 : ""} alt='' />
            <img className={style.heart} src={life >= 3 ? heart3 : ""} alt='' />
          </section>
        }
      />
    </>
  );
}

export default Game;

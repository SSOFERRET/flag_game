import style from "./Game.module.css";
import { useEffect, useRef } from "react";
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
  const addScore = boundStore.use.addScore();
  const loseLife = boundStore.use.loseLife();
  
  const prevStateRef = useRef<IState|null>(null);
  const currentCommandRef = useRef<IGameCommand|null>(null);
  
  const continueGameRef = useRef<boolean>(true);

  const judgedRef = useRef<"yet"|"pass"|"fail">("yet");
  const canJudgeRef = useRef<boolean>(true);

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

      if (judgedRef.current !== "fail" && !judge) {
        judgedRef.current = "fail"
        handleScoreLife()
      }
  };

  const handleFail = () => {
    const {life} = boundStore.getState();
      if (life > 0)
        loseLife();
      else if (life <= 0) {
        continueGameRef.current = false;
        setTimeout(() => nav("/end", { replace: true }), 3000);
      }
  }

  const handleScoreLife = () => {
    switch(judgedRef.current) {
      case "fail": return handleFail();
      case "pass": return addScore();
      case "yet" : return;
    }
  }

  const gameStart = async () => {
    canJudgeRef.current = false;
    const {left: prevLeft, right: prevRight} = boundStore.getState();
    const gameCommand = getGameCommand();

    prevStateRef.current = {left: prevLeft, right: prevRight};
    currentCommandRef.current = gameCommand;
    canJudgeRef.current = true;

    await playAudio(gameCommand.sounds);

      if (judgedRef.current  === "yet" && canJudgeRef.current) {
        const { left: currentLeft, right: currentRight } = boundStore.getState();
        const currentState = { left: currentLeft, right: currentRight };
        const judge = getJudge(prevStateRef.current!, currentState, gameCommand.side, gameCommand.command);
        judgedRef.current = judge ? "pass" : "fail";
        handleScoreLife();
      }

      setTimeout(() => {
      if (continueGameRef.current) {
        judgedRef.current = "yet"
        gameStart();
      }
      }, 100);
  };

  useEffect(() => {
    if (prevStateRef.current && currentCommandRef.current && canJudgeRef.current){
      canJudgeRef.current = false;
      setTimeout(() => {
        handleUserAction();
        canJudgeRef.current = true;
    }, 100) 
    }
  }, [left, right])

  useEffect(() => {
    gameStart();

    return () => {
      continueGameRef.current = false;
    }
  }, []);

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

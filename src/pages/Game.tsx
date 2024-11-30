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
import { FaXmark } from "react-icons/fa6";
import { PiCircleBold } from "react-icons/pi";
import useSound from "use-sound";
import correctSound from "./../assets/sounds/correct.mp3";
import wrongSound from "./../assets/sounds/wrong.mp3";

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
  const [judgeSign, setJudgeSign] = useState<"pass"|"fail"|null>(null);
  const canJudgeRef = useRef<boolean>(true);

  const [playCorrect] = useSound(correctSound);
  const [playWrong] = useSound(wrongSound);

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
      } else if (judgedRef.current === "yet" && judge) {
        judgedRef.current = "pass"
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
    if (judgedRef.current !== "yet") 
      setJudgeSign(judgedRef.current);
    
    switch(judgedRef.current) {
      case "fail": return handleFail();
      case "pass": return addScore();
      case "yet" : return;
    }
  }

  const gameLoop = async () => {
    try {
      canJudgeRef.current = false;
      const {left: prevLeft, right: prevRight} = boundStore.getState();
      const gameCommand = getGameCommand();
  
      prevStateRef.current = {left: prevLeft, right: prevRight};
      currentCommandRef.current = gameCommand;
      canJudgeRef.current = true;
  
      await playAudio(gameCommand.sounds);
  
      if (judgedRef.current  === "yet" && canJudgeRef.current)
        handleUserAction();

      if (judgedRef.current === "yet") 
        throw new Error("아직 판정이 안되었습니다.");
    } catch (err) {
      console.error(err);
    } finally {
      handleScoreLife();

      if (continueGameRef.current) {
        judgedRef.current = "yet"
        gameLoop();
      }
    }     
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
    gameLoop();

    return () => {
      continueGameRef.current = false;
    }
  }, []);

  useEffect(() => {
    if (judgeSign) {
      if (judgeSign === "pass") playCorrect();
      if (judgeSign === "fail") playWrong();
      setTimeout(() => {
        setJudgeSign(null);
      }, 800)
    }
  }, [judgeSign])

  return (
    <>
      <section className={style.judgeSign}>
        {judgeSign === "pass" && <PiCircleBold className={style.passSign}/>}
        {judgeSign === "fail" && <FaXmark className={style.failSign}/>}
      </section>
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

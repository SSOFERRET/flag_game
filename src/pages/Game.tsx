import { useEffect, useRef, useState } from "react";
import { TState } from "../models/game.model";
import { getGameCommand, getJudge } from "../utils/game.util";


function Game() {
  const [left, setLeft] = useState<TState>("down");
  const [right, setRight] = useState<TState>("down");
  const [life ,setLife] = useState<number>(3);
  const [script, setScript] = useState<string>("");
  const leftRef = useRef(left);
  const rightRef = useRef(right);
  const lifeRef = useRef(life);
  const [score, setScore] = useState<number>(0);

  const gameStart = async () => {
    if (lifeRef.current >= 0) {
      const prevState = {
        left: leftRef.current, 
        right: rightRef.current
      };
      const gameCommand = getGameCommand();
      setScript(gameCommand.script);
      const judge = await new Promise((resolve) => {
        setTimeout(() => {
          const currentState = {
            left: leftRef.current, 
            right: rightRef.current
          }
          const judge = getJudge(prevState, currentState, gameCommand.side, gameCommand.command);
          console.log(prevState, currentState)
          console.log(judge ? "맞음" : "틀림");
          resolve(judge);
        }, 3000);
      });
      
      if (judge) {
        setScore((prev) => prev + 1);
      } else {
        lifeRef.current = lifeRef.current - 1;
        setLife(lifeRef.current);
      }

      if (lifeRef.current >= 0) {
        console.log("생명 개수:", lifeRef.current);
        gameStart();
      } else {
        console.log("게임 오버!");
        return;
      }
    }
  }

  useEffect(() => {
    gameStart();
  }, []);

  useEffect(() => {
    leftRef.current = left;
    rightRef.current = right;
  }, [left, right]);

  const onClickLeft = () => {
    setLeft(left === "down" ? "up" : "down");
  }

  const onClickRight = () => {
    setRight(right === "down" ? "up" : "down");
  }

  return (
    <div className="App">
      <section className="charName">오똑씨</section>
      <section className="script"> 스크립트: {script}</section>
      <section className="character">
        <button onClick={onClickLeft}>청기 {left}</button>
        <button onClick={onClickRight}>백기 {right}</button>
      </section>
      <section className="score">점수: {score}</section>
      <section className="life">life: {life}</section>

    </div>
  )
}

export default Game;
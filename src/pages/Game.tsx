import "./Game.css"
import { useEffect, useRef, useState } from "react";
import { TState } from "../models/game.model";
import { getGameCommand, getJudge } from "../utils/game.util";
import boundStore from "../stores/boundStore.store";
import useToggleLeftRight from "../hooks/useToggleLeftRight";


function Game() {
  const userName = boundStore.use.userName();
  const left = boundStore.use.left();
  const right = boundStore.use.right();
  const {onClickLeft, onClickRight} = useToggleLeftRight();
  const [script, setScript] = useState<string>("");
  const leftRef = useRef(left);
  const rightRef = useRef(right);
  const lifeRef = useRef(3);
  const [score, setScore] = useState<number>(0);

  const gameStart = async () => {
    if (lifeRef.current >= 0) {
      const prevState = {
        left: leftRef.current, 
        right: rightRef.current
      };
      const gameCommand = getGameCommand();
      console.log("스크립트:", gameCommand.script);
      setScript(gameCommand.script);
      const judge = await new Promise((resolve) => {
        setTimeout(() => {
          const currentState = {
            left: leftRef.current, 
            right: rightRef.current
          }
          const judge = getJudge(prevState, currentState, gameCommand.side, gameCommand.command);
          console.log("현상태:", currentState)
          console.log(judge ? "맞음" : "틀림");
          resolve(judge);
        }, 5000);
      });
      
      if (judge) {
        setScore((prev) => prev + 1);
      } else {
        lifeRef.current = lifeRef.current - 1;
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

  return (
    <div className="Game">

      <section className="screen">
        <section className="charName">{userName}</section>
        <section className="score">{score}</section>
        {/* <section className="script"> 스크립트: {script}</section> */}
        <section className="life">
          <div className="heart">{lifeRef.current >= 1 ? "❤️" : null}</div>
          <div className="heart">{lifeRef.current >= 2 ? "❤️" : null}</div>
          <div className="heart">{lifeRef.current === 3 ? "❤️" : null}</div>
        </section>
      </section>
      <section className="toggleButton">
        <button className="leftButton" onClick={onClickLeft}></button>
        <button className="rightButton" onClick={onClickRight}></button>
      </section>    
    </div>
  )
}

export default Game;
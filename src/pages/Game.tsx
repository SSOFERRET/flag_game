import style from "./Game.module.css";
import { useEffect } from "react";
import { getGameCommand, getJudge } from "../utils/game.util";
import boundStore from "../stores/boundStore.store";
import Layout from "../components/Layout";
import heart2 from "./../assets/images/heart2.png";
import heart3 from "./../assets/images/heart3.png";
import { useNavigate } from "react-router-dom";


function Game() {
  const nav = useNavigate();

  const left = boundStore.use.left();
  const right = boundStore.use.right();
  const score = boundStore.use.score();
  const life = boundStore.use.life();

  const loseLife = boundStore.use.loseLife();
  const addScore = boundStore.use.addScore();
  const setContinue = boundStore.use.setContinue();

  const {continueGame: currentContinue} = boundStore.getState();

  console.log(currentContinue)

  const gameStart = async () => {
      const prevState = {left, right};
      const gameCommand = getGameCommand();
      console.log("스크립트:", gameCommand.script);
      const judge = await new Promise((resolve) => {
        setTimeout(() => {
          const {left: currentLeft, right: currentRight} = boundStore.getState();
          const currentState = {
            left: currentLeft, 
            right: currentRight
          }
          const judge = getJudge(prevState, currentState, gameCommand.side, gameCommand.command);
          console.log("현상태:", currentState)
          console.log(judge ? "맞음" : "틀림");
          resolve(judge);
        }, 2000);
      });

      const {life: currentLife} = boundStore.getState()

      if (judge) 
        addScore();
      else if (!judge && currentLife > 0)
        loseLife();
      else if (!judge && currentLife === 0)
        setContinue(false);

      const {continueGame: currentContinue} = boundStore.getState();

      console.log(currentContinue)
        
      if (currentContinue) 
        gameStart();
      else if (!currentContinue && currentLife === 0)
        setTimeout(() => {nav("/end", {replace: true})}, 3000);
    }

  useEffect(() => {
    gameStart();

    return () => setContinue(false);
  }, []);

  return (
    <Layout 
      headChild={<section className={style.score}>{score}</section>}
      footChild={
        <section className={style.life}>
          <img className={style.heart} src={life >= 1 ? heart3:""} />
          <img className={style.heart} src={life >= 2 ? heart2:""} />
          <img className={style.heart} src={life >= 3 ? heart3:""} />
        </section>
      }
    />
  )
}

export default Game;
import style from "./Start.module.css";
import title from "../assets/images/title2.webp";
import button2 from "../assets/images/button2.webp";
import Layout from "../components/Layout";
import useKeyEnter from "../hooks/useKeyEnter";
import useStartGame from "../hooks/useStartGame";

function Start() {
  useKeyEnter();
  const startGame = useStartGame();

  return (
    <Layout 
      headChild={
        <section className={style.title}> 
          <img src={title} />
        </section>
      }
      footChild={(
        <section className={style.startButton} onClick={startGame}>
          <div className={style.buttonText}>게임 시작!</div>
          <img src={button2}/>
        </section>
      )}
      onClick={()=>{console.log("마이 보디!!!")}}
    />
  )
}

export default Start;
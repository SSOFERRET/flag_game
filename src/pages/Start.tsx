import style from "./Start.module.css";
import title from "../assets/images/title2.webp";
import button2 from "../assets/images/button2.webp";
import Layout from "../components/Layout";
import useKeyEnter from "../hooks/useKeyEnter";
import useStartGame from "../hooks/useStartGame";
import Modal from "../components/Modal";
import {Howl} from "howler";
import openingSound from "./../assets/sounds/opening.mp3";
import { useEffect, useState } from "react";

function Start() {
  useKeyEnter();
  const startGame = useStartGame();
  const [audioAuth, setAudioAuth] = useState<boolean>(false);

  const opening = new Howl({
    src: [openingSound],
    format:["mp3"],
    volume:0.2,
    loop: true
  })

  const onClickModalButton = () => {
    sessionStorage.setItem("audioAuth", "true");
    setAudioAuth(true);
  }

  useEffect(() => {
    if (sessionStorage.getItem("audioAuth")) {
      setAudioAuth(true);
    }
  }, []);

  useEffect(() => {
    if (audioAuth)
      opening.play();

    return () => {
      opening.stop();
    }
  }, [audioAuth]);

  return (
    <div className={style.Start}>
      {
        !audioAuth && (
          <Modal 
            text="음성이 재생됩니다!"
            buttonText="준비됐어요!"
            onClick={onClickModalButton}
           />

        )
      }
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
    </div>
  )
}

export default Start;
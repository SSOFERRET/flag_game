import style from "./index.module.css";
import Layout from "../components/Layout";
import useKeyEnter from "../hooks/useKeyEnter";
import useStartGame from "../hooks/useStartGame";
import {Howl} from "howler";
import { lazy, Suspense, useEffect, useState } from "react";

const title = "/images/title2.webp";
const button2 = "/images/button2.webp";
const openingSound = "/sounds/opening.mp3";

const Modal = lazy(() => (import("../components/Modal")));

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
          <Suspense>
            <Modal 
              text="음성이 재생됩니다!"
              buttonText="준비됐어요!"
              onClick={onClickModalButton}
             />
          </Suspense>
        )
      }
      <Layout 
        headChild={
          <section className={style.title}> 
            <img src={title} alt='게임 타이틀' />
          </section>
        }
        footChild={(
          <section className={style.startButton} onClick={startGame}>
            <div className={style.buttonText}>게임 시작!</div>
            <img className={style.buttonImg} src={button2} alt='말풍선. 게임 시작 버튼으로 사용' />
          </section>
        )}
        onClick={()=>{console.log("마이 보디!!!")}}
      />
    </div>
  )
}

export default Start;
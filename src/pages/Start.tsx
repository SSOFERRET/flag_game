import "./Start.css"
import { useNavigate } from "react-router-dom";
import useToggleLeftRight from "../hooks/useToggleLeftRight";
import useKeyEnter from "../hooks/useKeyEnter";
import Character from "../components/Character";
import title from "../assets/title2.png";
import button2 from "../assets/button2.png";

function Start() {
  const nav = useNavigate();
  const {onClickLeft, onClickRight} = useToggleLeftRight();
  useKeyEnter();

  return (
    <div className="Start">
      <section className="toggleButton">
        <button className="leftButton" onClick={onClickLeft}></button>
        <button className="rightButton" onClick={onClickRight}></button>
      </section> 
      <section className="title">
        <img src={title} />
      </section>
      <Character />
      <section className="startButton" onClick={() => nav("/game")}>
        <div className="buttonText">게임 시작!</div>
        <img src={button2}/>
      </section>
    </div>
  )
}

export default Start;
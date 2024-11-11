import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import "./Start.css"
import useToggleLeftRight from "../hooks/useToggleLeftRight";
import useKeyEnter from "../hooks/useKeyEnter";
import Character from "../components/Character";

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
        <h2>휘날려라!!!</h2>
        <h1>청기 백기</h1>
      </section>
      <Character />
      <section className="startButton">
            <Button text="게임 시작!" onClick={() => {nav('/game')}}/>
      </section>
    </div>
  )
}

export default Start;
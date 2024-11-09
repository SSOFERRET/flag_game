import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import boundStore from "../stores/boundStore.store";
import "./Start.css"
import useToggleLeftRight from "../hooks/useToggleLeftRight";
import useKeyEnter from "../hooks/useKeyEnter";

function Start() {
  const userName = boundStore.use.userName();
  const nav = useNavigate();
  const {onClickLeft, onClickRight} = useToggleLeftRight();
  useKeyEnter();

  return (
    <div className="Start">
      <section className="toggleButton">
        <button className="leftButton" onClick={onClickLeft}></button>
        <button className="rightButton" onClick={onClickRight}></button>
      </section> 
      <section className="userName">
        {userName}
      </section>
      <section className="startButton">
            <Button text="게임 시작!" onClick={() => {nav('/game')}}/>
      </section>
    </div>
  )
}

export default Start;
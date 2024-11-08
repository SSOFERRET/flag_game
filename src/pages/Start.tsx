import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import boundStore from "../stores/boundStore.store";
import "./Start.css"

function Start() {
  const userName = boundStore.use.userName();
  const nav = useNavigate();

  return (
    <div className="Start">
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
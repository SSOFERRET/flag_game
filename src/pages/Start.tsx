import { useNavigate } from "react-router-dom";
import title from "../assets/title2.png";
import button2 from "../assets/button2.png";
import Layout from "../components/Layout";

function Start() {
  const nav = useNavigate();

  return (
    <Layout 
      headChild={<img src={title} />}
      footChild={(
        <section className="startButton" onClick={() => nav("/game")}>
          <div className="buttonText">게임 시작!</div>
          <img src={button2}/>
        </section>
      )}
    />
  )
}

export default Start;
import "./Character.css"
import headImg from "./../assets/head.png";
import leftDownImg from "./../assets/leftDown.png";
import leftUpImg from "./../assets/leftUp.png";
import rightDownImg from "./../assets/rightDown.png";
import rightUpImg from "./../assets/rightUp.png";
import legImg from "./../assets/legs.png";
import boundStore from "../stores/boundStore.store";

const Character = () => {
  const left = boundStore.use.left();
  const right = boundStore.use.right();
  const userName = boundStore.use.userName();

  return (
    <div className="Character">
        <section className="body">
        <div className="userName">{userName}</div>
        <img className="head" src={headImg} />
        <img className={`left left_${left}`} src={left==="down" ? leftDownImg : leftUpImg} />
        <img className={`right right_${right}`} src={right==="down" ? rightDownImg : rightUpImg} />
      </section>
      <img className="legs" src={legImg} />
    </div>
  )
}

export default Character;
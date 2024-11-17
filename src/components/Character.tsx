import style from "./Character.module.css";
import headImg from "./../assets/images/head.png";
import leftDownImg from "./../assets/images/leftDown.png";
import leftUpImg from "./../assets/images/leftUp.png";
import rightDownImg from "./../assets/images/rightDown.png";
import rightUpImg from "./../assets/images/rightUp.png";
import legImg from "./../assets/images/legs.png";
import boundStore from "../stores/boundStore.store";

const Character = () => {
  const left = boundStore.use.left();
  const right = boundStore.use.right();
  const userName = boundStore.use.userName();

  return (
    <div className={style.Character}>
        <section className={style.body}>
          <div className={style.userName}>{userName}</div>
          <img className={style.head} 
            src={headImg}
            />
          <img className={`${left === "down" ? style.left : style.leftUp}`} 
            src={left==="down" ? leftDownImg : leftUpImg} 
          />
          <img className={`${right === "down" ? style.right : style.rightUp}`}  
            src={right==="down" ? rightDownImg : rightUpImg}
          />
      </section>
      <img className={style.legs} src={legImg} />
    </div>
  )
}

export default Character;
import style from "./Character.module.css";
import headImg from "./../assets/images/head.webp";
import leftDownImg from "./../assets/images/leftDown.webp";
import leftUpImg from "./../assets/images/leftUp.webp";
import rightDownImg from "./../assets/images/rightDown.webp";
import rightUpImg from "./../assets/images/rightUp.webp";
import legImg from "./../assets/images/legs.webp";
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
          <img key={`left_${left}`} className={`${left === "down" ? style.left : style.leftUp}`} 
            src={left==="down" ? leftDownImg : leftUpImg} 
          />
          <img key={`right_${right}`} className={`${right === "down" ? style.right : style.rightUp}`}  
            src={right==="down" ? rightDownImg : rightUpImg}
          />
      </section>
      <img className={style.legs} src={legImg} />
    </div>
  )
}

export default Character;
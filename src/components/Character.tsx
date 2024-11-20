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
            alt='캐릭터 머리' 
            />
          <img key={`left_${left}`} className={`${left === "down" ? style.left : style.leftUp}`} 
            src={left==="down" ? leftDownImg : leftUpImg} 
            alt='캐릭터 왼팔' 
          />
          <img key={`right_${right}`} className={`${right === "down" ? style.right : style.rightUp}`}  
            src={right==="down" ? rightDownImg : rightUpImg}
            alt='캐릭터 오른팔' 
          />
      </section>
      <img className={style.legs} src={legImg} alt='캐릭터 다리' />
    </div>
  )
}

export default Character;
import style from "./Card.module.css";
import boundStore from "../stores/boundStore.store";
import title3 from "./../assets/images/title3.webp";
import { forwardRef } from "react";
import cardImg from "../assets/images/endCard.webp";


const Card = forwardRef<HTMLDivElement>((_, ref) => {
    const score = boundStore.use.score();
    // const userName = boundStore.use.userName();

    if (!ref) return null;

    return (
        <div className={style.container} ref={ref}>
            <section className={style.title}>
                <img  src={title3} />
            </section>
            <section className={style.innerContainer}>
                <div className={style.score}>{score}<span>점!</span></div>
                <img src={cardImg} />
            </section>
        </div>
    )
});

export default Card;
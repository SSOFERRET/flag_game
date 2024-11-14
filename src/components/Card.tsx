import style from "./Card.module.css";
import boundStore from "../stores/boundStore.store";
import Character from "./Character";
import title3 from "./../assets/title3.png";
import left from "./../assets/share_left.png";
import flag from "./../assets/flag.png";
import { forwardRef } from "react";

const Card = forwardRef<HTMLDivElement>((_, ref) => {
    const score = 10;
    // const userName = boundStore.use.userName();

    if (!ref) return null;

    return (
        <div className={style.container} ref={ref}>
            <section className={style.title}>
                <img  src={title3} />
            </section>
            <section className={style.innerContainer}>
                <div className={style.score}>{score}점!</div>
                <div className={style.character}>
                    <Character hasUserName={true} hasMotion={false} onlyHead={true} />
                    <img className={style.left} src={left} />
                    <img className={style.flag} src={flag} />
                </div>
            </section>
        </div>
    )
});

export default Card;
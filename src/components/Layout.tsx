import style from "./Layout.module.css";
import { ReactNode } from "react";
import Character from "./Character";
import useToggleLeftRight from "../hooks/useToggleLeftRight";

interface ILayout {
    headChild: ReactNode;
    footChild: ReactNode;
    onClick?: () => void;
}

const Layout = ({headChild, footChild, onClick}: ILayout) => {
    const {onClickLeft, onClickRight} = useToggleLeftRight();

    return (
        <>
            <section className={style.toggleButton}>
                {onClick && <button className={style.customButton} onClick={onClick} aria-label='character custom' />}
                <button aria-label='toggle left side' className={style.leftButton} onPointerDown={onClickLeft}></button>
                <button aria-label='toggle right side' className={style.rightButton} onPointerDown={onClickRight}></button>
            </section> 
            <div className={style.Layout}>
                <div className={style.head}>
                    {headChild}
                </div>
                <div className={style.charWrap}>
                    <Character />
                </div>
                <div className={style.foot}>
                    {footChild}
                </div>
            </div>
        </>
    )
}

export default Layout;
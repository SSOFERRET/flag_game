import style from "./Layout.module.css";
import { ReactNode } from "react";
import Character from "./Character";
import useToggleLeftRight from "../hooks/useToggleLeftRight";
import useKeyEnter from "../hooks/useKeyEnter";

interface ILayout {
    headChild: ReactNode;
    footChild: ReactNode;
}

const Layout = ({headChild, footChild}: ILayout) => {
    const {onClickLeft, onClickRight} = useToggleLeftRight();
    useKeyEnter();

    return (
        <>
            <section className="toggleButton">
                <button className="leftButton" onClick={onClickLeft}></button>
                <button className="rightButton" onClick={onClickRight}></button>
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
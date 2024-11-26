import { useEffect, useState } from "react";
import boundStore from "../stores/boundStore.store"
import style from "./ControlInfo.module.css";
import getIsMobile from "../utils/isMobile.util";
import { TbCircleDotted } from "react-icons/tb";

const ControlInfo = () => {
    const left = boundStore.use.left();
    const right = boundStore.use.right();
    const [controlInfoSign, setControlInfoSign] = useState<"mobile"|"pc"|null>(null);

    useEffect(() => {
        if (controlInfoSign) 
            setControlInfoSign(null);
    }, [left, right])

    useEffect(() => {
        const isMobile = getIsMobile();
        if (isMobile) setControlInfoSign("mobile");
        else setControlInfoSign("pc");
    }, [])

    if (controlInfoSign==="mobile")
        return (
        <div className={style.ControlInfo}>
                <section className={style.mobile}>
                    <div className={style.text}>Touch</div>
                    <TbCircleDotted />
                </section>
                <section className={style.mobile}>
                    <div className={style.text}>Touch</div>
                    <TbCircleDotted />
                </section>
        </div>
        )

    else if (controlInfoSign==="pc") 
        return (
            <div className={style.ControlInfo}>
                    <section className={style.pc}>
                        <div className={style.text}>d</div>
                        <div className={style.keyShadow}>d</div>
                    </section>
                    <section className={style.pc}>
                        <div className={style.text}>k</div>
                        <div className={style.keyShadow}>d</div>
                    </section>
            </div>
        )

    else return null;
}

export default ControlInfo;
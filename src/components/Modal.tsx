import { useState } from "react";
import Button from "./Button";
import style from "./Modal.module.css";

interface IModal {
    text: string;
    image?: string;
    buttonText?: string;
    onClick?: () => void;
}

const Modal = ({ text, image, buttonText, onClick }: IModal) => {
    const [visible, setVisible] = useState(true);
    const onClickButton = () => {
        if (onClick) onClick();
        setVisible(false);
    };

    return (
        <>
            {visible && (
                <div>
                    <div className={style.Modal}>
                        <div className={style.text}>{text}</div>
                        {image && <img src={image} className={style.image} />}
                        {buttonText && (
                            <Button
                                onClick={onClickButton}
                                text={buttonText}
                                textSize={"middle"}
                            />
                        )}
                    </div>
                    <div className={style.screen} />
                </div>
            )}
        </>
    );
};

export default Modal;

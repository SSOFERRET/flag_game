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
                        {image && <img src={image} className={style.image} alt={`${text},라는 안내와 관련된 이미지`} />}
                        {buttonText && (
                            <Button
                                onClick={onClickButton}
                                text={buttonText}
                                textSize={"middle"}
                                aria-label="sound auth button"
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

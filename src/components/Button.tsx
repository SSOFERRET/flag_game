import style from "./Button.module.css";

interface IProps {
    text: string;
    onClick: () => void;
}

const Button = ({text, onClick}: IProps) => {
    return (
        <button className={style.button} onClick={onClick}>{text}</button>
    )
}

export default Button;
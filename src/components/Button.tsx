import style from "./Button.module.css";

interface IProps {
    text: string;
    onClick: () => void;
    textSize?: "small" | "middle" | "large";
}

const Button = ({text, onClick, textSize="large"}: IProps) => {
    return (
        <button
          aria-label='universal button component'
          className={textSize === "large" ? style.buttonLarge
            : textSize === "middle" ? style.buttonMiddle
            : style.buttonSmall}
          onClick={onClick}
        >
            {text}
        </button>
    )
}

export default Button;
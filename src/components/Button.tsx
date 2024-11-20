import style from "./Button.module.css";

interface IProps {
    text: string;
    onClick: () => void;
    textSize?: "small" | "middle" | "large";
    ariaLabel?: string;
}

const Button = ({text, onClick, textSize="large", ariaLabel}: IProps) => {
    return (
        <button
        className={textSize === "large" ? style.buttonLarge
          : textSize === "middle" ? style.buttonMiddle
          : style.buttonSmall}
          onClick={onClick}
          aria-label={ariaLabel}
        >
            {text}
        </button>
    )
}

export default Button;
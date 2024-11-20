import style from "./Button.module.css";

interface IProps {
    text: string;
    textSize?: "small" | "middle" | "large";
}

const Button: React.FC<IProps & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({text, textSize="large", ...props}: IProps) => {
    return (
        <button
        className={textSize === "large" ? style.buttonLarge
          : textSize === "middle" ? style.buttonMiddle
          : style.buttonSmall}
          {...props}
        >
            {text}
        </button>
    )
}

export default Button;
import style from "./Button.module.css";

interface IProps {
    text: string;
    onClick: () => void;
    textSize?: "small" | "middle" | "large";
}

const Button = ({text, onClick, textSize="large"}: IProps) => {
    return (
        <button
          name='파란색 버튼 컴포넌트'
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
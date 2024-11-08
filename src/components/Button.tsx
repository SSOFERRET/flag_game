import "./Button.css";

interface IProps {
    text: string;
    onClick: () => void;
}

const Button = ({text, onClick}: IProps) => {
    return (
        <button onClick={onClick}>{text}</button>
    )
}

export default Button;
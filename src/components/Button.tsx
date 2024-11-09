import "./Button.css";

interface IProps {
    text: string;
    onClick: () => void;
}

const Button = ({text, onClick}: IProps) => {
    return (
        <button className="Button" onClick={onClick}>{text}</button>
    )
}

export default Button;
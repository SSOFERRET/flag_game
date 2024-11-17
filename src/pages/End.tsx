import style from "./End.module.css";
import { useRef } from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import html2canvas from "html2canvas";
import { useNavigate } from "react-router-dom";

const End = () => {
    const cardRef = useRef<HTMLDivElement>(null);
    const nav = useNavigate();

    const onClickSaveImage = () => {
        if (cardRef.current) {
            html2canvas(cardRef.current).then((canvas) => {
                const imgData = canvas.toDataURL("image/png");
                const link = document.createElement("a");
                link.href = imgData;
                link.download = "card.png";
                link.click();
              });
            }
          };

    return (
        <div className={style.End}>
            <Card ref={cardRef} />
            <Button text="이미지로 저장" onClick={onClickSaveImage}/>
            <Button text="게임 다시 시작!" onClick={() => nav("/", {replace: true})} />
        </div>
    )
};

export default End;
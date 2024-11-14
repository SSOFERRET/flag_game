import { useRef } from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import "./End.css";
import html2canvas from "html2canvas";

const End = () => {
    const cardRef = useRef<HTMLDivElement>(null);

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
        <div className="End">
            <Card ref={cardRef} />
            <section className="shareButtons">
                <Button text="이미지로 저장" onClick={onClickSaveImage}/>
            </section>
        </div>
    )
};

export default End;
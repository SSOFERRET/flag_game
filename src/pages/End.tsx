import style from "./end.module.css";
import { useEffect, useRef } from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import { Howl } from "howler";
import { useRouter } from "next/router";

const endingSound = "/sounds/ending.mp3";

const End = () => {
    const cardRef = useRef<HTMLDivElement>(null);
    const router = useRouter();
    const soundSourceText = [
        ["스크립트", "네이버 클로바 더빙: 상도"],
        ["오프닝", "제가 부름"],
        ["엔딩", "친구가 부름"],
    ]

    const ending = new Howl({
        src: [endingSound],
        loop: true
    })

    const onClickSaveImage = async () => {
        if (cardRef.current) {
            const html2canvas = await import("html2canvas");
            html2canvas.default(cardRef.current)
            .then((canvas) => {
                const imgData = canvas.toDataURL("image/png");
                const link = document.createElement("a");
                link.href = imgData;
                link.download = "card.png";
                link.click();
              });
            }
          };

    useEffect(() => {
        ending.play();

        return () => {
            ending.stop();
        }
    }, [])

    return (
        <div className={style.End}>
            <Card ref={cardRef} />
            <Button text="이미지로 저장" onClick={onClickSaveImage}/>
            <Button text="게임 다시 시작!" onClick={() => router.push("/")} />
            <div className={style.text}>
                <p>{"<음원 출처>"}</p>
                <ul>
                    {soundSourceText.map(([source, info], idx) => (
                        <li key={idx} className={style.list}>
                            <p className={style.source}>{source}</p>
                            <p className={style.info}>{info}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
};

export default End;
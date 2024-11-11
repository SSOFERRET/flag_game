import Button from "../components/Button";
import ShareImage from "../components/ShareImage";
import "./End.css";

const End = () => {
    return (
        <div className="End">
            <ShareImage />
            <section className="shareButtons">
                <Button text="X에 공유하기" onClick={() => {}}/>
            </section>
        </div>
    )
};

export default End;
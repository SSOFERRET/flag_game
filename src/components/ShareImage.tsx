import "./ShareImage.css"
import boundStore from "../stores/boundStore.store";
import Character from "./Character";

const ShareImage = ({text=""}) => {
    const score = 10;
    const setLeftRight = boundStore.use.setLeftRight();
    setLeftRight("up", "down");
    const userName = boundStore.use.userName();

    return (
        <div className="ShareImage">
            <section className="title">
                청기백기 결과!
            </section>
            <section className="userName">
                {userName}
            </section>
            <section className="character">
                <Character hasUserName={false} hasMotion={false}/>
            </section>
        </div>
    )
}

export default ShareImage;
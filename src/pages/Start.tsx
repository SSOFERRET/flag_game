import boundStore from "../stores/boundStore.store";
import "./Start.css"

function Start() {
  const userName = boundStore.use.userName();

  return (
    <div className="Start">
        {userName}
    </div>
  )
}

export default Start;
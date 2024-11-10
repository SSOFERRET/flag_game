import { Route, Routes } from 'react-router-dom'
import './App.css'
import Game from './pages/Game'
import Start from './pages/Start'
import background from "./assets/background.png";

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/game' element={<Game />} />
      </Routes>
      <section className="background">
        <img src={background} />
      </section>
    </div>
  )
}

export default App

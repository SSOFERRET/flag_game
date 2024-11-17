import { Route, Routes } from 'react-router-dom'
import './App.css'
import Game from './pages/Game'
import Start from './pages/Start'
import background from "./assets/images/background.webp";
import End from './pages/End';

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/game' element={<Game />} />
        <Route path='/end' element={<End />} />
      </Routes>
      <section className="background">
        <img src={background} />
      </section>
    </div>
  )
}

export default App

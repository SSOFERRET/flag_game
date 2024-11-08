import { Route, Routes } from 'react-router-dom'
import './App.css'
import Game from './pages/Game'
import Start from './pages/Start'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/game' element={<Game />} />
      </Routes>
    </div>
  )
}

export default App

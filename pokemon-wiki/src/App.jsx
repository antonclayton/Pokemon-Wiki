import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import PokemonPage from "./pages/PokemonPage"

function App() {

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/pokemon" element={<PokemonPage/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App

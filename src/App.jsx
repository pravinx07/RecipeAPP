
import './App.css'
import {BrowserRouter , Router, Route, Routes} from "react-router-dom"
import RecipeDetails from './components/RecipeDetails'
import RecipeCard from './components/RecipeCard'
import SearchView from './components/SearchView'
import Cuisines from './components/Cuisines'
import Home from './components/Home'
import Navbar from './components/Navbar'
function App() {

  return (  
    <BrowserRouter>
      <div className='min-h-screen bg-gray-950 font-sans text-gray-100'>
        <Navbar/>
        <Cuisines/>
      <Routes>

         <Route path='/' element={<Home/>}/>
      </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

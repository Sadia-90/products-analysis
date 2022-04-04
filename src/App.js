import Navber from './components/Navber/Navber';
import './App.css';
import { Routes, Route} from "react-router-dom";
import Home from "./components/Home/Home"
import Reviews from "./components/Reviews/Reviews"
import Dasboard from "./components/Dasboard/Dasboard"
import Blogs from "./components/Blogs/Blogs"
import About from "./components/About/About"
import Notfound from "./components/Notfound/Notfound"


function App() {
  
  return(
  <>
  <Navber></Navber>
  
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Reviews' element={<Reviews/>}/>
    <Route path='/Dasboard' element={<Dasboard/>}/>
    <Route path='/Blogs' element={<Blogs/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/*' element={<Notfound/>}/>
  </Routes>
  
  </>
  )
}

export default App;

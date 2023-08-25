import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './views/Home/Home'
import Cart from './views/Cart/Cart'
import LoginPage from './views/Login/Login'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
    



export function App(){
 return (
       <Router>
            <Navbar/>
            <Routes>
                  <Route exact path='/' element={<Home/>}></Route>
                  <Route exact path='/login' element={<LoginPage/>}></Route>
                  <Route exact path='/cart' element={<Cart/>}></Route>
            </Routes>
            <Footer/>
       </Router>
      )   
}

export default App
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './views/Home/Home'
import Cart from './views/Cart/Cart'
import LoginPage from './views/Login/Login'
import Register from './views/Register/Register'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomeContextProvider from './context/Home-context'
    


// random comment
export function App(){
 return (
      <HomeContextProvider>
            <div className='App'> 
            <Router>
                  <Navbar/>
            <Routes>
                  <Route path='/' element={<Home/>}></Route>
                  <Route path='/login' element={<LoginPage/>}></Route>
                  <Route path='/cart' element={<Cart/>}></Route>
                  <Route path='/register' element={<Register/>}></Route>
            </Routes>
                  <Footer/>
            </Router>
            </div>
      </HomeContextProvider>
      )   
}

export default App
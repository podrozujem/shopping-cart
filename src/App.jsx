import './App.css';
import { BrowserRouter, Routes,  Route} from 'react-router-dom'; 
import { useSelector } from "react-redux";
import Home from './Pages/Home/Home'; 
import Blog from './Pages/Blog/Blog';
import Navbar from './Home/NavBar/Navbar';

function App() {
  const {cartItems} = useSelector(state => state.cart)

  return (
    <>

          <BrowserRouter>
            <Navbar/> 
            <Routes>
                <Route path="/"  element={<Home/>}/>
                <Route path="/blog" element={<Blog cartItems = {cartItems}/>}/>
            </Routes>
          </BrowserRouter>
          
    </>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Form from "./components/Form";
import Gallery from "./components/Gallery";
import Home from "./components/Home";
// import Login from "./components/Login";
import Cart from "./components/Cart";
import Navigations from './components/Navigations';
import Services from "./components/Services";
// import Signup from "./components/Signup";

function App() {
  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigations/>}>
          <Route  index element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/form" element={<Form/>} />
          <Route path="/gallery" element={<Gallery/>}/>
          <Route path="/cart" element={<Cart/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

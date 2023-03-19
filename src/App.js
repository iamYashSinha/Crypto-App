import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css';

import Header from "../src/components/Header"
import Home from "../src/components/Home"
import Coins from "../src/components/Coins"
import Exchanges from "./components/Exchanges"
import CoinDetails from "../src/components/CoinDetails"
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
        
       <Header /> 

      <Routes>
       
        <Route path="/" element={<Home />}/>
        <Route path="/coins" element={<Coins />}/>
        <Route path="/exchanges" element={<Exchanges />}/>
        <Route path="/coins/:id" element={<CoinDetails />}/>

      </Routes>
     

     <Footer/>
    </Router> 
  )
}

export default App;

import logo from './logo.svg';
import './App.css';
import {Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import Footer from "./components/Footer";
import Ingredient from "./components/Ingredients";


function App() {
  return (
  <div className="App">
        <div className='main-div'>
          <Routes>
            <Route  path="/" element={<MainPage/>} />
            <Route  path="/gradient" element={<Ingredient/>} />
            <Route  path="*" element={<h1 className="not-found">Error 404 page Not Found</h1>}/>
          </Routes>
        </div>
        <Footer/>
    </div>
  );
}

export default App;
import logo from './logo.svg';
import './App.css';
import {Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import Footer from "./components/Footer";
import Ingredient from "./components/Ingredients";

import {useState,useEffect} from "react";
import ContentfulFetch from "./components/contentfulFetch"



function App() {

  const [loading,setLoading] = useState(true);
  const [recipes,setRecipes] = useState([]);

  const {FetchRecipes} = ContentfulFetch();

  useEffect(() => {
      FetchRecipes()
      .then((finalRecipe) => {
          setRecipes(finalRecipe)
          setLoading(false)
          // console.log("finalRecipe App",finalRecipe)
        })
  }, []);



  return (
  <div className="App">
        <div className='main-div'>
          <Routes>
            <Route  path="/" element={<MainPage loading ={loading} recipes ={recipes} />} />
            <Route  path="/gradient/:postId" element={<Ingredient loading ={loading} setLoading ={setLoading} recipes ={recipes} />} />
            <Route  path="*" 
            element={
                  <div style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center", 
                  height: "50vh" }}>
                    <h1 className="not-found">Error 404 page Not Found</h1>
                  </div>
                  }/>
          </Routes>
        </div>
        <Footer/>
    </div>
  );
}

export default App;
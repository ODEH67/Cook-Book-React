import SyncLoader from "react-spinners/ClockLoader";
import { NavLink } from "react-router-dom";
import PotatoSoup from "../img/Main/Creamy_Sweet_Potato_Soup.webp";
import '../CSS-files/cook-book-HomePage-&-ingredients.css';
import Header from "./Header";
import {useState,useEffect} from "react";


export default function FilteredRecipes({recipes,loading}) {

    const [FilteredRecipes,setFilteredRecipes] = useState(recipes);
    const [selectedCategory,setSelectedCategory] = useState("All");


        useEffect(() => {

            if (selectedCategory === "All") {
            setFilteredRecipes(recipes);
            } else {
            const filtered = recipes.filter((item) => item.category === selectedCategory);
            setFilteredRecipes(filtered);
            }

        }, [recipes,selectedCategory]);


    // console.log("loading main",loading)
    // console.log("finalRecipe main",recipes)



    return (
<>
    {!recipes || Object.keys(recipes).length === 0 || loading ? (
        <SyncLoader
            color="white"
            cssOverride={{ margin: "40vh auto" }}
            loading
            size={90}
        />
    ) : (
        <>
        <Header setSelectedCategory ={setSelectedCategory} />
<span id="recipes-today"></span>
    <main className="catalogue">
    {FilteredRecipes.map((item, idx) => {
        return (
        <div className="catalogue-item" key={item.id} >
            <NavLink to={`/gradient/${item.id}`}>
                <img className="food" src={item.image} alt="logo"/>
                <div className="catalogue-item-info">
                    <p className="food-type">{item.category}</p>
                    <h3>{item.title}</h3>
                    <p className="time">{item.preporation_time}</p>
                </div>
            </NavLink>
        </div>
    )})}
    </main>
        </>
        )}
        </>
        )
        }
import {useState,useEffect} from "react";
import SyncLoader from "react-spinners/ClockLoader";
import { Link,useParams } from "react-router-dom";
import PotatoSoup from "../img/Main/Creamy_Sweet_Potato_Soup.webp";
import GradientHeader from "./IngredientsHeader";
import "../CSS-files/cook-book-HomePage-&-ingredients.css"



export default function Gradient({setLoading,recipes,loading}) {

    // console.log("loading ingredient",loading)
    // console.log("finalRecipe ingredient",recipes)

    const [recipe,setRecipe] = useState({});
    const page = useParams();
    // console.log("ingredient page",+page.postId)
    // console.log("ingredient recipe",recipe)


        useEffect(() => {
// plus sign (+) is to convert a string to a Number
        const ClickedRecipe = recipes.find((Item) => Item.id === +page.postId);
        setRecipe(ClickedRecipe);
        setLoading(false)
        // console.log("ClickedRecipe",ClickedRecipe)
        
        }, [recipes]);


    return (
<>
    {!recipe || Object.keys(recipe).length === 0 || loading ? (
        <SyncLoader
            color="rgb(0, 216, 184)"
            cssOverride={{ margin: "40vh auto" }}
            loading
            size={90}
        />
    ) : (
        <>
<GradientHeader recipe={recipe} />
<main className="recipe">
        <img className="recipe-image" src={recipe.image} alt=""/>
        <div className="timing">
            <div className="prep-time">
                <p className="timing-bold">PREP TIME</p>
                <p>{recipe.preporation_time}</p>
            </div>
            <div>
                <p className="timing-bold">SERVINGS</p>
                <p>{recipe.serving}</p>
            </div>
        </div>
        <hr />
        <h2>Ingredients</h2>
        <table>
        <tbody>
            <tr>
                <th>Ingredients</th>
                <th>Quantities</th>
            </tr>
            {recipe.content.ingredients.map((item, idx) => {
        return (
            <tr key={idx}>
                <td stayle={{wordBreak: 'break-word'}}>{item.ingredient}</td>
                <td>{item.quantity}</td>
            </tr>
            )})}
        </tbody>
        </table>
    </main>
    </>
        )}
        </>
        )
        }
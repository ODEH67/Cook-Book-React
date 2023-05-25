import {useState} from "react";
import SyncLoader from "react-spinners/ClockLoader";
import { NavLink } from "react-router-dom";
import PotatoSoup from "../img/Main/Creamy_Sweet_Potato_Soup.webp";
import GradientHeader from "./IngredientsHeader";
import "../CSS-files/cook-book-HomePage-&-ingredients.css"



export default function Gradient() {

    const [loading,setLoading] = useState(false);


    return (
<>
<GradientHeader/>
    {loading ? (
        <SyncLoader
            color="rgb(0, 216, 184)"
            cssOverride={{ margin: "40vh auto" }}
            loading
            size={90}
        />
    ) : (

<main className="recipe">
        <img className="recipe-image" src={PotatoSoup} alt=""/>
        <div className="timing">
            <div className="prep-time">
                <p className="timing-bold">PREP TIME</p>
                <p>15 min</p>
            </div>
            <div className="cook-time">
                <p className="timing-bold">PREP TIME</p>
                <p>50 min</p>
            </div>
            <div className="total-time">
                <p className="timing-bold">PREP TIME</p>
                <p>65 min</p>
            </div>
            <div>
                <p className="timing-bold">SERVINGS</p>
                <p>6 to 8 servings</p>
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
            <tr>
                <td>butter</td>
                <td>2 tablespoons</td>
            </tr>
            <tr>
                <td>medium onion, chopped</td>
                <td>1 (about 1 cup)</td>
            </tr>
            <tr>
                <td>celery ribs, chopped</td>
                <td>2</td>
            </tr>
            <tr>
                <td>medium leek, white and light green parts only, sliced</td>
                <td>1</td>
            </tr>
            <tr>
                <td>clove garlic, chopped</td>
                <td>1 (1 teaspoon)</td>
            </tr>
            <tr>
                <td>orange-flesh sweet potatoes, peeled, cut into 1-inch pieces (about 5 cups)</td>
                <td>1 1/2 pounds (about 2 large)</td>
            </tr>
            <tr>
                <td>chicken stock, store bought or homemade</td>
                <td>4 cups</td>
            </tr>
            <tr>
                <td>cinnamon stick</td>
                <td>1</td>
            </tr>
            <tr>
                <td>ground nutmeg</td>
                <td>1/4 teaspoon</td>
            </tr>
            <tr>
                <td>heavy cream</td>
                <td>1/4 cup</td>
            </tr>
            <tr>
                <td>milk</td>
                <td>3/4 cup</td>
            </tr>
            <tr>
                <td>Salt</td>
                <td>to taste</td>
            </tr>
            <tr>
                <td>Pepper</td>
                <td>to taste</td>
            </tr>
            <tr>
                <td>sour cream or plain yogurt</td>
                <td>1/4 cup</td>
            </tr>
        </tbody>
        </table>
    </main>
        )}
        </>
        )
        }
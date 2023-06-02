import SyncLoader from "react-spinners/ClockLoader";
import { Link } from "react-router-dom";
import PotatoSoup from "../img/Main/Creamy_Sweet_Potato_Soup.webp";
import '../CSS-files/cook-book-HomePage-&-ingredients.css';
import Header from "./Header";


export default function MainPage({recipes,loading}) {


    // console.log("loading main",loading)
    // console.log("finalRecipe main",recipes)

    return (
<>
    {!recipes || Object.keys(recipes).length === 0 ||loading ? (
        <SyncLoader
            color="white"
            cssOverride={{ margin: "40vh auto" }}
            loading
            size={90}
        />
    ) : (
        <>
        <Header/>
<span id="recipes-today"></span>
    <main className="catalogue">
    {recipes.map((item, idx) => {
        return (
        <div className="catalogue-item" key={item.id} >
            <Link to={`/gradient/${item.id}`}>
                <img className="food" src={item.image} alt="logo"/>
                <div className="catalogue-item-info">
                    <p className="food-type">{item.category}</p>
                    <h3>{item.title}</h3>
                    <p className="time">{item.preporation_time}</p>
                </div>
            </Link>
        </div>
    )})}
    </main>
        </>
        )}
        </>
        )
        }
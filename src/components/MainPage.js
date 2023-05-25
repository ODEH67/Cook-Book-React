import {useState} from "react";
import SyncLoader from "react-spinners/ClockLoader";
import { Link } from "react-router-dom";
import PotatoSoup from "../img/Main/Creamy_Sweet_Potato_Soup.webp";
import '../CSS-files/cook-book-HomePage-&-ingredients.css';
import Header from "./Header";


export default function MainPage() {

    const [loading,setLoading] = useState(false);


    return (
<>
<Header/>
    {loading ? (
        <SyncLoader
            color="white"
            cssOverride={{ margin: "40vh auto" }}
            loading
            size={90}
        />
    ) : (
        <>
<span id="recipes-today"></span>
    <main className="catalogue">
    {/* {api && api.recipes && api.recipes.map((item, idx) => {
        return ( */}
        <div className="catalogue-item">
            <Link to="/gradient">
                <img className="food" src={PotatoSoup} alt="logo"/>
                <div className="catalogue-item-info">
                    <p className="food-type">LUNCH</p>
                    <h3>Creamy Sweet Potato Soup</h3>
                    <p className="time">65 mins</p>
                </div>
            </Link>
        </div>
     {/* )})} */}
    </main>
        </>
        )}
        </>
        )
        }
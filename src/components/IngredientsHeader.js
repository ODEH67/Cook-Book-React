import {useContext} from "react";
import { Link } from "react-router-dom";
import '../App.css';
import '../CSS-files/cook-book-ingredients-header.css';
import HeaderLogo from "../img/Header/logo33.png";


export default function IngredientsHeader() {


    return (
        <header className="Ingredients-Header">
        <div className="Ingredients-header-menu-box">
            <div id="Ingredients-header-menu-logo">
                <Link to="/"><img id="Ingredients-logo" src={HeaderLogo} alt="logo"/></Link>
            </div>
            <nav id="Ingredients-nav-header">
                <input type="checkbox" id="Ingredients-menu-button"/>
                <label htmlFor="Ingredients-menu-button"><span className="material-symbols-rounded">menu</span></label>
                <ul className="Ingredients-header-menu">
                    <li><Link id="Ingredients-header-click" className="home-head"  to="/">Home</Link></li>
                    <li><Link id="Ingredients-header-click" className="tips-head" to="">Sweets</Link></li>
                    <li><Link id="Ingredients-header-click" className="breakfast-head" to="">Breakfast</Link></li>
                    <li><Link id="Ingredients-header-click" className="lunch-head" to="">Lunch</Link></li>
                    <li><Link id="Ingredients-header-click" className="dinner-head" to="">Dinner</Link></li>
                    <li><Link id="Ingredients-header-click" className="about-head" to="">About</Link></li>
                </ul>
            </nav>
        </div>
        <div className="ingredients-header-text">
            <h1 id="Ingredients-h1-head">Creamy Sweet Potato {<span id="Ingredients-lazy"><strong>Soup</strong></span>}</h1>
            <p id="Ingredients-title-underline">__________</p>
            <div className="Ingredients-title-text">
                <p id="Ingredients-white-text">Sweet potato soup balances the sweet and savory with onions, garlic, onions, and
                    leeks, along with a bit of nutmeg and cinnamon. Creamy and satisfying!</p>
            </div>
        </div>
    </header> 
    )
}
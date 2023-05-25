import {useContext} from "react";
import HeaderImg from '../img/Header/logo33.png';
import { Link } from "react-router-dom";
import "../CSS-files/cook-book-homepage-header.css"


export default function Header() {



    return (
        <header className='header'>
        <div className="header-menu-box">
            <div id="header-menu-logo">
            <Link to="/"><img id="logo" src={HeaderImg} alt="logo"/></Link>
            </div>
            <nav id="nav-header">
                <input type="checkbox" id="menu-button"/>
                <label htmlFor="menu-button"><span className="material-symbols-rounded">menu</span></label>
                <ul className="header-menu">
                <li><Link id="header-click" className="home-head"  to="/">Home</Link></li>
                    <li><Link id="header-click" className="tips-head" to="">Sweets</Link></li>
                    <li><Link id="header-click" className="breakfast-head" to="">Breakfast</Link></li>
                    <li><Link id="header-click" className="lunch-head" to="">Lunch</Link></li>
                    <li><Link id="header-click" className="dinner-head" to="">Dinner</Link></li>
                    <li><Link id="header-click" className="about-head" to="">About</Link></li>
                </ul>
            </nav>
        </div>
        <div className="header-text">
            <h1 id="h1-head">Simple recipes for &lt;<span id="lazy"><strong>LAZY</strong></span>&gt; coders</h1>
            <p id="title-underline">_______________</p>
            <div className="title-text">
                <p id="white-text">Too much coding & no time for cooking? you are not alone, we got you covered with some
                    quick recipes</p>
            </div>
            <div className="button-div">
                <a href="#recipes-today"><button id="header-button">Tipp of the day</button></a>
            </div>
        </div>
    </header>
    )
}
import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";
export default function Navbar(){
    return(
        <nav className={styles.navbar}>
            <div>
                <ul>
                    <li><NavLink to={"/"} end className={({ isActive }) => isActive ? "activeNav" : "nonActiveNav"}>Accueil</NavLink></li>
                    <li><NavLink to={"/formations"} className={({ isActive }) => isActive ? "activeNav" : "nonActiveNav"}>Formations</NavLink></li>
                    <li>Qui sommes-nous</li>
                    <li>Projets européens</li>
                    <li>Contact</li>
                    <li>Nos services</li>
                </ul>
            </div>
        </nav>
    )
}
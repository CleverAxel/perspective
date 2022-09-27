import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";
export default function Navbar(){
    return(
        <nav className={styles.navbar}>
            <div>
                <ul>
                    <li><NavLink to={"/"} end className={({ isActive }) => isActive ? "activeNav" : "nonActiveNav"}>Accueil</NavLink></li>
                    <li><NavLink to={"/formations"} className={({ isActive }) => isActive ? "activeNav" : "nonActiveNav"}>Formations</NavLink></li>
                    <li><NavLink to={"/formations"} className={({ isActive }) => isActive ? "activeNav" : "nonActiveNav"}>Qui sommes-nous</NavLink></li>
                    <li><NavLink to={"/formations"} className={({ isActive }) => isActive ? "activeNav" : "nonActiveNav"}>Projets européens</NavLink></li>
                    <li><NavLink to={"/formations"} className={({ isActive }) => isActive ? "activeNav" : "nonActiveNav"}>Contact</NavLink></li>
                    <li><NavLink to={"/formations"} className={({ isActive }) => isActive ? "activeNav" : "nonActiveNav"}>Nos services</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}
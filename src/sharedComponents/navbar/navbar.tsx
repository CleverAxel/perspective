import { useCallback, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import styles from "./navbar.module.css";

export default function Navbar(){
    const [toggleHamburgerMenu, setToggleHamburgerMenu] = useState(false);

    useEffect(() => {
        if(toggleHamburgerMenu){
            document.body.style.overflow = "hidden";
        }else{
            document.body.style.overflow = "";
        }
    }, [toggleHamburgerMenu]);



    return(
        <>
        <nav className={styles.navbar}>
            <div>
                <ul>
                    <li><NavLink to={"/"} end className={({ isActive }) => isActive ? "activeNav" : "nonActiveNav"}>Accueil</NavLink></li>
                    <li><NavLink to={"/formations"} className={({ isActive }) => isActive ? "activeNav" : "nonActiveNav"}>Formations</NavLink></li>
                    <li><NavLink to={"/qui-sommes-nous"} className={({ isActive }) => isActive ? "activeNav" : "nonActiveNav"}>Qui sommes-nous</NavLink></li>
                    
                    <li><NavLink to={"/formations"} className={({ isActive }) => isActive ? "activeNav" : "nonActiveNav"}>Contact</NavLink></li>
                    <li><NavLink to={"/formations"} className={({ isActive }) => isActive ? "activeNav" : "nonActiveNav"}>Nos services</NavLink></li>
                </ul>
            </div>
        </nav>
        <button className={styles.hamburgerButton} onClick={() => {setToggleHamburgerMenu(!toggleHamburgerMenu)}}>
            <div></div>
            <div></div>
            <div></div>
        </button>

        {toggleHamburgerMenu && 
            <MenuMobile setToggle={setToggleHamburgerMenu}></MenuMobile>
        }

        </>
        
    )
}

function MenuMobile(props:PropsMenuHamburger){
    const refCallback = useCallback((node:HTMLDivElement) => {
        if(node){
            setTimeout(() => {
                node.style.transform = "";
            });
        }
    },[]);
    return(
        <div ref={refCallback} className={styles.menuMobile} style={{transform: "translateY(-100%)"}}>
            <div>

                <div className={styles.containCloseButton}>
                    <button onClick={() => {props.setToggle(false)}}>
                        <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
                    </button>
                </div>

                <div className={styles.navMobile}>
                    <ul>
                        <NavLink onClick={() => {props.setToggle(false)}} to={"/"} end className={({ isActive }) => isActive ? "activeNavMobile" : "nonActiveNavMobile"}> <li>Accueil</li> </NavLink>
                        <NavLink onClick={() => {props.setToggle(false)}} to={"/formations"} className={({ isActive }) => isActive ? "activeNavMobile" : "nonActiveNavMobile"}> <li>Formations</li> </NavLink>
                        <NavLink onClick={() => {props.setToggle(false)}} to={"/qui-sommes-nous"} className={({ isActive }) => isActive ? "activeNavMobile" : "nonActiveNavMobile"}> <li>Qui sommes-nous</li> </NavLink>
                        
                        <NavLink onClick={() => {props.setToggle(false)}} to={"/formations"} className={({ isActive }) => isActive ? "activeNavMobile" : "nonActiveNavMobile"}> <li>Contact</li> </NavLink>
                        <NavLink onClick={() => {props.setToggle(false)}} to={"/formations"} className={({ isActive }) => isActive ? "activeNavMobile" : "nonActiveNavMobile"}> <li>Nos services</li> </NavLink>
                    </ul>
                </div>

            </div>
            
        </div>
    )
}

interface PropsMenuHamburger{
    setToggle:React.Dispatch<React.SetStateAction<boolean>>
}
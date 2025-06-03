import React from 'react';
import logo from '../imgs/logoNovusTech.png';
import { NavLink, useNavigate } from 'react-router-dom'; // Importando o NavLink
import styles from './NavBar.module.css'; // Importando CSS Module

export default function NavBar() {
    const navigate = useNavigate();

    return (
        <header className={styles.header}> {/* Usando a classe escopada */}
            <img src={logo} className={styles.logo} alt="logo" /> {/* Usando a classe escopada */}

            {/* Usando NavLink para navegação */}
            <NavLink className={styles.linkHeader} to="/" activeClassName={styles.active}>Home</NavLink>
            <NavLink className={styles.linkHeader} to="/about" activeClassName={styles.active}>Sobre</NavLink>
            <NavLink className={styles.linkHeader} to="/store" activeClassName={styles.active}>Lojas</NavLink>

            <div className={styles.headerButtons}> {/* Usando a classe escopada */}
                <button onClick={() => navigate("/login")}>
                    Área do Cliente
                    
                    <span className="material-symbols-outlined">account_circle</span>
                </button>

            </div>
        </header>
    );
}


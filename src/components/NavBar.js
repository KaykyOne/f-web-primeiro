import React from 'react';
import logo from '../imgs/logoNovusTech.png';
import { NavLink } from 'react-router-dom'; // Importando o NavLink
import styles from './NavBar.module.css'; // Importando CSS Module

export default function NavBar() {
    return (
        <header className={styles.header}> {/* Usando a classe escopada */}
            <img src={logo} className={styles.logo} alt="logo" /> {/* Usando a classe escopada */}
            
            {/* Usando NavLink para navegação */}
            <NavLink className={styles.linkHeader} to="/" activeClassName={styles.active}>Home</NavLink> 
            <NavLink className={styles.linkHeader} to="/about" activeClassName={styles.active}>Sobre</NavLink>

            <div className={styles.headerButtons}> {/* Usando a classe escopada */}
                <button>Enviar Mensagem 
                    <span className="material-symbols-outlined">
                        call
                    </span>
                </button>

            </div>
        </header>
    );
}

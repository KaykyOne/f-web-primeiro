import React from 'react';
import logo from '../imagens/logoNovusTech.png';
import { useNavigate } from 'react-router-dom'; 

export default function Header() {
    const navigate = useNavigate();

    const alterTable = (page) => {
      navigate(`/${page}`)
    }

    return (
        <header className="header">
            <img src={logo} className="logo" alt="logo" />
            <a  onClick={() => alterTable("")}>Home</a>
            <a  onClick={() => alterTable("about")}>Sobre</a>
            <div className='header-buttons'>
                <button>Enviar Mensagem 
                <span class="material-symbols-outlined">
                    call
                </span></button>
            </div>
        </header>
    )
}

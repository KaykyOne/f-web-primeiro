import React from 'react';
import styles from './Footers.module.css';  // Importando o CSS Module

export default function Footers() {
    return (
        <div className={styles.footer}> {/* Usando a classe escopada */}
            <h2>NovusTech</h2>
            <p>Inovação e tecnologia para o seu futuro</p>
            <p>&copy; 2025 NovusTech. Todos os direitos reservados.</p>
        </div>
    );  
}

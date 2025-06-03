import React from 'react';
import CheckBox from '../components/CheckBox';
import imagem from '../imgs/image_back.svg';
import Button from '../components/Button';
import Card from '../components/Card';
import styles from './Home.module.css';

export default function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.containerGrid}>
        <div className={styles.containerStart}>
          <h1 className={styles.homeTextGreat}>Fazendo o melhor para os melhores</h1>
          <p className={styles.homeText}>Aqui todos os caminhos levam à inovação!</p>
          <Button>Sobre</Button>
        </div>

        <img className={styles.imgHome} src={imagem} />

      </div>
      <div className={styles.containerSecondary}>
        <div className={styles.containerGrid}>
          <div className={styles.gridContainer3}>

            <Card>
              <>
                <h3>Automação</h3>
                <h1>Integração</h1>
                <div className={styles.containerVertical}>
                  <p className={styles.homeText}>Temos tudo para diminuir seu trabalho ao máximo!</p>
                </div>
                <Button>Saiba Mais</Button>
              </>
            </Card>

            <Card>
              <>
                <h3>Automação</h3>
                <h1>Integração</h1>
                <div className={styles.containerVertical}>
                  <p className={styles.homeText}>Temos tudo para diminuir seu trabalho ao máximo!</p>
                </div>
                <Button>Saiba Mais</Button>
              </>
            </Card>

            <Card>
              <>
                <h3>Automação</h3>
                <h1>Integração</h1>
                <div className={styles.containerVertical}>
                  <p className={styles.homeText}>Temos tudo para diminuir seu trabalho ao máximo!</p>
                </div>
                <Button>Saiba Mais</Button>
              </>
            </Card>

          </div>
          <div className={styles.containerStart}>
            <h1 className={styles.textGreatWhite}>Buscando Novidades!</h1>
            <p className={styles.textSupportLight}>Você vai ter sempre o melhor!</p>
          </div>
        </div>
      </div>

      <div>
        <h1>Produtos</h1>
      </div>
    </div>
  );
}

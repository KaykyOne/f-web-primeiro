import { Link, Outlet } from 'react-router-dom';
import styles from './Painel.module.css';

export default function Painel() {
  return (
    <div className={styles.painelContainer}>
      <aside className={styles.menuLateral}>
        <h2 className={styles.tituloMenu}>Painel</h2>
        <nav>
          <ul>
            <li>
              <Link to="products" className={styles.linkMenu}>
                Produto
              </Link>
            </li>
            <li>
              <Link to="brand" className={styles.linkMenu}>
                Marca
              </Link>
            </li>
          </ul>
          <a>
            <Link to="/" className={styles.linkMenu}>
              Sair
            </Link>
          </a>
        </nav>
      </aside>

      <main className={styles.conteudo}>
        {/* Aqui renderiza Products ou Brand */}
        <Outlet />
      </main>
    </div>
  );
};

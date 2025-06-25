import { useState } from 'react';
import styles from './Login.module.css';
import Image from '../imgs/image_login.svg';
import Logo from '../imgs/logoNovusTech.png';
import { NavLink } from 'react-router-dom';
import useLogin from '../hooks/useLogin';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
  const [passVisi, setPassVisi] = useState(false);
  const { confirm, email, error, setEmail, setSenha, senha } = useLogin();

  return (
    <div className={styles.containerDouble}>
      <div className={styles.containerLef}>
        <div className={styles.textLeft}>
          <h1>Olá Novamente</h1>
          <p>Aqui Você que é o chefe! ;)</p>
        </div>
        <img className={styles.imgLogin} src={Image} />
        <div className={styles.containerLogo}>
          <img className={styles.logo} src={Logo} />
          <h4>NovusTech</h4>
        </div>
      </div>

      <div className={styles.containerRight}>
        <div className={styles.containerButtonBack}>
          <span className="material-symbols-outlined">arrow_back</span>
          <NavLink className={styles.buttonBack} to="/">Voltar</NavLink>
        </div>
        <renderError />
        <div className={styles.containerForm}>
          <h1>Login</h1>
          {error && <p className="errorText">{error}</p>}

          <input
            placeholder='Email'
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className={styles.containerPass}>
            <input
              type={passVisi ? "text" : "password"}
              placeholder='Senha'
              className={styles.input}
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            <button
              className={styles.buttonPass}
              onClick={() => setPassVisi(!passVisi)}
              type="button"
            >
              <span className="material-symbols-outlined">
                {passVisi ? "visibility_off" : "visibility"}
              </span>
            </button>
          </div>

          <button className={styles.button} onClick={confirm}>Avançar</button>

          <div className={styles.containerButtonBack}>
            <span className="material-symbols-outlined">arrow_back</span>
            <NavLink className={styles.buttonBack} to="/register">
              Não tem uma conta? Crie uma!
            </NavLink>
          </div>
        </div>
      </div>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false} 
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}






import React, { useEffect, useState } from 'react';
import styles from './Register.module.css';
import Image from '../imgs/image_register.svg';
import Logo from '../imgs/logoNovusTech.png';
import { NavLink, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { ValidarEmail } from '../generic-functions/validacoes';
import { useAuthentication } from '../hooks/useAuthentication';

export default function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [nome, setNome] = useState("");
  const [error, setError] = useState('');
  const [enviado, setEnviado] = useState(false);
  const { auth, createUser, error: authError, loading } = useAuthentication();

  const confirm = async () => {
    if (testCampos()) {
      setError(""); // limpa o erro visual se tiver tudo certo
    }
    const user = {
      email: email,
      password: pass,
      displayName: nome,
    }
    setEnviado(true);
    await createUser(user);
  };

  useEffect(() => {
    if (!loading && !error) {
      if (authError) {
        toast.error(`error: ${authError}`)
        return;
      }else if(auth && !authError && enviado){
        toast.success("Cadastro validado com sucesso!");
        setEnviado(false);
      }
    }
  }, [loading])

  const testCampos = () => {
    if (nome === "") {
      toast.error("Nome está vazio!");
      setError("Nome está vazio!");
      return false;
    }

    if (email === "") {
      toast.error("Email está vazio!");
      setError("Email está vazio!");
      return false;
    }

    if (!ValidarEmail(email)) {
      toast.error("Email é inválido");
      setError("Email é inválido");
      return false;
    }

    if (confirmPass === "" || pass === "") {
      toast.error("Senhas estão vazias!");
      setError("Senhas estão vazias!");
      return false;
    }

    if (confirmPass !== pass) {
      toast.error("Senhas não conferem!");
      setError("Senhas não conferem!");
      return false;
    }

    if (pass.length < 6) {
      toast.error("A senha precisa ter no mínimo 6 caracteres!");
      setError("A senha precisa ter no mínimo 6 caracteres!");
      return false;
    }

    return true;
  }

  return (
    <div className={styles.containerDouble}>
      <div className={styles.containerRight}>
        <div className={styles.containerButtonBack}>
          <span class="material-symbols-outlined">
            arrow_back
          </span>
          <NavLink className={styles.buttonBack} to="/">Voltar</NavLink>
        </div>
        <div className={styles.containerForm}>
          <h1>Cadastro</h1>
          {error && <p className="errorText">{error}</p>}
          <input placeholder='Nome' className={styles.input} value={nome} onChange={(e) => setNome(e.target.value)} />
          <input placeholder='Email' className={styles.input} value={email} onChange={(e) => setEmail(e.target.value)} />
          <input placeholder='Senha' className={styles.input} value={pass} onChange={(e) => setPass(e.target.value)} />
          <input placeholder='Confirme a Senha' className={styles.input} value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)} />

          <button className={styles.button} onClick={confirm}>Avançar</button>
          <div className={styles.containerButtonBack}>
            <span class="material-symbols-outlined">
              arrow_back
            </span>
            <NavLink className={styles.buttonBack} to="/login">Já tem uma conta? clique aqui!</NavLink>
          </div>
        </div>
      </div>
      <div className={styles.containerLef}>
        <div className={styles.textLeft}>
          <h1>Bem-Vindo</h1>
          <p>Aqui Você que é o chefe!</p>
        </div>
        <img className={styles.imgLogin} src={Image} />
        <div className={styles.containerLogo}>
          <img className={styles.logo} src={Logo} />
          <h4>NovusTech</h4>
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
  )
}

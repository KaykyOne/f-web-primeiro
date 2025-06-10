import { useState } from 'react'
import { toast } from 'react-toastify';
import { ValidarEmail } from '../generic-functions/validacoes';
import { useAuthentication } from './useAuthentication';
import { useNavigate } from 'react-router-dom';

export default function useLogin() {
    const navigate = useNavigate();
    const { login } = useAuthentication();
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");

    const confirm = async () => {
        let test = testCampos();
        if (test) {
            setError("");
            const user = await login(email, senha)
            if (user) {
                toast.success("Login com sucesso!");
                navigate('/painel')
            }
            else{
                toast.error("Erro no Login");
            }
        }
    };

    const testCampos = () => {
        if (email === "") {
            toast.error("Email está vazio!");
            setError("Email está vazio!");
            return false;
        }

        if (!ValidarEmail(email)) {
            toast.error("Email inválido!");
            setError("Email inválido!");
            return false;
        }

        if (senha === "") {
            toast.error("Senha está vazia!");
            setError("Senha está vazia!");
            return false;
        }

        if (senha.length < 6) {
            toast.error("Senha precisa ter pelo menos 6 caracteres!");
            setError("Senha muito curta!");
            return false;
        }

        return true;
    }

    return { setEmail, email, setSenha, senha, confirm, error }
}

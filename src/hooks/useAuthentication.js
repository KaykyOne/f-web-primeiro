// useAuthentication.js
import { useState, useEffect } from 'react';
import {
    getAuth, // Importar o auth
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from "firebase/auth";
import { auth } from '../connections/firebase';

export const useAuthentication = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);
    const [cancelled, setCancelled] = useState(false);



    useEffect(() => {
        return () => setCancelled(true);
    }, []);

    function checkIfIsCancelled() {
        if (cancelled) {
            return;
        }
    }

    const createUser = async (data) => {
        checkIfIsCancelled()
        setLoading(true)

        try {
            const { user } = await createUserWithEmailAndPassword(
                auth, data.email, data.password // Use a instância auth, não o db
            )

            await updateProfile(user, {
                displayName: data.nome
            })
            return user
        }
        catch (error) {
            let systemErrorMessage;
            if (error.message.includes("Password ")) {
                systemErrorMessage = "A senha precisa conter pelo menos 6 caracteres";
            }
            else if (error.message.includes("email-already")) {
                systemErrorMessage = "E-mail já cadastrado";
            }
            else {
                systemErrorMessage = "Ocorreu um erro - Tente Novamente";
            }
            setError(systemErrorMessage); // Use o erro correto aqui
            console.log(error);
        }
        finally {
            setLoading(false);
        }
    }

    const login = async (email, senha) => {
        checkIfIsCancelled();
        setLoading(true);
        try {
            let user;
            await signInWithEmailAndPassword(auth, email, senha)
                .then((userCredential) => {
                    user =  userCredential;
                })
                .catch((error) => {
                    setError(error.message)
                });
                return user;
        } catch (error) {
            setError(error); // Use o erro correto aqui
            console.log(error);
        }
    }

    return { auth, createUser, login, error, loading } // Retorne também a instância do auth
}

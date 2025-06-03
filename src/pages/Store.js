import React from 'react'
import style from './Store.module.css';
import Button from '../components/Button';

export default function Store() {

    const enviar = () => {

    }

    return (
        <div className={style.container}>
            <div className={style.containerForm}>
                <h1>Cadastrar Loja</h1>
                <form className={style.form} onSubmit={enviar}>
                    <input placeholder='loja' required type='text' className={style.input} />
                    <input placeholder='endereco' required type='text' className={style.input} />
                    <input placeholder='cidade' required type='text' className={style.input} />
                    <select id="uf" name="uf" required class="border px-2 py-1 rounded" className={style.input} >
                        <option value="">Selecione o estado...</option>
                        <option value="AC">AC</option>
                        <option value="AL">AL</option>
                        <option value="AP">AP</option>
                        <option value="AM">AM</option>
                        <option value="BA">BA</option>
                        <option value="CE">CE</option>
                        <option value="DF">DF</option>
                        <option value="ES">ES</option>
                        <option value="GO">GO</option>
                        <option value="MA">MA</option>
                        <option value="MT">MT</option>
                        <option value="MS">MS</option>
                        <option value="MG">MG</option>
                        <option value="PA">PA</option>
                        <option value="PB">PB</option>
                        <option value="PR">PR</option>
                        <option value="PE">PE</option>
                        <option value="PI">PI</option>
                        <option value="RJ">RJ</option>
                        <option value="RN">RN</option>
                        <option value="RS">RS</option>
                        <option value="RO">RO</option>
                        <option value="RR">RR</option>
                        <option value="SC">SC</option>
                        <option value="SP">SP</option>
                        <option value="SE">SE</option>
                        <option value="TO">TO</option>
                    </select>
                    <Button style={{width:"100%"}}>Cadastrar</Button>
                </form>
            </div>

        </div>
    )
}

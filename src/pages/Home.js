import React from 'react';

import CheckBox from '../components/CheckBox';

import imagem from '../imgs/imagem_back.png';

export default function HomePage() {
  return (
    <div className='container'>
      <div className='container-grid'>
        <div className='container-start'>
          <h1 className='home-text-great'>Fazendo o melhor para os melhores</h1>
          <p className='home-text'>Aqui todos os caminhos levam a inovação!</p>
          {/* <div className='container-inline'>
              <img className='logo' src={logo} />
              <h3>NovusTech</h3>
            </div> */}
          <button className='button'>
            Sobre
          </button>

        </div>
        <img className='img-home' src={imagem} />
      </div>
      <div className='container-secundary'>
        <div className='container-grid'>
          <div className='grid-container-3'>

            <div className='card'>
              <div className='card-content-start'>
                <h3>Suporte</h3>
                <h1>24 Horas</h1>
                <p className='home-text'>Aqui na NovusTech estamos com você todos os dias!</p>
              </div>
              <button className='button'>Saiba Mais</button>
            </div>

            <div className='card'>
              <div className='card-content-start'>
                <h3>Nossos</h3>
                <h1>Beneficios</h1>
                <div className='container-vertical'>
                  <CheckBox>
                    Sistema Leve
                  </CheckBox>
                  <CheckBox>
                    Simples e Fácil
                  </CheckBox>
                  <CheckBox>
                    Integração Total
                  </CheckBox>
                </div>
              </div>
              <button className='button'>Saiba Mais</button>
            </div>

            <div className='card'>
              <div className='card-content-start'>
                <h3>Automação</h3>
                <h1>Integração</h1>
                <div className='container-vertical'>
                  <p className='home-text'>Temos tudo para diminuir seu trabalho ao máximo!</p>
                </div>
              </div>
              <button className='button'>Saiba Mais</button>
            </div>

          </div>
          <div className='container-start'>
            <h1 className='text-great-white'>Buscando Novidades!</h1>
            <p className='text-suport-light'>Você vai ter sempre o melhor!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

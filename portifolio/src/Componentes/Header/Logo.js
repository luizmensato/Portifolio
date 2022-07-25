import React from 'react';

export default class Logo extends React.Component {
  render() {
    return (
      <section className='logo'>
        <picture>
          <img src='./img/Logo.png' alt='Imagem do Logo' /><br></br>
          <em>Aluguéis de Casas e Apartamentos</em>
        </picture>
      </section>
    );
  }

}

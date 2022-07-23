import React from 'react';

export default class Address extends React.Component {
  render() {
    return (
      <section className='address'>
        <img src='./img/Icone_Whats.png' alt='Endereço do Neverline Imóveis'/> <strong>(11) 98865-1543</strong><br></br>
        <span>Av. Maria Marques de Oliveira, 1123 - Salto-SP</span><br></br>
        <em>Apartir de R$ 1000,00</em>
      </section>
    );
  }

}

import React from 'react';

export default class Footer extends React.Component {
  render() {
    return (
      <section className='footer'>
        <div>
          <img src='./img/Logo.png' alt='Imagem do Logo' />
        </div>
        <div>
          Endereço: Rua Flores de Maio, 197 - Porto Seguro<br />
          Telefone: (11) 98865-1543<br />
          Email: imobilar@hotmail.com<br />
        </div>
      </section>
    );
  }

}

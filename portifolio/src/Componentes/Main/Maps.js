import React from 'react';

export default class Maps extends React.Component {
  render() {
    return (
      <section className='maps'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4361.562562784153!2d-47.28249818082758!3d-23.183980512067404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf4de59a0b7b93%3A0xd0fbe4aa098d1d1!2sR.%20das%20Fl%C3%B4res%20de%20Maio%2C%20197%20-%20Jardim%20Independencia%2C%20Salto%20-%20SP%2C%2013321-556!5e0!3m2!1spt-BR!2sbr!4v1658755117415!5m2!1spt-BR!2sbr" 
        allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </section>
    );
  }

}

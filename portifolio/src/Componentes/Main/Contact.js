import React from 'react';
import InputMask from "react-input-mask";
import emailjs from 'emailjs-com';

export default class Contact extends React.Component {
  render() {

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_24csee9', 'template_un733jb', e.target, 'x5-GvY5KdlbVssxkJ')
      .then((result) => {
          alert('Mensagem enviada com sucesso');
      }, (error) => {
          alert(error.message);
      });
      e.target.reset();
    }

    return (
      <section className='formulario-contato' id='contact'>
        <h1>Fale Conosco</h1>
        <form className='form-contato' onSubmit={sendEmail}>
          <input type="text" name='nome' id='nome' placeholder='Digite seu nome'/>
          <InputMask type="tel" name='telefone' id='telefone' placeholder='Digite seu telefone' mask="(99)99999-9999" />
          <input type="email" name='email' id='email' placeholder='Digite seu email'/>
          <textarea name='mensagem' id='mensagem' placeholder='Digite sua mensagem'></textarea>
          <input type="submit" value="Enviar"/>
        </form>
      </section>
    );
  }

}
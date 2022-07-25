import React from 'react';
import InputMask from "react-input-mask";

export default class Contact extends React.Component {
  render() {
    return (
      <section className='formulario-contato'>
        <h1>Fale Conosco</h1>
        <form className='form-contato' name='form-contato' id='form-contato' method='post' action='/controllers/formContato.php'>
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

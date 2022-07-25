import React from 'react';
import Slide from './Main/Slide'
import Information from './Main/Information'
import Contact from './Main/Contact'
import Maps from './Main/Maps'
import Conteudo from './Main/conteudo_info'

export default class Main extends React.Component {
  render() {
    return (
      <section className='main'>
        <Slide />
        <Information />
        <Conteudo />
        <Contact />
        <Maps />
      </section>
    );
  }

}

import React from 'react';
import Slide from './Main/Slide'
import Information from './Main/Information'
import Contact from './Main/Contact'
import Maps from './Main/Maps'

export default class Main extends React.Component {
  render() {
    return (
      <section className='main'>
        <Slide />
        <Information />
        <Contact />
        <Maps />
      </section>
    );
  }

}

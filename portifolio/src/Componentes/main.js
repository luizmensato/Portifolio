import React from 'react';
import Slide from './Header/Nav'
import Information from './Header/ButtonMob'
import Contact from './Header/Logo'
import Maps from './Header/Address'

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

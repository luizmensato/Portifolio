import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default class Nav extends React.Component {
  render() {
    return (
      <section className="nav">
        <AnchorLink href='#home' offset={80}>Home</AnchorLink>
        <AnchorLink href='#photo' offset={80}>Fotos</AnchorLink>
        <AnchorLink href='#information'>Informações</AnchorLink>
        <AnchorLink href='#contact'>Contato</AnchorLink>
      </section>
    );
  }

}

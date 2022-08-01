import React from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends React.Component {
  render() {
    return (
      <section className="nav">
        <Link to="/">Home</Link>
        <Link to="/contato">Contato</Link>
        
      </section>
    );
  }

}
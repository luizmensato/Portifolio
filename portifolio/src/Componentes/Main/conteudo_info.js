import React from 'react';
import InformationInfo from './information_info';
import { Link } from 'react-router-dom';

export default class Conteudo extends React.Component {
  render() {
    return (
      <>
      <section className='conteudo-info'>
        
        <p>Casa com 2 quartos e uma suíte com pisos em cerâmica, salas ampla e 
          cozinha americana com pisos e revestimentos em cerâmica e bancada de granito.
          Banho social com piso e revestimento em cerâmica, 2 vagas na garagem e portaria 24 hs.
          Agende hoje mesmo uma visita e venha conhecer este imóvel. Preços poderão sofrer
          alterações sem aviso prévio.</p>
      </section>
      <section className='vantagens'>
      <Link to="/casas"><InformationInfo image='icone_casa_information.jpg' alt='Icone de uma casa'
      texto='Excelentes Casas com ótimas estruturas reforçadas com acabamentos
      em porcelana e uma ótima localização.' /></Link>
      <Link to="/apartamentos"><InformationInfo image='icone_casa_information.jpg' alt='Icone de uma casa'
      texto='Apartamentos de 2 suítes com sala e cozinha amplas em uma ótima localização
      no centro de salto. ' /></Link>
    </section>
      </>
      
    );
  }

}

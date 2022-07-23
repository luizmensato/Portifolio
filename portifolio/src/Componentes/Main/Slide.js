import React from 'react';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';

export default class Slide extends React.Component {
  render() {

    const images = [
      {
        original: 'img/Photos/Original/Chapada.jpeg',
        thumbnail: 'img/Photos/Original/Chapada.jpeg',
      },
      {
        original: 'img/Photos/Original/monte_serrat.jpeg',
        thumbnail: 'img/Photos/Original/monte_serrat.jpeg',
      },
      {
        original: 'img/Photos/Original/Lagos_Icarai.jpg',
        thumbnail: 'img/Photos/Original/Lagos_Icarai.jpg',
      },
      {
        original: 'img/Photos/Original/Santa_Ines.jpg',
        thumbnail: 'img/Photos/Original/Santa_Ines.jpg',
      },
    ];

    return (
      <>
      <ImageGallery items={images} autoPlay="True"/>
      </>
        
      
    );
  }

}

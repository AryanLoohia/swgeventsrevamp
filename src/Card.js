import React, { useEffect } from 'react';
import './Card.css';
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import img4 from './images/img4.jpg';
import img5 from './images/img5.jpg';
import img6 from './images/img6.jpg';
import img7 from './images/img7.JPG';
import img8 from './images/img8.JPG';
import img9 from './images/img9.JPG';
import img10 from './images/img10.jpeg';
import img11 from './images/img11.jpeg';
import img12 from './images/img12.jpeg';



const images = [img1,img2, img3, img4, img5, img6, img7, img8, img9,img10,img11,img12];

const Card = ({ index }) => {
  useEffect(() => {
    const card = document.getElementById(`card-${index}`);
    if (card) {
      card.style.animationDelay = `${index * 0.3}s`;
      card.style.animationDuration = '4s';
    }
  }, [index]);

  const imageUrl = images[index % images.length];

  return (
    <div className="card" id={`card-${index}`}>
      <img src={imageUrl} alt={`Card ${index + 1}`} className="card-image" />
    </div>
  );
};

export default Card;

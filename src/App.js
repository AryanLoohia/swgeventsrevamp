import React from 'react';
import './App.css';
import Card from './Card';
import Details from './Details';
import img from './images/arrow-down-sign-to-navigate.png';
import Footer from './Footer.jsx';
import Navbar from './Navbar.js';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  
  const cardCount = 15;
  const scrollDown=()=>{
    window.scrollBy({
      top: window.innerHeight*1.0,
      behavior:'smooth',})
  };

  // const scrollup=()=>{
  //   window.scrollTo({
  //     top:-window.innerHeight*1.0,
  //     behavior:"smooth",
  //   })
  // }
  
  // const scrollToTop=()=>{
  //   window.scrollTo({
  //     top:0,
  //     behavior:"smooth",
  //   })
  // }


  // const scrollToBottom=()=>{
  //   window.scrollBy({
  //     top:document.body.scrollHeight,
  //     behavior:"smooth",
  //   })
  // }
  return (
    <>
    <Navbar></Navbar>
    <div className="card-container">
      {Array.from({ length: cardCount }).map((_, index) => (
   <Card key={index} index={index} />
      ))}     
    </div>
    <div className="overlay">
    <div className="overlay-text">EVENTS AND INITIATIVES</div><br></br><br></br>
    <img src={img} alt="Moving Image" className="moving-image" onClick={scrollDown} />
    
    </div><br></br><br></br><br></br>
    <Details></Details>
    <Footer></Footer>
    </>
  );
}

export default App;

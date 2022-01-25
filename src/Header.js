import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {useEffect, useState} from 'react';

function Header() {
  useEffect(() => {
    const header = document.querySelector(".topnav");
    if(window.innerWidth < 768) {
      header.classList.add("responsive");
    } else {
      header.classList.remove("responsive");
    }
  }, []);

    return (
      <div className="header">
        <div className="hero">
          <div className="topnav" id="myTopnav">
            <svg
              className="svglogo"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 274.78 38.55"
            >
              <g data-name="Calque 2">
                <g data-name="Calque 1">
                  <path d="M97.28 36.85l-2-3v4.61h-1.17V32h1.21l2 3 2-3h1.21v6.45h-1.21v-4.64zM107 38.55a3.34 3.34 0 1 1 3.38-3.34 3.28 3.28 0 0 1-3.38 3.34zm0-5.63a2.18 2.18 0 0 0-2.17 2.29 2.21 2.21 0 0 0 2.19 2.3 2.18 2.18 0 0 0 2.17-2.29 2.21 2.21 0 0 0-2.19-2.3zM118.12 32h1.11v6.45h-.95l-3.56-4.59v4.59h-1.11V32h1.05l3.46 4.46zM125.46 38.44h-1.14V33h-2v-1h5.23v1h-2zM133.72 36.85l-2-3v4.61h-1.11V32h1.21l2 3 2-3h1.21v6.45h-1.13v-4.64zM146.56 38.44h-1.2l-.65-1.56h-3l-.71 1.56h-1.16l2.84-6.5h1.05zm-3.38-5.14l-1.11 2.58h2.22zM153.64 38.44l-1.58-2.25h-1.42v2.25h-1.14V32h2.87c1.48 0 2.4.78 2.4 2a1.93 1.93 0 0 1-1.54 2l1.77 2.44zM152.29 33h-1.65v2.17h1.66c.81 0 1.33-.42 1.33-1.09s-.5-1.08-1.34-1.08zM160.71 38.44h-1.14V33h-2v-1h5.23v1h-2zM169.93 38.44l-1.58-2.25h-1.42v2.25h-1.13V32h2.87c1.48 0 2.4.78 2.4 2a1.93 1.93 0 0 1-1.54 2l1.74 2.44zM168.57 33h-1.65v2.17h1.66c.81 0 1.33-.42 1.33-1.09s-.5-1.08-1.34-1.08zM179.07 33h-3.65v1.68h3.23v1h-3.23v1.73h3.69v1h-4.83V32h4.78zM0 4.9h3v7h8v-7h3v16.91h-3v-7.13H3v7.12H0zM18.81 13.4a8.66 8.66 0 0 1 8.86-8.74 8.58 8.58 0 0 1 8.82 8.69 8.66 8.66 0 0 1-8.86 8.74 8.58 8.58 0 0 1-8.82-8.69zm14.56 0a5.79 5.79 0 0 0-5.75-6 5.71 5.71 0 0 0-5.7 6 5.79 5.79 0 0 0 5.75 6 5.71 5.71 0 0 0 5.71-6zM26.28 0H29l3 3.26h-2.51l-1.86-1.4-1.86 1.4h-2.41zM44.54 7.66h-5.36V4.9h13.71v2.76h-5.36v14.15h-3zM57.24 4.9h12.54v2.66h-9.57V12h8.48v2.66h-8.48v4.54h9.69v2.66H57.24zM74.63 4.9h3v14.2h8.89v2.71H74.63zM99.24 4.9h6.67c3.94 0 6.42 2.25 6.42 5.65 0 3.79-3 5.77-6.76 5.77h-3.36v5.43h-3zm6.42 8.79c2.25 0 3.65-1.26 3.65-3 0-2-1.42-3-3.65-3h-3.45v6.09zM120.88 4.78h2.75l7.44 17h-3.14l-1.71-4.08h-8l-1.74 4.08h-3zm4.25 10.31l-2.92-6.76-2.9 6.76zM135.18 4.9h7.54a6.81 6.81 0 0 1 4.88 1.69 5.11 5.11 0 0 1 1.4 3.65 5.07 5.07 0 0 1-4 5.12l4.56 6.4H146l-4.15-5.89h-3.72v5.89h-3zm7.32 8.38c2.13 0 3.48-1.11 3.48-2.83 0-1.81-1.3-2.8-3.5-2.8h-4.32v5.68zM157.93 7.66h-5.36V4.9h13.72v2.76h-5.36v14.15h-3zM170.81 4.9h3v16.91h-3zM178.75 13.4a8.55 8.55 0 0 1 8.72-8.74 8.81 8.81 0 0 1 6.62 2.63l-1.91 2.2a6.72 6.72 0 0 0-4.73-2.1 5.68 5.68 0 0 0-5.58 6 5.72 5.72 0 0 0 5.58 6 6.63 6.63 0 0 0 4.85-2.2l1.91 1.93a8.72 8.72 0 0 1-6.86 3 8.5 8.5 0 0 1-8.6-8.72zM198.27 14.64V4.9h3v9.61c0 3.14 1.62 4.83 4.27 4.83s4.25-1.59 4.25-4.71V4.9h3v9.59c0 5-2.85 7.58-7.27 7.58s-7.25-2.53-7.25-7.43zM218 4.9h3v14.2h8.89v2.71H218zM234.35 4.9h3v16.91h-3zM243 4.9h12.53v2.66H246V12h8.48v2.66H246v4.54h9.68v2.66H243zM260.44 4.9H268a6.81 6.81 0 0 1 4.88 1.69 5.11 5.11 0 0 1 1.4 3.65 5.07 5.07 0 0 1-4 5.12l4.56 6.4h-3.5l-4.15-5.89h-3.72v5.89h-3zm7.32 8.38c2.13 0 3.48-1.11 3.48-2.83 0-1.81-1.3-2.8-3.5-2.8h-4.32v5.68z"></path>
                </g>
              </g>
            </svg>
            <button className="reservationbutton"> RESERVATION </button>
            <a href="#about">
              <span>EVENTS</span>
            </a>
  
            <a href="#contact">
              <span>CONTACT</span>
            </a>
            <a href="#news">
              <span>RESTAURANT</span>
            </a>
            <a href="#home" className="active">
              <span>HOTEL</span>
            </a>
            <a href="" className="icon">
              <FontAwesomeIcon icon={faBars} />
            </a>
          </div>
          <div className="carousel-bg">
            <div className="carousel-item one"></div>
            <div className="carousel-item two"></div>
          </div>
        </div>
      </div>
    );
  }



  
  export default Header;
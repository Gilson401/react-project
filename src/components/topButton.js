import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components'

const ToTopButton = (props) => {

    const [exibe, setExibe] = useState(false)
    
    /**Monitora a exibição do botão de subir ao topo */
    function scrollFunction() {
        const limite = 500
        
        if (document.body.scrollTop > limite || document.documentElement.scrollTop > limite) {
            setExibe(true)
        } else {
            setExibe(false)
        }
      }
      
      /**Faz scroll ip na tela recursivamente até chegar ao topo */
      const scrollToTop = () => {        
        const c = document.documentElement.scrollTop || document.body.scrollTop;
        if (c > 0) {
          window.requestAnimationFrame(scrollToTop);
          window.scrollTo(0, c - c / 8);
        }
      };


    useEffect(() => {
        window.addEventListener('scroll', scrollFunction, true);
 
    }, [])

  return (
    <Divanim>
        <Btnfixed 
        className={exibe? "animated fadeIn":"animatedOut fadeOut" }
         exibe={true} 
         pointer={exibe}
         onClick={exibe ? ()=>scrollToTop(): ""}
         id="myBtn" >TOPO</Btnfixed>
    </Divanim>
  )

}

export default ToTopButton


const Divanim = styled.div`
         .animated {
            -webkit-animation-duration: 2s;
            animation-duration: 2s;
            -webkit-animation-fill-mode: both;
            animation-fill-mode: both;
            -webkit-animation-name: fadeIn;
            animation-name: fadeIn;
            border: none !important;
         }
         
         @-webkit-keyframes fadeIn {
            0% {opacity: 0;}
            100% {opacity: 1;}
         }
         
         @keyframes fadeIn {
            0% {opacity: 0;}
            100% {opacity: 1;}
        }

        .animatedOut {
            -webkit-animation-duration: 2s;
            animation-duration: 2s;
            -webkit-animation-fill-mode: both;
            animation-fill-mode: both;
            -webkit-animation-name: fadeOut;
            animation-name: fadeOut;
            border: none !important;            
         }
         
         @-webkit-keyframes fadeOut {

            0% {opacity: 1;}
            100% {opacity: 0;}
         }
         
         @keyframes fadeOut {
            0% {opacity: 1;}
            100% {opacity: 0;}
         }
        `

const Btnfixed = styled.button`
display:${props=> props.exibe ? `block`:`none`};
    position: fixed; /* Fixed/sticky position */
    bottom: 20px; /* Place the button at the bottom of the page */
    right: 30px; /* Place the button 30px from the right */
    z-index: 99; /* Make sure it does not overlap */
    border: none !important; /* Remove borders */
    outline: none; /* Remove outline */
    background-color: rgb(0, 210, 40, 0.91)!important; /* rgb(20, 26, 40, 0.91); Set a background color */
    color: black; /* Text color */
    cursor: ${props=> props.pointer ? `pointer`:`auto`} !important ; /* Add a mouse pointer on hover */
    padding: 15px; /* Some padding */
    border-radius: 50%; /* Rounded corners */
    font-size: 18px; /* Increase font size */
    transition-timing-function: ease;
    transition: background-color 2s;
    :hover {
        border: none !important;
        background-color: #fac564 !important; 
        opacity:0.4
    }

`

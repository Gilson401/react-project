import React from 'react'
import {  Col, Navbar, Row } from 'react-bootstrap'
import styled from 'styled-components'

import background from '../assets/images/tenis/tenis.png'
import tenis from '../assets/images/tenis/tenisultramarine.png'
import nike from '../assets/images/tenis/nike1.svg'
import Slide from 'react-reveal/Slide';

const Tenis = () => {
    return (

        <>

            <StConteudo id="map" image={background}>
            <Navbar className="justify-content-between internalNav">
            <img src={nike} alt="nikelogo"/>

            <div className="links">
                <a href="#sectionNews">News</a>
                <a href="#sectionShop">Shop</a>
                <a href="#sectionSend">Send</a>
                <a href="#sectionfaq">faq</a>
            </div>

            </Navbar>

            <Stitem >

            <img className="responsive" src={tenis} alt="nikelogo"/>
  
            <StTexto>
                <Row>
                    <Col>
                        <div className="produto mx-auto">Nike Air 70</div>
                        <div className="preco text-center">U$: 75</div>
                        <div className="text-center">
                        <Stbutton>Buy Now</Stbutton>
                        </div>
                    </Col>
                </Row>
            </StTexto>

            </Stitem>
            
            </StConteudo>

            


        </>
    )
}

export default Tenis


const Stbutton = styled.button`
width: 100px;
height: 30px;
border: none;
border-radius:3px;
font-family: Montserrat;
color: black;
font-weight: bold;
`

const StTexto = styled.div`
position: absolute;
width: 219px;
height: 168px;
left: 0%;
top: 0%;

.preco{

width: 219px;
height: 91px;
font-family: Montserrat;
font-style: italic;
font-weight: 900;
font-size: 75px;
line-height: 91px;
letter-spacing: -0.05em;
color: #FFFFFF;
margin-bottom: 20px;
}

.produto{

width: 148px;
height: 37px;
font-family: Montserrat;
font-style: normal;
font-weight: normal;
font-size: 30px;
line-height: 37px;
letter-spacing: -0.05em;
color: #FFFFFF;

}

`

const Stitem = styled.div`
position: absolute;
left: 15%;
top: 15%;

.responsive {
  width: 100%;
  height: auto;
}

`


const StConteudo = styled.div`

background-image: url(${props => props.image});
background-color: black; 
background-size: cover;
position: absolute;
background-repeat: no-repeat;
width: 100vw;
height: 100vh;

border: 1px solid #000000;
box-sizing: border-box;

img{
    filter:brightness(90%);
    transition : 500ms;
    :hover {
        transition : 500ms;
        transform: scale(1.01, 1.01);
        filter:brightness(110%);
    }

}

.internalNav{
padding: 30px 30px 30px 30px;
}

a{   
width: 36px;
height: 27px;
font-family: Montserrat;
font-style: normal;
font-weight: 800;
font-size: 27px;
line-height: 27px;
color: #FFFFFF;
margin: 0 20px 0 20px;
text-decoration: none;
}

.links{
padding-bottom:20px;
border-bottom: 1px solid #FFFFFF;
}


`
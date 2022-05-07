import React from 'react'
import { Col, Container, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap'
import dani from '../assets/images/logoDaniela.png'
import cosmetic from '../assets/images/moda/cosmetic.JPG'
import cosmetic0 from '../assets/images/moda/cosmetic0.JPG'
import cosmetic2 from '../assets/images/moda/cosmetic2.JPG'
import cosmetic3 from '../assets/images/moda/cosmetic3.JPG'
import bota1 from '../assets/images/moda/bota1.png'
import boina from '../assets/images/moda/boina.png'
import mulher from '../assets/images/moda/mulher.JPG'
import bolsa from '../assets/images/moda/bolsa.JPG'

import styled from 'styled-components'
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Flip from 'react-reveal/Flip';
import { lorem } from '../util'
import Roll from 'react-reveal/Roll';
import FormContact from './formcontact'
import BannerHome from './banneritems'



const Navbars = () => {
    const seta = 'https://www.restaurantejangada.com.br/wp-content/themes/jangada/assets/img/arrow-down.png'
    const stp = <StParag>{lorem}</StParag>

    const analyticsFunc = (text) => {
        console.log(text)
    }



    return (
        <>
            <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    <img
                        alt="d"
                        src={dani}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}  Consultoria e Coaching de imagem
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className="ml-auto">
                        <Nav.Link href="#init">Home</Nav.Link>
                        <Nav.Link eventKey={2} href="#second">  Comment 1     </Nav.Link>
                        <Nav.Link eventKey={3} href="#third">  Comment 2   </Nav.Link>
                        <Nav.Link eventKey={4} href="#banners">  Video    </Nav.Link>
                        <Nav.Link eventKey={5} href="#contato">  Contato    </Nav.Link>
                        <Nav.Link eventKey={6} href="#map">  Mapa    </Nav.Link>
                    </Nav>

                </Navbar.Collapse>

            </Navbar>

            <StConteudo>


                <Stdv padding={'100px'} id="init" image={cosmetic3}>
                    <Container>

                        <Row>
                            <Fade duration={2500} >
                                <img alt="d" className="text-center" src={dani}></img>
                            </Fade>
                        </Row>


                        <Row >
                            <Fade forever top duration={2000}>
                                <img alt="d" className="seta" src={seta}></img>
                            </Fade>

                            <br />
                            <br />
                            <h4 className="my-auto blackfundo" >ROLE PARA BAIXO</h4>

                        </Row>
                    </Container>
                </Stdv>



                <Stdv padding={'150px'} id="second" image={cosmetic2}>

                    <Container>
                        <Row xs={1} sm={1} md={2} lg={2} xl={2} >

                            <Col>

                                <Roll left duration={2500}>
                                    <img alt="d" className="imgclass" src={bota1}
                                    />
                                </Roll>
                            </Col>
                            <Col>
                                <Slide duration={2000} right onReveal={() => analyticsFunc('element revealed')} >
                                    {stp}

                                </Slide>
                            </Col>


                        </Row>
                    </Container>
                </Stdv>

                <Stdv padding={'150px'} id="third" image={cosmetic}>
                    <Container>
                        <Slide duration={2700} bottom>
                            {stp}
                        </Slide>

                        <Row>
                            <Col>
                                <Roll left duration={2500}>
                                    <img alt="d" className="imgclass" src={bota1}
                                    />
                                </Roll>
                            </Col>

                            <Col>
                                <Roll right duration={2500}>
                                    <img alt="d" className="imgclass" src={boina}
                                    />
                                </Roll>
                            </Col>
                        </Row>
                    </Container>
                </Stdv>

                <Stdv padding={'150px'} id="banners" image={bolsa}>
                    <Flip left>
                        <BannerHome />
                    </Flip>
                </Stdv>

                <Stdv padding={'150px'} id="contato" image={mulher}>
                    <Container>
                        <Zoom duration={2700} bottom>
                            <h2>Mande um recado.</h2>
                        </Zoom>

                        <Slide duration={2700} bottom>
                            <FormContact />
                        </Slide>

                    </Container>
                </Stdv>


                <Stdv padding={'150px'} id="map" image={cosmetic0}>
                    <Container>

                        {stp}

                        <Zoom duration={2700} bottom>
                            <br />
                            <Row>
                                <iframe
                                    className="mx-auto my-auto"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3093.491634103779!2d-42.933763723580824!3d-22.772718470487895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9995d1c1761bb7%3A0x61313500f7b596b2!2sAssembl%C3%A9ia%20de%20Deus%20em%20Aldeia%20da%20Prata!5e0!3m2!1spt-BR!2sbr!4v1614374616746!5m2!1spt-BR!2sbr"
                                    width="97%"
                                    height="450"
                                    allowfullscreen=""
                                    loading="lazy">
                                </iframe>
                            </Row>
                        </Zoom>
                    </Container>
                </Stdv>




            </StConteudo>
        </>
    )
}

export default Navbars


const StParag = styled.div`
background-color:rgb(0,0,0,0.5);
color: white;
border-radius : 5px;
min-height: 100px;
padding : 10px;
font-size: 1.1rem;
`


const Stdv = styled.section`
transition : "all 2s";
background-image: url(${props => props.image});
background-color: #84C9E9; /* Used if the image is unavailable */
height: 100vh; /* You must set a specified height */
background-position: center;
background-repeat: repeat;
background-size: cover;
padding-top: ${props => props.padding || '50px'};
`

const StConteudo = styled.body`


line-height: 1.5;
text-align: left;
font-family: montserrat,sans-serif;
font-weight: 400;
color: #fff;
font-size: 13px;
box-sizing: border-box;
display: block;
margin-top: 100px;
margin: 0 auto;
transition: all 600ms;

position: relative;

.seta{
margin-top: 100px;
margin-left:50%;
}

.imgclass{
    max-width: 100%;
    margin-bottom: 15px;
    height: 350px;
    vertical-align: middle;
    border-style: none;
margin-left:-50px;
}

.text-center{
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;
    background-color:rgb(0,0,0,0.8);
    border-radius:5px;
    margin-bottom: 5px;
}

.blackfundo{
    background-color:rgb(0,0,0,0.8);
    border-radius:5px;
    margin-bottom: 5px;
    padding: 25px;
}

`
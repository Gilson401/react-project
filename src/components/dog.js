import React from 'react'
import {  Col, Container, Row } from 'react-bootstrap'
import styled from 'styled-components'
import Dog0 from '../assets/images/dog.jpg'
import Dog1 from '../assets/images/dog1.JPG'
import Dog2 from '../assets/images/dog2.JPG'
import Dog3 from '../assets/images/dog3.JPG'
import Zoom from 'react-reveal/Zoom';
import LightSpeed from 'react-reveal/LightSpeed';
import Slide from 'react-reveal/Slide';
import { lorem } from '../util'

const Dog = () => {

const Item = (props) => {

const Centertx = styled.div` 
display:flex;
align-items:center;
justify-content:center;
word-wrap:break-word;
border: solid 1px transparent;
border-radius: 5px;
`
        return (
            <Row>
                <br />
                <hr />
                <Col xs={4}>
                    <Zoom top>
                        <Bgimage image={props.img}>  </Bgimage>
                    </Zoom>
                </Col>

                <Col xs={8}>
                    <Slide right>
                        <Centertx > {lorem}  </Centertx>
                    </Slide>
                </Col>
            </Row>
        )


    }

    return (
        <Container fluid>

            <Zoom bottom >
                <StHeader>
                    <h1>Animações com imagens de cães</h1>
                </StHeader>
            </Zoom>
            <StDiv>
                <Item img={Dog0} />
                <br />
                <Item img={Dog1} />
                <br />
                <Item img={Dog2} />
                <br />
                <Item img={Dog3} />
            </StDiv>

            <LightSpeed right>
                <StFooter>
                    Obrigado !
                </StFooter>
            </LightSpeed  >
        </Container>


    )
}

export default Dog

const Bgimage = styled.div`
color: white;
background-image: url(${props => props.image});
/* background-size: 300px 600px; */ //Deixa o tamanho da imagem fixada em px
background-size: 100% 100%;  //ajusta as dimensões da imagem às da DIV
background-repeat: no-repeat;
background-color: blue; //esta cor aparece se tua imagem não for carregada
/* width: 400px; */
height: 600px;
max-width: 85vw;
border-radius: 5px;
transition : 1000ms;
padding-top: 10px;
display:flex;
align-items:flex-start;
justify-content:center;


:hover {

transition : 2000ms;

color: black;
font-size: 90px;
font-weight : 1900;

}
`
const StDiv = styled.div`
background-color:#e4f9f5;
min-height: 100vh;
padding: 10px;

.class0{
color:blue;
background-color:grey;
padding: 10px;
background-image: url(${Dog0});
}

.class1{
color:red;
background-color:black;
padding: 10px;
background-image: url(${Dog1});
}

.class2{
color:black;
padding: 10px;
background-image: url(${Dog2});
}

.class3{
color:black;
padding: 10px;
background-image: url(${Dog3});
}

.center{
    background-size: 100% 100%;  //ajusta as dimensões da imagem às da DIV
    display:flex;
align-items:center;
justify-content:center;
transition : 1000ms;
width: 250px;
height: 360px;
}




`

const StHeader = styled.header`
height: 100px;
background-color:#11999e;
color: #40514e;

display:flex;
align-items:center;
justify-content:center;


`

const StFooter = styled.footer`
height: 200px;
background-color:#40514e;
color: #30e3ca;
font-size:120px;
display:flex;
align-items:center;
justify-content:center;
`
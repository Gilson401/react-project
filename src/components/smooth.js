import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styled from 'styled-components'
import Dog0 from '../assets/images/dog.jpg'
import Dog1 from '../assets/images/dog1.JPG'
import Dog2 from '../assets/images/dog2.JPG'
import Dog3 from '../assets/images/dog3.JPG'
import Dog4 from '../assets/images/dog4.JPG'
import Dog5 from '../assets/images/dog5.JPG'
import Dog6 from '../assets/images/dog6.JPG'
import Dog7 from '../assets/images/dog7.JPG'
import Dog8 from '../assets/images/dog8.JPG'
import Dog9 from '../assets/images/dog9.JPG'
import Dog10 from '../assets/images/dog10.JPG'
import Dog11 from '../assets/images/dog11.JPG'

import Zoom from 'react-reveal/Zoom';
import LightSpeed from 'react-reveal/LightSpeed';
import Slide from 'react-reveal/Slide';
import { lorem } from '../util'

const Smooth = () => {

    const [fire, setFire] = useState(0)
    const dogs = [Dog0, Dog1, Dog2, Dog3, Dog4, Dog5, Dog6, Dog7, Dog8, Dog9, Dog10, Dog11]
    let audio = new Audio("/SUCCESS PICKUP Collect Chime 01.wav")

    const start = (index) => {
        setFire(index)
        audio.play()
      }

    const Item = (props) => {

        const Centertx = styled.div`
padding: 65px;
display:flex;
flex-direction: column;
align-items:center;
justify-content:center;
word-wrap:break-word;
border: solid 1px transparent;
border-radius:5px;
box-shadow: 5px 10px 10px #888888;
height: 300px;
`

        return (
            <Row>
                <br />
                <hr />
                <Col xs={3}>
                    <Slide left>
                        <Bgimage image={props.img}>  </Bgimage>
                    </Slide>
                </Col>

                <Col xs={8}>
                    <Slide right>
                        <Centertx > 
                            <h3> {`Dog number : ${fire + 1}`} </h3>
                            <br/>
                            <p> 
                                {lorem}
                            </p>  
                            </Centertx>
                    </Slide>
                </Col>
            </Row>
        )


    }

    return (
        <Container fluid>

            <Zoom bottom >
                <StHeader>
                    <h1>Select your Dog!</h1>
                </StHeader>
            </Zoom>
           
            <StDiv>
            
                <Row >
                    <Item img={dogs[fire]} />
                </Row>
                <br />

                <Row xs={12} md={12} >                                  
                        {dogs.map((item, index) =>                        
                            <Zoom top>
                                <StImg onClick={()=>start(index)} image={item}/>
                            </Zoom>                         
                        )}                       
                </Row>


            </StDiv>

            <LightSpeed right>
                <StFooter>
                    Obrigado !
            </StFooter>
            </LightSpeed  >
        </Container>


    )
}

export default Smooth




const StImg = styled.img`
background-image: url(${props => props.image});
background-size: 100% 100%;
width: 100px;
height: 150px;
/* box-shadow: 5px 10px 10px #888888; */
border-radius: 5px;
margin: 10px;
cursor: pointer;
transition : 500ms;

:hover {
transition : 500ms;
transform:scale(1.3,1.3);
box-shadow: 5px 10px 10px #888888;
}

`


const Bgimage = styled.div`
color: white;
background-image: url(${props => props.image});
/* background-size: 300px 600px; */ //Deixa o tamanho da imagem fixada em px
background-size: 100% 100%;  //ajusta as dimensões da imagem às da DIV
background-repeat: no-repeat;
background-color: blue; //esta cor aparece se tua imagem não for carregada
width: 200px;
height: 300px;
max-width: 85vw;
border-radius: 5px;
transition : 1000ms;
padding-top: 10px;
margin-left: 10px;
display:flex;
align-items:flex-start;
justify-content:center;
box-shadow: 5px 10px 10px #888888;


:hover {

transition : 2000ms;

color: black;
font-size: 90px;
font-weight : 1900;

}
`
/**Div */
const StDiv = styled.div`
background-color:#e4f9f5;
min-height: 100vh;
padding: 20px;

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
height: 70px;
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
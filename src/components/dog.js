import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styled from 'styled-components'
import Dog0 from '../assets/images/dog.jpg'
import Dog1 from '../assets/images/dog1.JPG'
import Dog2 from '../assets/images/dog2.JPG'
import Dog3 from '../assets/images/dog3.JPG'
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';
import { lorem } from '../util/lorem'

const Dog = () => {

    const Item = (props) => {

        const Centertx = styled.div` 
display:flex;
align-items:center;
justify-content:center;
word-wrap:break-word;
border-radius: 5px;
margin-bottom: 10px;
padding-top: 20px;
`
        return (
            <Row className='pb-3'>
                
                <Col xs={12}  md={4}>
                    <Zoom top>
                        <Bgimage image={props.img}>  </Bgimage>
                    </Zoom>
                </Col>

                <Col xs={12}  md={8}>
                    <Slide right>
                        <Centertx > {lorem(100)}  </Centertx>
                    </Slide>
                </Col>
            </Row>
        )


    }

    return (
        <StContainer fluid>

            <StDiv>
            <Zoom bottom >

                <h1 className='text-center'>Doguinhos animados</h1>

            </Zoom>

                <Item img={Dog0} />

                <Item img={Dog1} />

                <Item img={Dog2} />

                <Item img={Dog3} />
            
            
            </StDiv>

        </StContainer>


    )
}

export default Dog

const StContainer = styled(Container)`
background-color:#e4f9f5;
`


const Bgimage = styled.div`
color: white;
background-image: url(${props => props.image});
background-size: 100% 100%; 
background-repeat: no-repeat;
background-color: blue; 
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


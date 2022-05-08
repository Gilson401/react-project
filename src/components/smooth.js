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
import Slide from 'react-reveal/Slide';
import { lorem } from '../util/lorem'

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
padding: 1rem;
display:flex;
flex-direction: column;
align-items:center;
justify-content:center;
word-wrap:break-word;
border: solid 1px transparent;
border-radius:5px;
box-shadow: 5px 10px 10px #888888;

`

        return (
            <Row>
                <Col xs={12} md={3}>
                    <Slide left>
                        <Bgimage className='mx-auto' image={props.img}>  </Bgimage>
                    </Slide>
                </Col>

                <Col xs={12} md={9}>
                    <Slide right>
                        <Centertx >
                            <h3> {`Dog number : ${fire + 1}`} </h3>
                            <p>
                                {lorem(150)}
                            </p>
                        </Centertx>
                    </Slide>
                </Col>
            </Row>
        )


    }

    return (
        <StContainer fluid>
            <StDiv>
                <Zoom bottom >
                    <h1 className='text-center'>Select your Dog!</h1>
                </Zoom>
                <Row >
                    <Col>
                        <Item img={dogs[fire]} />
                    </Col>
                </Row>
                <Row xs={12} className="my-3">
                    {dogs.map((item, index) =>
                        <Col xs={4} md={1}>
                            <StImg className="w-100 h-100" key={index} onClick={() => start(index)} >
                                <img src={item} className="w-100 h-100" alt={item} />
                            </StImg>

                        </Col>
                    )}
                </Row>
            </StDiv>
        </StContainer>
    )
}

export default Smooth


const StContainer = styled(Container)`
background-color:#e4f9f5;
`

const StImg = styled.div`
border-radius: 5px;
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
background-size: 100% 100%; 
background-repeat: no-repeat;
background-color: blue; 
width: 200px;
height: 300px;
max-width: 85vw;
border-radius: 5px;
transition : 1000ms;
padding-top: 10px;
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
const StDiv = styled.div`
background-color:#e4f9f5;
min-height: 100vh;
padding: 20px;

.center{
background-size: 100% 100%;  
display:flex;
align-items:center;
justify-content:center;
transition : 1000ms;
width: 250px;
height: 360px;
}
`
import React from 'react'
import styled from 'styled-components'
import { Container} from 'react-bootstrap'
import {lorem} from '../util/lorem'
import getImageByKey from '../assets/images/images'

const Paralax = () => {
    

    const imagens = [
        getImageByKey('paralax0'),
        getImageByKey('paralax1'),
        getImageByKey('paralax2'),
        getImageByKey('paralax3')
    ]


    const Parb = (props) => {
        return (
            <div>
                <p>
                    {lorem (300)}
                </p>
                <ParaBlock image={props.img} num={props.ind}>
                    <div className={`parallax-img imgn${props.ind}`}></div>
                </ParaBlock>
            </div>
        )
    }

    return (

        <Container >
            
            <h1>Obrigado por assistir!</h1>
            
            <h4>Role para baixo e veja as imagens de fundo alternarem.</h4>

            {imagens.map((item, index) =>
                <Parb key={index} ind={index} img={item} />
            )}
        </Container>
    )
}

export default Paralax


const ParaBlock = styled.div`

.parallax-img{
height: 80vh;
margin: 30px auto;
background-attachment: fixed;
background-position: center;
background-repeat : no-repeat;
background-size: cover;
}

.imgn${props => props.num.toString()}{
    background-image: url(${props => props.image});
}    
`
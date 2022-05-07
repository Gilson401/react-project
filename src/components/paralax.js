import React from 'react'
import styled from 'styled-components'


const Paralax = () => {
    const lorem = <p>Ut Lorem veniam ipsum consequat reprehenderit eiusmod. Non veniam sint sunt eu magna do aliqua qui et excepteur.
        Quis amet occaecat esse dolore amet cillum culpa consectetur. Laborum reprehenderit nulla Lorem nostrud Lorem.
        Dolor adipisicing ea anim do incididunt exercitation do tempor velit sint ipsum.</p>

    const imagens = ['https://i.pinimg.com/564x/6d/cf/2d/6dcf2dc1bc2c6f14d9b1a1cc9a44526c.jpg',
        'https://i.pinimg.com/564x/cf/17/b5/cf17b5d20530c92278948f21286e556b.jpg',
        'https://i.pinimg.com/564x/38/ce/25/38ce25f5f9e17297107aea6b05474326.jpg',
        'https://i.pinimg.com/564x/8d/5d/25/8d5d2519a405d7fe4c3a5a15ee121a06.jpg'
    ]


    const Parb = (props) => {
        return (
            <>
                {lorem}
                <ParaBlock image={props.img} num={props.ind}>
                    <div className={`parallax-img imgn${props.ind}`}></div>
                </ParaBlock>
            </>
        )
    }

    return (

        <StConteudo >
            <br />
            <h1>Obrigado por assistir!</h1>
            <br />
            <h4>Role para baixo e veja as imagens de fundo alternarem.</h4>

            {imagens.map((item, index) =>
                <Parb ind={index} img={item} />
            )}
        </StConteudo>
    )
}

export default Paralax


const ParaBlock = styled.div`

.parallax-img{
height: 600px;
margin: 30px auto;

/* For paral lax effect */
background-attachment: fixed;
background-position: center;
background-repeat : no-repeat;
background-size: contain;
}

.imgn${props => props.num.toString()}{
    background-image: url(${props => props.image});
}    
`


const StConteudo = styled.main`

width: 600px;
margin: auto;

.title{
font-size: 3en;
background: #000;
color: rgb(238, 255, 0);
padding: 20px;
}

.text { letter-spacing: 0.Spx; text-align: justify; }


`
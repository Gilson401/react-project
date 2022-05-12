import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import history from '../config/history';
import App from '../App'
import getImageByKey from '../assets/images/images';

const Home = () => {

const links = () => {
 const original =  [...App.links] 
 original.shift()
 return original 
}
    return (

        <StContainer>

<div>
<h1>

Bem-vindos ao React Project Demo. 
</h1>

<p>
Este projeto é uma demonstração dos meus conhecimentos em Front End React.
Ele contém styled-components, bootstrap, react-bootstrap, react-excel-renderer, react-reveal, styled-components,
Ele receberá atualizações toda vez que eu aplicar alguma nova feature.
</p>

</div>

<div>


            {links().map((item, index) => (
                <Row key={index}
                    className="rounded my-2 border py-3">

                    <Col xs={4} md={2} >
                        <button onClick={() => history.push(item.path)} className="border-0">
                        <img 
                        className="responsive img-thumbnail"
                        src={getImageByKey(item.path.replace('/',''))} alt={item.label} />
                        </button>
                    </Col>
                    <Col className='px-2'>
                        <p>{item.description}</p>
                    </Col>
                </Row>
            ))}
            </div>
        </StContainer>
    )
}

const StContainer = styled(Container)`
width: 100%;
`

export default Home

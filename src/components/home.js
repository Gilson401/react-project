import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import history from '../config/history';
import App from '../App'
import getImageByKey from '../assets/images/images';

const Home = () => {
    return (

        <StContainer>
            {App.links.map((item, index) => (
                <Row key={index}
                    className="rounded my-2 border border-secondary py-3">

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
        </StContainer>
    )
}

const StContainer = styled(Container)`
width: 100%;
`

export default Home

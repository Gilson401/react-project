import React from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import history from '../config/history';
import App from '../App'

const Home = () => {
    return (

        <StContainer>

            {/* <Row xs={1} sm={1} md={3} lg={3} xl={3} > */}

            {App.links.map((item, index) => (
                <Row key={index}
                    className="rounded my-2 border border-secondary py-3 ">

                    <Col xs={4} md={2} >
                        <Button onClick={() => history.push(item.path)} variant="secondary" className="w-100">
                            {item.label}
                        </Button>
                    </Col>


                    <Col className='px-2'>
                        <p>{item.description}</p>
                    </Col>



                </Row>
            ))}

            {/* </Row> */}
        </StContainer>


    )
}

const StContainer = styled(Container)`
width: 100%;

`

export default Home

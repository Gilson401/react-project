import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import styled from 'styled-components'
import Layout from '../components/layout/layout'
import history from '../config/history';

const Home = () => {
  return (
      <Layout>
    <Container>
      
    <StDiv>
      <Row>
          <Col>

          <StButton onClick={()=>history.push('/paralax')} variant="outline-primary">Paralax</StButton>
          <StButton onClick={()=>history.push('/dog')} variant="outline-primary">Animações</StButton>
          <StButton onClick={()=>history.push('/smooth')} variant="outline-primary">Dog Select</StButton>
          <StButton onClick={()=>history.push('/glass')} variant="outline-primary">Glass</StButton>
          <StButton onClick={()=>history.push('/excel')} variant="outline-primary">Excel</StButton>
          <StButton onClick={()=>history.push('/navbars')} variant="outline-primary">Cms</StButton>
          <StButton onClick={()=>history.push('/menuanimado')} variant="outline-primary">Menu Animado</StButton>
          <StButton onClick={()=>history.push('/tenis')} variant="outline-primary">Tenis</StButton>
          <StButton onClick={()=>history.push('/trade')} variant="outline-primary">Trade</StButton>

          {/* <StButton variant="outline-primary">Destino</StButton>
          <StButton variant="outline-primary">Destino</StButton>
          <StButton variant="outline-primary">Destino</StButton>
          <StButton variant="outline-primary">Destino</StButton>
          <StButton variant="outline-primary">Destino</StButton> */}
          
          </Col>
      </Row>
      </StDiv>
    </Container>
    </Layout>
  )
}

const StButton = styled(Button)`
width: 10vw;
height: 15vh;
word-wrap:break-word;
/* font-size: 30px; */
margin: 10px;
`

const StDiv = styled.div`
/* width: 90vw; */
height: 60vh;
font-size: 40px;
`

export default Home

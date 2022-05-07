import React from 'react'
import { Dropdown,  Container, Nav, Navbar } from 'react-bootstrap'
import styled from 'styled-components'
import history from '../../config/history';


const Layout = ({ children, ...props }) => {

    const linkes = [
        { path: "/alloptions", label: "Opções" },
        { path: "/grafico", label: "Gráfico" },
        { path: "/trade", label: "Análises" },
        { path: "/tabelasdestaques", label: "Destaques" },
        { path: "/comparador", label: "Comparador" },
        { path: "/calculadora", label: "Calculadora" },
        { path: "/quadro", label: "Quadro" }]


    function CollapseNavbarBootstrap() {
        return (
            <Navbar collapseOnSelect expand="lg" className='red' variant="light">
                <Container>
                    <Navbar.Brand >{props.header ? props.header : "Props header"}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">

                            {linkes.map((item, i) => (
                                <Dropdown.Item eventKey={i} onClick={() => history.push(item.path)} >   {item.label}  </Dropdown.Item>
                            )
                            )}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }

    return (
        <>


            <StHeader className="fixed-top">
                <Container fluid>
                     <CollapseNavbarBootstrap />
                </Container>
            </StHeader>

            <br /><br /><br /><br />
            {children}

            <StFooter>
                <h1 >{props.footer ? props.footer : "Props Footer"}</h1>
            </StFooter>

        </>


    )
}

export default Layout



const StHeader = styled.header`
min-height: 70px;
background-color:#11999e;
color: #40514e;
margin-bottom: 120px;
display:flex;
align-items:center;
justify-content:center;

.navbar-brand{
    color: #40514e!important;

}

.btn{
    margin: 10px 1px auto 1px;
    /* min-width: 100px; */
    /* height: 50%; */
    border-top-left-radius: 9999px;
    border-top-right-radius: 9999px;
    border-bottom-right-radius: 9999px;
    border-bottom-left-radius: 9999px;
}
h1, h3{
    margin-right : auto;
    margin-left : 50%;
}
`

const StFooter = styled.footer`
height: 100px;
background-color:#40514e;
color: #30e3ca;
font-size:120px;
display:flex;
align-items:center;
justify-content:center;
`
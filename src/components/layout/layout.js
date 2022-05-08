import React, {useRef, useEffect, useState } from 'react'
import { Dropdown, Container, Nav, Navbar } from 'react-bootstrap'
import { useLocation } from 'react-router-dom';
import styled from 'styled-components'
import history from '../../config/history';
import App from '../../App'


const Layout = ({ children, ...props }) => {

    const navEl = useRef(null)
    const footerEl = useRef(null)
    const [heigth, setHeigth] = useState(56)
    const [minHeight, setMinHeight] = useState(200)

    const location = useLocation()
    const [brand, setBrand] = useState('')
    
    useEffect(() => {
        const currentPath = location.pathname;
        const propsBrand = App.links.find(link => link.path === currentPath ).label
        setBrand(propsBrand)
      }, [location]);

    function CollapseNavbarBootstrap() {



        return (
            <Navbar  collapseOnSelect expand="lg" className='red' variant="light">
                <Container>
                    <Navbar.Brand >{brand ? brand : "Props header"}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">

                            {props.links.map((item, i) => (
                                <Dropdown.Item key={i} eventKey={i} onClick={() => history.push(item.path)} >   {item.label}  </Dropdown.Item>
                            )
                            )}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }


    useEffect(() => {
        const minH = window.screen.height -
        footerEl.current.clientHeight - 
        navEl.current.clientHeight * 2
    

        setMinHeight(minH)
        setHeigth(navEl.current.clientHeight)

    }, []);

        
    return (
        <>
            <StHeader ref={navEl} className="fixed-top mb-3">
                <Container fluid>
                    <CollapseNavbarBootstrap />
                </Container>
            </StHeader>

            <div style={{paddingTop: heigth, minHeight: minHeight }}>

            {children}
            </div>

            <StFooter ref={footerEl}>
                {props.footer}
            </StFooter>

        </>


    )
}

export default Layout



const StHeader = styled.header`

min-height: 70px;
background-color:#11999e;
color: #40514e;

display:flex;
align-items:center;
justify-content:center;

.navbar-brand{
    color: #40514e!important;

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
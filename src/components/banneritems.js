
import React from 'react'
import { Carousel, Col, Container, Row } from 'react-bootstrap'
import styled from 'styled-components'


const Carrousel = () => {
    const bannerItens_redux = [
        "https://www.youtube.com/embed/BsTKPPImLWY?controls=0",
        "https://www.youtube.com/embed/t4ClFb29Z6k?controls=0",
        "https://www.youtube.com/embed/ARykFaYlCD8?controls=0",
        "https://www.youtube.com/embed/7Me2vVKJrRA?controls=0"]

    return (
        <Container>
            <Row >
                <ColBgDark >
                    <Banner hidden={false} >
                        <Carousel>
                            {bannerItens_redux.map((item, i) => (
                                <Carousel.Item key={i}>
                                    <div className="iframe-container">
                                        <iframe
                                            title="iframe"
                                            className="video"
                                            src={item}
                                            frameborder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowfullscreen>
                                        </iframe>
                                    </div>
                                </Carousel.Item>
                            )
                            )}
                        </Carousel>
                    </Banner>
                </ColBgDark>
            </Row>
        </Container>
    )
}

export default Carrousel


const ColBgDark = styled(Col)`
    background-color: rgba(10,10,10,0.7);
`



const Banner = styled.div`
    margin-top : 5px;
    margin-bottom : 40px;
    /* width:100%; */
    color: white;
    text-align:center;
    /* background-color: rgba(10,10,10,0.7); */
    h3{
        margin-top : 45px;
    }

    img {
        max-height : 500px;
    }

    .carousel-indicators li {
        height: 10px;
        
    }

    .carousel-indicators {
        bottom: -50px;
    }

    .iframe-container {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;
}
.video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}



`


import React, { useEffect } from 'react'
import { Carousel, Col, Container, Row } from 'react-bootstrap'
import styled from 'styled-components'




//TODO: o professor colocou outro modelo de banner customizado
/**BannerHome, vou colocar no carrousel os produtos que estão em highlight/destaque */
const BannerHome = () => {


    const bannerItens_redux = [
        "https://www.youtube.com/embed/BsTKPPImLWY?controls=0",
        "https://www.youtube.com/embed/t4ClFb29Z6k?controls=0",
        "https://www.youtube.com/embed/ARykFaYlCD8?controls=0",
        "https://www.youtube.com/embed/7Me2vVKJrRA?controls=0"]






    return (
        <Container>
            <Row >
                <ColBgDark >
                    <div >
                        <Banner hidden={false} >
                            <Carousel>

                                {bannerItens_redux.map((item, i) => (

                                    <Carousel.Item>
                                        

                                        <iframe
                                            width="760"
                                            height="515"
                                            src={item}
                                            frameborder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowfullscreen>
                                        </iframe>
                                        {/*                     
                                        <Carousel.Caption >
                                            <h3>{item.title}</h3>
                                            <p>{item.coment}</p>
                                        </Carousel.Caption> */}
                                    </Carousel.Item>
                                )
                                )}
                            </Carousel>
                        </Banner>

                    </div>
                </ColBgDark>
            </Row>
        </Container>
    )
}

export default BannerHome


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
`

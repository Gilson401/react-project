import React, { useEffect } from 'react'
import styled from 'styled-components'
import $ from 'jquery';

const MenuAnimado = () => {
    function PageTransitions () {
        const pages = $('#pages');
    
      const positions = {
        front: 0,
        right: -90,
        back: 180,
        left: 90,
      }
    
      const getCurrentTransform = () => {
        let currentTransform = pages[0].style.transform.match(/-?\d+/g) || 0;
        currentTransform!==0? currentTransform = parseInt(currentTransform[0]): currentTransform=0;
        return currentTransform;
      }
    
      const moveCube = (page) => {
        let target = positions[page];
        animateCube(target);
      }
    
      const changePage = (direction) => {
        let veloIsAnimating = pages.attr('class');
        let end = direction===1? -360: 360;
        let step = direction===1? 90: -90;
        if (!veloIsAnimating) {
          let current = getCurrentTransform();
          if (current===end) {
            pages.velocity(
              {
                rotateY:[0],
              },
              {
                duration: 0,
                complete: () => {
                  current = getCurrentTransform();
                  let target = (current+step);
                  animateCube(target);
                }
              },
            )
          } else {
            let target = (current+step);
            animateCube(target);
          }
        }
      }
    
      const animateCube = (target) => {
        pages.velocity(
          {
            rotateY:[target],
          },
          {
            duration: 2000,
            easing: "easeOut",
          },
        )
      }
    
      return {
        change: changePage,
        move: moveCube,
      }
    }
    
    function Navigation (pagestrs) {
      const nav = $('nav');
      const buttons = nav.find('#buttons');
      const menu = nav.find('#menu');
      const buttonsNavi = buttons.find('.buttons-navi');
      const buttonPrev = buttonsNavi.find('.button:nth-child(1)');
      const buttonNext = buttonsNavi.find('.button:nth-child(2)');
      const buttonNextContent = buttonNext.find('.button-next');
      const buttonPrevContent = buttonPrev.find('.button-prev');
      const buttonMenu = buttons.find('.buttons-menu .button');
      const menuItems = menu.find('li');
      const buttonMenuContent = buttonMenu.find('.button-wrapper');
      const topSpan = buttonMenuContent.find('span:nth-child(1)');
      const middleSpan = buttonMenuContent.find('span:nth-child(2)');
      const bottomSpan = buttonMenuContent.find('span:nth-child(3)');
      const spans = [topSpan,middleSpan,bottomSpan];
      
      const windowOnUnload = (fn) => {
        const unload = () => {
          fn()
          window.removeEventListener('unload',unload);
        }
        window.addEventListener('unload',unload);
      };
      
      const animateChangePageButton = () => {
        const animateContent = (event) => {
          event.data.object.velocity(
            {
              scale: [1,0],
            },
            {
              duration: 1000,
              easing: 'spring',
            }
          )
        }
    
        buttonNext.on('mouseenter', {object: buttonNextContent}, animateContent);
        windowOnUnload(() => {
          buttonNext.off('mouseenter', animateContent);
        });
    
        buttonPrev.on('mouseenter', {object: buttonPrevContent}, animateContent);
        windowOnUnload(() => {
          buttonPrev.off('mouseenter', animateContent);
        });
      }
      
      const handleNextPageClick = () => {
        const buttonNext = buttons.find('.buttons-navi .button:nth-child(2)');
        const clickEvent = () => {
          pagestrs.change(0);
        }
        buttonNext.on('click', clickEvent);
        windowOnUnload(() => {
          buttonNext.off('click', clickEvent);
        })
      }
    
      const handlePrevPageClick = () => {
        const buttonPrev = buttons.find('.buttons-navi .button:nth-child(1)');
        const clickEvent = () => {
          pagestrs.change(1);
        }
        buttonPrev.on('click', clickEvent);
        windowOnUnload(() => {
          buttonPrev.off('click', clickEvent);
        })
      }
      
      const animateManuButton = () => {
        topSpan.velocity(
          {
            rotateZ: '135deg',
            top: '12px',
          },
          {
            duration: 300,
          }
        );
        middleSpan.velocity(
          {
            right: '40px',
            opacity: 0,
          },
          {
            duration: 300,
          }
        );
        bottomSpan.velocity(
          {
            rotateZ: '-135deg',
            top: '12px',
          },
          {
            duration: 300,
          }
        );
      }
      
      const reverseManuButtonAnimation = () => {
        spans.forEach((span)=>{
          span.velocity('reverse');
        });
      }
      
      const menuIn = () => {
        buttonsNavi.hide();
        menu.show();
        menu.velocity(
          {
            translateY: [0,-180],
            scale: [1,0],
            opacity: [1,0],
          },
          {
            duration: 2000,
            easing: "spring",
          }
        )
      }
    
      const menuOut = () => {
        buttonsNavi.show();
        menu.velocity(
          "reverse",
          {
            duration: 1000,
            easing: "spring",
            complete: () => {
              menu.hide();
            }
          }
        );
      }
      
      const menuItemsIn = () => {
        let delay = 200;
        menuItems.each((key,item) => {
          let it = $(item);
          it.show();
          it.velocity(
            {
              translateX: ["0vw","-100vw"],
              backgroundColorAlpha: [0,1],
            },
            {
              duration: 2000,
              easing: "spring",
              delay: delay,
            }
          )
          delay+=200;
        });
      }
      
      const naviInSeq = () =>{
        const seq = [
          animateManuButton,
          menuIn,
          menuItemsIn,
        ];
        seq.forEach((anim)=>{
          anim();
        });
      }
    
      const naviOutSeq = () => {
        const seq = [
          reverseManuButtonAnimation,
          menuOut,
        ];
        seq.forEach((anim)=>{
          anim();
        });
      }
      
      const handleMenuButtonClick = () => {
        const handleToggle = () => {
          let veloIsAnimating = menu.attr('class');
          if(!veloIsAnimating) {
            let opacity = parseInt(middleSpan.css('opacity'));
            if(opacity===1) {
              naviInSeq();
            } else {
              naviOutSeq();
            }
          }
        }
        buttonMenu.on('click',handleToggle);
        windowOnUnload(()=>{
          buttonMenu.off('click',handleToggle);
        });
      }
      
      const menuItemClickSeq = [
        reverseManuButtonAnimation,
        menuOut,
        pagestrs.move,
      ];
      
      const handleManuItemClick = () => {
        const clickEvent = (id) => {
          menuItemClickSeq.forEach((anim)=>{
            anim(id);
          });
        };
    
        menuItems.each((key,item) => {
          let it = $(item);
          it.on('click', ()=>{
            clickEvent(it[0].id);
          });
          windowOnUnload(()=>{
            it.off('click');
          });
        });
      }
      
      return {
        animateChangePageButton: animateChangePageButton,
        nextPage: handleNextPageClick,
        prevPage: handlePrevPageClick,
        menuButtonClick: handleMenuButtonClick,
        menuItemClick: handleManuItemClick,
      }
    }
    
    function Apx (navigation, pagesTransition) {
      const pagesTrs = new pagesTransition();
      const navi = new navigation(pagesTrs);
      
      const domOnLoad = (fn) => {
        const unload = () => {
          window.removeEventListener('DOMContentLoaded',fn);
          window.removeEventListener('unload',unload);
        }
        window.addEventListener('DOMContentLoaded',fn);
        window.addEventListener('unload',unload);
      };
      
      const init = () => {
        const onInit = Object.values(navi);
        onInit.forEach((fn)=>{
          domOnLoad(fn);
        });
      }
      return {
        init: init,
      }
    }
    
useEffect(
    () => {
        const i = PageTransitions ();
}, [])

    return (
        <Conteudo>
            <nav>
                <section id="buttons">
                    <article className="buttons-navi">
                        <div className="button">
                            <span className="button-prev glyphicon glyphicon-menu-left"></span>
                        </div>
                        <div className="button">
                            <span className="button-next glyphicon glyphicon-menu-right"></span>
                        </div>
                    </article>
                    <article className="buttons-menu">
                        <div className="button">
                            <div className="button-wrapper">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </article>
                </section>
                <section id="menu">
                    <article className="menu-content">
                        <ul>
                            <li id="front">Main</li>
                            <li id="right">Work</li>
                            <li id="back">About</li>
                            <li id="left">Contact</li>
                        </ul>
                    </article>
                </section>
            </nav>
            <main id="pages">
                <section id="main">
                    <article className="main-content">
                        Main
    </article>
                </section>
                <section id="about">
                    <article className="about-content">
                        About
    </article>
                </section>
                <section id="work">
                    <article className="work-content">
                        Work
    </article>
                </section>
                <section id="contact">
                    <article className="contact-content">
                        Contact
    </article>
                </section>
            </main>
        </Conteudo>
    )
}

export default MenuAnimado

const Conteudo = styled.body`
    -webkit-perspective: 2000px;
    perspective: 2000px;
    -webkit-perspective-origin: center;
    perspective-origin: center;
    overflow: hidden;
    background-color: #222222;
    width: 100vw;
    height: 100vh;


nav {
    background: none;
    position: relative;

    .button {
    width: 60px;
    height: 60px;
    margin: 0;
    background-color: black;
    border-radius: 50%;
    display: inline-block;
    cursor: pointer;
        :nth-child(2) {
            margin-left: 30px;
        }

    }


 #buttons .buttons-navi {
    z-index: 100;
    position: absolute;
    top: 10px;
    margin-left: 10px;

    .button {
    width: 40px;
    height: 40px;
    span {
    color: white;
    font-size: 25px;
    font-weight: 500;
    position: absolute;
}
}
}



}


nav #buttons .buttons-navi .button .button-next {
    top: 8px;
    left: 83px;
    color
}

 nav #buttons .buttons-navi .button .button-prev {
    top: 8px;
    left: 8px;
}

 nav #buttons .buttons-menu {
    z-index: 100;
    position: absolute;
    top: 10px;
    right: 10px;
}

 nav #buttons .buttons-menu .button-wrapper {
    position: relative;
    right: -10px;
    top: 15px;
}

 nav #buttons .buttons-menu .button-wrapper span {
    display: block;
    width: 40px;
    height: 5px;
    background-color: white;
    border-radius: 5px;
    position: absolute;
}

 nav #buttons .buttons-menu .button-wrapper span:nth-child(1) {
    top: 0px;
}

 nav #buttons .buttons-menu .button-wrapper span:nth-child(2) {
    top: 12px;
}

 nav #buttons .buttons-menu .button-wrapper span:nth-child(3) {
    top: 24px;
}

 nav #menu {
    display: none;
    background-color: black;
    color: white;
    -webkit-transform-origin: 0% 0%;
    -o-transform-origin: 0% 0%;
    transform-origin: 0% 0%;
    position: absolute;
    z-index: 99;
}

 nav #menu ul {
    list-style: none;
    width: 100vw;
    height: 100vh;
    -webkit-transform-origin: center;
    -o-transform-origin: center;
    transform-origin: center;
    -webkit-transform: translateY(25vh);
    -o-transform: translateY(25vh);
    transform: translateY(25vh);
    padding-left: 0;
}

 nav #menu ul li {
    display: none;
    text-align: center;
    text-transform: uppercase;
    -webkit-transform-origin: left;
    -o-transform-origin: left;
    transform-origin: left;
    margin: 0 auto;
    font-size: 40px;
    -webkit-transform: translateX(-100vw);
    -o-transform: translateX(-100vw);
    transform: translateX(-100vw);
    cursor: pointer;
}

#pages {
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -webkit-transform-origin: 50% 50% -50vw;
    -o-transform-origin: 50% 50% -50vw;
    transform-origin: 50% 50% -50vw;
    height: 100%;
    width: 100%;
    position: relative;
}

#pages section {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    overflow: hidden;
    font-size: 50px;
    margin: auto 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-align-content: center;
    -ms-flex-line-pack: center;
    align-content: center;
}

#pages #main {
    background-color: rgba(255, 217, 0, 0.8);
}

#pages #about {
    background-color: rgba(255, 69, 0, 0.8);
    -webkit-transform-origin: center;
    -o-transform-origin: center;
    transform-origin: center;
    -webkit-transform: translateZ(-100vw) rotateY(-180deg);
    transform: translateZ(-100vw) rotateY(-180deg);
}

#pages #work {
    -webkit-transform: translateX(50vw) translateZ(-50vw) rotateY(90deg);
    transform: translateX(50vw) translateZ(-50vw) rotateY(90deg);
    background-color: rgba(212, 255, 0, 0.8);
}

#pages #contact {
    -webkit-transform: translateX(-50vw) translateZ(-50vw) rotateY(-90deg);
    transform: translateX(-50vw) translateZ(-50vw) rotateY(-90deg);
    background-color: rgba(170, 179, 179, 0.8);
}

`
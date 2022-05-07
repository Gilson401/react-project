import React  from 'react'
import styled from 'styled-components'
import {   Row } from 'react-bootstrap'


const Movingbg = () => {


    return (
        <>
            <StDiv>


                <div className="main">


                    
                    <Row>
                    


                    </Row>

                </div>

            </StDiv>
        </>
    )
}

export default Movingbg




const StDiv = styled.div`

background: #1c1c25;
width:100vw;
height: 100vh;




.main{
width:300px;
height: 560px;
position:absolute;
top:50%;
left:50%;
transform:translate(-50%, -50%);
border-radius: 10px;
background: #1c1c25;
box-shadow: 0 15px 35px rgba(0,0,0,0.5);
border: solid 0.1px rgba(255, 255, 255, 0.425);
z-index: 40;
color: #fff;



:after {
content:"";
position:absolute;
top:0;
left:0;
width:100%;
height: 100%;
background: linear-gradient(90deg, rgba(255, 2, 2, 0.2),  rgba(255, 255, 255, 0.2) , rgba(255, 2, 2, 0.2));
border-radius: 10px;
backdrop-filter: blur(50px);
/* animation: animation2 5s infinite; */

}

@keyframes mymove {
  from {left: -120px;}
  to {left: 300px;}
}

@keyframes animation2 {
  0%   {left: -320px;}
  50%  {left: 320px;}
  100% {left: -320px;}
}

@keyframes animation3 {
  0%   {top: -320px;
    background: white;
  }
  
  50%  {top: 320px;
    background: black;
  }
  
  100% {top: -320px;
    background: white;
  }
}

.circle1, .circle, .circle3, .circle4, .circle5, .circle6 {
    position: absolute;
    width: 170px;
    height: 170px;
    border-radius: 50%;
}

.circle1{
    top:-8%;
    right: -20%;
    background: linear-gradient(rgb(0,255,179),  rgb(0,255, 79));
    animation: animation2 5s infinite;
}

.circle2{
    top:0%;
    left:0%;
    background: linear-gradient(rgb(0,255,179),  rgb(0,255, 79));
    animation: animation2 5s infinite;
}

.circle3{
    bottom:0%;
    right:0%;
    background: linear-gradient(rgb(2550, 0 ,179),  rgb(0,0, 0));
    animation: animation2 6s infinite;
}

.circle4{

    bottom: 50%;
    left: 50%;
    background: red;
    animation: animation3 6s infinite;
}

.circle6{
    bottom:0%;
    right:50%;
    background: green;
    animation: animation3 10s infinite;
}

}



`

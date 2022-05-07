import { createGlobalStyle } from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import Dog from '../images/dog.jpg'



const GlobalStyle = createGlobalStyle`
    * {
        margin:0;
        padding: 0;
        outline: 0;
        /* -webkit-font-smoothing: antialiased; */
        /* font-family: 'Londrina Solid', cursive; */
    }

html {
  scroll-behavior: smooth;
}
    .red{
     color: red;
     font-weight :900;   
    }

    .green{
     color: rgb(0, 190, 0);
     font-weight :900;   
    }

.bold{
    font-size: 20px;
}
    .scroll {
border-top:0.5px solid rgb(205, 209, 213); 
height: 250px;
overflow-x: hidden;
overflow-y: auto;
width: 100%;
margin: 10px 0 60px 0;
padding: 10px 0 0 15px;
box-shadow: 5px 5px 5px 5px rgb(205, 209, 213) ;

}
`

export default GlobalStyle



import axios from 'axios'
// import { getToken, removeToken } from './auth';
import history from './history'
// import { toastr } from "react-redux-toastr";



const http = axios.create({
//https://codersrede.herokuapp.com/
    
    baseURL:  process.env.NODE_ENV === 'development'
    ? `https://localhost:3005/`
    : process.env.REACT_APP_API
})

http.defaults.headers['Content-type'] = 'application/json'
http.defaults.headers["x-forwarded-proto"] = "https"

// if (getToken()) {
//     http.defaults.headers["x-auth-token"] = getToken();
// }

http.interceptors.response.use(
    response => response,
    error => {
 
        // const { response: { status } } = error

        // if (error.message === 'Network Error' && !error.message) {
        //     alert('você está sem internet...reconecte !!!!!')
        // }

        // switch (status) { 
        //     case 401:

        //         break;

        //     case 500:

        //         break;

        //     case 404:

        //             break;
        //     default:
              
        //         break;
        // }

        // // axios.interceptors.response.eject(interceptors) // global
        // return Promise.reject(error)
    }
)

export default http;

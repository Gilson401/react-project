// inspired in https://medium.com/react-courses/5-top-methods-to-import-and-load-images-dynamically-on-cra-react-local-production-build-855d3ba3e704

import notfound from './not-found.PNG'
import areia from './areia.JPG'
import doguinho from './dog-page.PNG'
import dog1 from './dog1.JPG'
import dog from './dog.jpg'
import dog10 from './dog10.JPG'
import dog3 from './dog3.JPG'
import dog6 from './dog6.JPG'
import dog9 from './dog9.JPG'
import mar from './mar.JPG'
import toras from './toras.jfif'
import buffet from './buffet.JPG'
import dog11 from './dog11.JPG'
import dog4 from './dog4.JPG'
import coelho from './coelho.JPG'
import dog8 from './dog8.JPG'
import dog5 from './dog5.JPG'
import logoDaniela from './logoDaniela.png'
import dog7 from './dog7.JPG'
import dog2 from './dog2.JPG'
import smooth from './smooth.PNG'




const images = {
    areia,    dog1,    dog,    dog10,    dog3,    dog6,    dog9,    mar,    dog2, doguinho,
    toras,    buffet,    dog11,    dog4,    coelho,    dog8,    dog5,    logoDaniela,    dog7,
    smooth
};

function getImageByKey(key) {
const temp = images[key] ? images[key] : notfound  

    return temp
}

export default getImageByKey
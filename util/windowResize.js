import {greenLinks, whiteLinks} from './colors.js'
import get from './getElement.js'
const testimoniesLg = get('.t-lg');

export default (windowWidth, linksContainer, navbar, navHeading, navLink)=>{
    if(windowWidth > 1200){
        testimoniesLg.style.flex = '1';
        linksContainer.style.height = `auto`;
        whiteLinks(navbar, navHeading, navLink);
    }else{
        linksContainer.style.height = 0;
        greenLinks(navbar, navHeading, navLink);
    }
}
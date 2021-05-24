import {greenLinks, whiteLinks} from './colors.js'

export default (windowWidth, windowHeight, navbarHeight, navbar, navHeading, navLink) => {
    if(windowWidth > 1200){
        if(windowHeight > navbarHeight){
            greenLinks(navbar, navHeading, navLink);
        }else{
            whiteLinks(navbar, navHeading, navLink);
        }
    } else{
        greenLinks(navbar, navHeading, navLink);
    }
}
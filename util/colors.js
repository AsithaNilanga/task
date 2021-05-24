export const greenLinks = (navbar, navHeading, navLink)=>{
    navbar.style.boxShadow = '0px 2px 4px rgba(0, 0, 0, 0.4)';
    navbar.style.backgroundColor = 'white';
    navHeading.style.color = '#009f7b';
    navLink.forEach((link)=>{
        link.style.color = '#009f7b';
    });
}

export const whiteLinks = (navbar, navHeading, navLink)=>{
    navbar.style.boxShadow = '0px 0px 0px rgba(0, 0, 0, 0)';
    navbar.style.backgroundColor = 'transparent';
    navHeading.style.color = 'white'
    navLink.forEach((link)=>{
        link.style.color = 'white';
    });
}
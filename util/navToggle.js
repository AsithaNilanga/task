export default (navLinks, linksContainer)=>{
    const navLinksHeight = navLinks.getBoundingClientRect().height;
    const linksContainerHeight = linksContainer.getBoundingClientRect().height;

    if(linksContainerHeight === 0){
        linksContainer.style.height = `${navLinksHeight}px`;
    }else{
        linksContainer.style.height = 0;
    }
}
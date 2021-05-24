export default (selector)=>{
    const element = document.querySelector(selector);

    if (element){
        return element;
    }else{
        throw new Error(`Check Selector ${selector} Spellings`)
    }
}
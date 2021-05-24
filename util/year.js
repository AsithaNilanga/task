export default (year) => {
    const date = new Date();
    year.textContent = `${date.getFullYear() - 2000}`;  
}
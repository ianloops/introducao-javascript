const h1=document.getElementsByTagName("h1")[0];
const button=document.getElementsByTagName("button")[0];
const footer=document.getElementsByTagName("footer")[0];
const body=document.getElementsByTagName("body")[0];
const darkModeClass = 'dark-mode';
const lightMode = "Light Mode";
const darkMode = "Dark Mode";

function changeClass(){
    h1.classList.toggle(darkModeClass);
    button.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
}
function changeText(){
    if(body.classList.contains(darkModeClass)){
        h1.innerHTML = `${darkMode} ON`;
        button.innerHTML = lightMode;
    } else{
        h1.innerHTML = `${lightMode} ON`;
        button.innerHTML = darkMode;
    }
}
function changeMode(){
    changeClass();
    changeText();    
}


button.addEventListener('click', changeMode);
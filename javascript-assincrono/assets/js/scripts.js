const BASE_URL = 'https://api.thecatapi.com/v1/images/search';

const catBtn = document.getElementById('change-cat');

const getCats = async () => {
    try {
        const response = await fetch(BASE_URL)
        const cats = await response.json();   

        return cats[0].url;
    } catch (e) {
        console.log(e.message);
    }
};

const loadImg = async () => {
    const catImg = document.getElementById('cat');
    catImg.src = `${await getCats()}`;
};

catBtn.addEventListener('click', loadImg);
window.onload = loadImg();


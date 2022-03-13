const images = [
    'images/img-0.jpg',
    'images/img-1.jpg',
    'images/img-2.jpg',
    'images/img-3.jpg',
    'images/img-4.jpg',
    'images/img-5.jpg'
];
let imgIndex = 0;
const imgElement = document.getElementById('img-element');
setInterval(() => {
    if(imgIndex >= images.length){
        imgIndex = 0;
    }
    const imgUrl = images[imgIndex];
    imgElement.setAttribute('src', imgUrl);
    imgIndex++;
}, 1000);
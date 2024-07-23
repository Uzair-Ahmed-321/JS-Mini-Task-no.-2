let prevBtn = document.getElementById('prev');
prevBtn.addEventListener("click", prevImg);
let nextBtn = document.getElementById('next');
nextBtn.addEventListener("click", nextImg);
let images = [
    `<img src="assets/image (1).jpg" alt="">`,
    `<img src="assets/image (2).jpg" alt="">`,
    `<img src="assets/image (3).jpg" alt="">`,
    `<img src="assets/image (4).jpg" alt="">`,
    `<img src="assets/image (5).jpg" alt="">`,
    `<img src="assets/image (6).jpg" alt="">`,
    `<img src="assets/image (7).jpg" alt="">`
];
let currentImage = images[0];
let image = document.getElementById('picture');
image.innerHTML = (`<img src="assets/image (1).jpg" alt="">`);

function prevImg() {
    if (image.innerHTML === images[0]) {
        image.innerHTML = images[6]
    } else if (image.innerHTML === images[1]) {
        image.innerHTML = images[0]
    } else if (image.innerHTML === images[2]) {
        image.innerHTML = images[1]
    } else if (image.innerHTML === images[3]) {
        image.innerHTML = images[2]
    } else if (image.innerHTML === images[4]) {
        image.innerHTML = images[3]
    } else if (image.innerHTML === images[5]) {
        image.innerHTML = images[4]
    } else {
        image.innerHTML = images[5]
    }
    console.log('Previous Button Clicked');
}
function nextImg() {
    if (image.innerHTML === images[0]) {
        image.innerHTML = images[1]
    } else if (image.innerHTML === images[1]) {
        image.innerHTML = images[2]
    } else if (image.innerHTML === images[2]) {
        image.innerHTML = images[3]
    } else if (image.innerHTML === images[3]) {
        image.innerHTML = images[4]
    } else if (image.innerHTML === images[4]) {
        image.innerHTML = images[5]
    } else if (image.innerHTML === images[5]) {
        image.innerHTML = images[6]
    } else {
        image.innerHTML = images[0]
    }
    console.log('Next Button Clicked');
}
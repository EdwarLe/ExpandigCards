const img1 = document.getElementById('img1')
const img2 = document.getElementById('img2')
const img3 = document.getElementById('img3')
const img4 = document.getElementById('img4')
const img5 = document.getElementById('img5')

const expandImg1 = img1.addEventListener('click') () => {
    img1.classList.remove('img__contain');
    img1.classList.add('img__expand')
}
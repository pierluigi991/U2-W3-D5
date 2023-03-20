//da completare
const id = new URLSearchParams(window.location.search).get('_id')
const apiURL = 'https://striveschool-api.herokuapp.com/api/product/'
const a = {
    headers: {
        "Bearer  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MjZjZWY4MWI0MjAwMTM5YjI3ZDkiLCJpYXQiOjE2NzkwNjAzMDksImV4cCI6MTY4MDI2OTkwOX0.d4QTbGcZHATHanH_5rVhS3osWFUCxFsyczVVUE7seV0",
        }
}

fetch(apiURL + id, a)
.then(response => response.json())
.then(pic => {
    const container = document.getElementById('container')

    const picture = document.createElement('figure')
    picture.className = 'zoom'
    picture.style.backgroundImage = `url('${pic.imageUrl}')`

    const img = document.createElement('img')
    img.src = pic.imageUrl

    picture.appendChild(img)

    
    picture.addEventListener('mousemove',(e)=>{
        let zoomer = e.currentTarget;
        e.offsetX ? offsetX = e.offsetX : offsetX = e.touches
        e.offsetY ? offsetY = e.offsetY : offsetX = e.touches
        x = offsetX/zoomer.offsetWidth*100
        y = offsetY/zoomer.offsetHeight*100
        zoomer.style.backgroundPosition = x + '%' + y + '%';
    })

    const images = [img,picture]
    images.forEach((element)=>{
        element.style.width = '300px'
        element.style.height = '300px'
    })

    const h2 = document.createElement('h2')
    h2.innerText = pic.name

    const b = document.createElement('p')
    b.innerText = pic.brand

    const p = document.createElement('p')
    p.innerText = pic.description

    const all = [figure,h2,b,p]

    all.forEach((element)=>{
        element.className = 'm-auto mt-5'
    })

    container.append(figure,h2,b,p)
})
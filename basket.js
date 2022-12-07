const products = [
    { img: "https://static.insales-cdn.com/images/products/1/91/624468059/9789464540994.jpg", name: "Cinderella", Publishing_house: "Yoyo Books", genre: "Activity Books", Pages: 12, count: 0, mark: 25.12 },
    { img: "https://static.insales-cdn.com/images/products/1/60/624468028/9789463785204-uk.jpg", name: "Three Little Pigs", Publishing_house: "Yoyo Books", genre: "Activity Books", Pages: 15, count: 0, mark: 25.25 },
    { img: "https://static.insales-cdn.com/images/products/1/44/624468012/51I0fq1ncrL._AC_SY780_.jpg", name: "Little Red Ridding Hood", Publishing_house: "Yoyo Books", genre: "Activity Books", Pages: 27, count: 0, mark: 31.40 },
    { img: "https://static.insales-cdn.com/images/products/1/8138/624467914/9781914598913.jpg", name: "Round We Go!", Publishing_house: "iSeek Ltd", genre: "Books for Children", Pages: 21, count: 0, mark: 27.15 },
]

let countAll = 0;
let counts = document.querySelector("#countAll")
counts.innerText = countAll
const basketarr = []
window.addEventListener("load", function () {
    if (localStorage.getItem("countall")) {
        countAll = JSON.parse(localStorage.getItem("countall"))
        counts.innerText = countAll


    }

})





function createCart(element) {

    let row = document.querySelector(".row")
    let div = document.createElement("div")
    div.classList.add("div_wrap")
    let divimg = document.createElement("div")
    let divtext = document.createElement("div")
    divtext.classList.add("div_text")
    div.setAttribute("id", "carts")
    let addbasket = document.createElement("button")
    addbasket.classList.add("btn")
    addbasket.classList.add("btn-warning")
    addbasket.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
    <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>
    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
  </svg> <b>Add to basket</b>`
    divimg.innerHTML = `<img src=${element.img}>`
    divtext.innerHTML = `<h3><b> ${element.name}</b></h3><p><b>Publish:</b> ${element.Publishing_house}</p> <p><b>Genre:</b> ${element.genre}</p> <p><b>Pages:</b> ${element.Pages}</p>  <p><b>Mark: <i> ${element.mark} AZN</i></b></p> `
    div.appendChild(divimg)
    div.appendChild(divtext)
    row.appendChild(div)
    divtext.appendChild(addbasket)
    addbasket.addEventListener("click", function () {

        element.count++;
        countAll += 1;
        counts.innerText = countAll

        if (basketarr.some(x => x.product.name == element.name)) {
            basketarr.forEach(elem => {
                if (elem.product.name == element.name) {
                    elem.count += 1
                }
            })

        } else {
            let newItem = {
                product: element,
                count: 1

            }
            basketarr.push(newItem)
        }
        localStorage.setItem("cart", JSON.stringify(basketarr))
        localStorage.setItem("countall", JSON.stringify(countAll))




    })



}

products.forEach(element => {
    createCart(element)


});







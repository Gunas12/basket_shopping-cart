basketarr2 = []
let countAll = 0;
let counts = document.querySelector("#countAll")
counts.innerText = countAll
window.addEventListener("load", function () {
    if (localStorage.getItem("countall")) {
        countAll = JSON.parse(localStorage.getItem("countall"))
        counts.innerText = countAll
    }
    if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"))


        cart.forEach(element => {
            createBuy(element)



        });


    }

})

function createBuy(element) {
    let row = document.querySelector(".row")
    let div = document.createElement("div")
    div.classList.add("div_wrap")
    let divimg = document.createElement("div")
    let divtext = document.createElement("div")
    divtext.classList.add("div_text")
    div.setAttribute("id", "carts")
    let rembasket = document.createElement("button")
    rembasket.classList.add("btn")
    rembasket.classList.add("btn-warning")
    rembasket.innerHTML = `<b>-</b>`
    let addbasket = document.createElement("button")
    addbasket.classList.add("btn")
    addbasket.classList.add("btn-warning")
    addbasket.innerHTML = `<b>+</b>`
    let countb = document.createElement("button")
    countb.classList.add("btn")
    countb.classList.add("btn-warning")
    countb.classList.add("m-2")
    countb.innerHTML = `<b>${element.product.count}</b>`
    countb.style.fontSize = "15px"
    divimg.innerHTML = `<img src=${element.product.img}>`
    divtext.innerHTML = `<h3><b> ${element.product.name}</b></h3><p><b>Publish:</b> ${element.product.Publishing_house}</p> <p><b>Genre:</b> ${element.product.genre}</p> <p><b>Pages:</b> ${element.product.Pages}</p>  <p><b>Mark: <i> ${element.product.mark} AZN</i></b></p> `
    div.appendChild(divimg)
    div.appendChild(divtext)
    row.appendChild(div)
    divtext.appendChild(rembasket)
    divtext.appendChild(countb)
    divtext.appendChild(addbasket)

    addbasket.addEventListener("click", function () {

        countAll += 1;
        counts.innerText = countAll
        if (cart.some(x => x.product.name == element.product.name)) {

            cart.forEach(elem => {
                if (elem.product.name == element.product.name) {

                    elem.product.count += 1
                    countb.innerHTML = `<b>${element.product.count}</b>`

                }
            })

        }

        localStorage.setItem("countall", JSON.stringify(countAll))
        localStorage.setItem("cart", JSON.stringify(basketarr2))
    })

    rembasket.addEventListener("click", function (e) {
        countAll -= 1;
        counts.innerText = countAll
        if (cart.some(x => x.product.name == element.product.name)) {

            cart.forEach(elem => {
                if (elem.product.name == element.product.name) {
                    elem.product.count -= 1
                    countb.innerHTML = `<b>${element.product.count}</b>`




                }
            })

        }


        localStorage.setItem("countall", JSON.stringify(countAll))
        localStorage.setItem("cart", JSON.stringify(basketarr2))
    })

    basketarr2.push(element)






}


const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")
hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
})
document.querySelectorAll(".nav-link").forEach(n =>
    n.addEventListener("click", function () {
        hamburger.classList.remove("active")
        navMenu.classList.remove("active")

    })
)













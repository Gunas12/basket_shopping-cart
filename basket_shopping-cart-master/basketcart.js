const basketarr = []
let countAll = 0;
let counts = document.querySelector("#countAll")
counts.innerText = countAll
window.addEventListener("load", function(){
    if (localStorage.getItem("countall")) {
        countAll = JSON.parse(localStorage.getItem("countall"))
        counts.innerText = countAll
    }
    if(localStorage.getItem("cart")){
        cart= JSON.parse(localStorage.getItem("cart"))
        console.log(cart);
        cart.forEach(div=> createBuy(div))
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
    countb.innerHTML=`<b>${element.product.count}</b>`
    countb.style.fontSize="15px"
    
    divimg.innerHTML = `<img src=${element.product.img}>`
    divtext.innerHTML = `<h3><b> ${element.product.name}</b></h3><p><b>Publish:</b> ${element.product.Publishing_house}</p> <p><b>Genre:</b> ${element.product.genre}</p> <p><b>Pages:</b> ${element.product.Pages}</p>  <p><b>Mark: <i> ${element.product.mark} AZN</i></b></p> `
    div.appendChild(divimg)
    div.appendChild(divtext)
    row.appendChild(div)
    divtext.appendChild(rembasket)
    divtext.appendChild(countb)
    divtext.appendChild(addbasket)

    addbasket.addEventListener("click", function () {
        element.product.count++;
        countb.innerHTML=`<b>${element.product.count}</b>`
        countAll += 1;
        counts.innerText = countAll

        if (basketarr.some(x => x.product.name == element.name)) {
            basketarr.forEach(elem => {
                if (elem.product.name == element.product.name) {
                    element.parentElement.count += 1
                }
            })

        } else {
            let newItem = {
                product: element,
                

            }
            basketarr.push(newItem)
        }
        localStorage.setItem("cart", JSON.stringify(basketarr))
        localStorage.setItem("countall", JSON.stringify(countAll))

    })

    rembasket.addEventListener("click", function () {
        element.product.count--;
        countb.innerHTML=`<b>${element.product.count}</b>`
        countAll -= 1;
        counts.innerText = countAll
        
        localStorage.setItem("countall", JSON.stringify(countAll))

    })


}











var selctedProductsTitles = []
var selctedProductsPrices = []
var selctedProductsImages = []



function getMenTshirts() {
    var xmlRequest = new XMLHttpRequest()
    xmlRequest.open("Get", "https://dummyjson.com/products/category/mens-shirts", true)
    xmlRequest.send()
    xmlRequest.onreadystatechange = function () {
        if (this.status == 200 && this.readyState == 4) {
            var data = JSON.parse(this.responseText)
            console.log(data.products)


            for (var i = 0; i < data.products.length; i++) {

                var divPro = document.createElement('div')
                divPro.setAttribute('class', 'product')

                var imgPro = document.createElement('img')
                imgPro.setAttribute('class', "product-img")
                imgPro.setAttribute('src', data.products[i].images[0])
                imgPro.setAttribute('alt', 'not loaded')


                var proContent = document.createElement('div')
                proContent.setAttribute('class', 'product-content')


                var titlePro = document.createElement('h2')
                titlePro.setAttribute('class', 'product-title')
                var txt_titlePro = document.createTextNode(data.products[i].title)
                titlePro.append(txt_titlePro)



                var descrPro = document.createElement('p')
                descrPro.setAttribute("class", "product-description")




                var txt_descrPro = document.createTextNode(
                    data.products[i].description.length > 80
                        ? data.products[i].description.substring(0, 80).concat(' ...more')
                        : data.products[i].description)
                descrPro.append(txt_descrPro)


                var proPriceContainer = document.createElement('div')
                proPriceContainer.setAttribute("class", "product-price-container")
                var pricePro = document.createElement('h3')
                pricePro.setAttribute('class', 'product-price')
                var txt_pricePro = document.createTextNode(data.products[i].price)
                pricePro.append("$", txt_pricePro)
                var cartPro = document.createElement('a')
                var cartA = document.createElement("ion-icon")
                cartA.setAttribute('name', "cart-outline")
                cartPro.append(cartA)
                cartPro.setAttribute('class', 'add-to-cart')


                cartPro.onclick = (function (val) {
                    return function () {
                        //console.log(val)
                        var title = data.products[val].title
                        var price = data.products[val].price
                        var productImage = data.products[val].images[0]
                        // addProductToCart(title, price, productImage);
                        selctedProductsTitles.push(title)
                        selctedProductsPrices.push(price)
                        selctedProductsImages.push(productImage)

                    }
                })(i);
                divPro.append(imgPro)
                proContent.append(titlePro, descrPro)
                proPriceContainer.append(pricePro, cartPro)
                divPro.append(proContent, proPriceContainer)

                var div = document.getElementById('Pro')
                div.append(divPro)
            }
        }
    }
}



function getSmartPhones() {
    var xmlRequest = new XMLHttpRequest()
    xmlRequest.open("Get", "https://dummyjson.com/products/category/smartphones", true)
    xmlRequest.send()
    xmlRequest.onreadystatechange = function () {
        if (this.status == 200 && this.readyState == 4) {
            var data = JSON.parse(this.responseText)
            console.log(data.products)
            for (var i = 0; i < data.products.length; i++) {

                var divPro = document.createElement('div')
                divPro.setAttribute('class', 'product')


                var imgPro = document.createElement('img')
                imgPro.setAttribute('class', "product-img")
                imgPro.setAttribute('src', data.products[i].images[0])
                imgPro.setAttribute('alt', 'not loaded')


                var proContent = document.createElement('div')
                proContent.setAttribute('class', 'product-content')


                var titlePro = document.createElement('h2')
                titlePro.setAttribute('class', 'product-title')


                var descrPro = document.createElement('p')
                descrPro.setAttribute("class", "product-description")
                var txt_descrPro = document.createTextNode(
                    data.products[i].description.length > 80
                        ? data.products[i].description.substring(0, 80).concat(' ...more')
                        : data.products[i].description)
                descrPro.append(txt_descrPro)


                var proPriceContainer = document.createElement('div')
                proPriceContainer.setAttribute("class", "product-price-container")
                var txt_titlePro = document.createTextNode(data.products[i].title)
                titlePro.append(txt_titlePro)
                var pricePro = document.createElement('h3')
                pricePro.setAttribute('class', 'product-price')
                var txt_pricePro = document.createTextNode(data.products[i].price)
                pricePro.append("$", txt_pricePro)
                var cartPro = document.createElement('a')
                var cartA = document.createElement("ion-icon")
                cartA.setAttribute('name', "cart-outline")
                cartPro.append(cartA)
                cartPro.setAttribute('class', 'add-to-cart')




                cartPro.onclick = (function (val) {
                    return function () {
                        //console.log(val)
                        var title = data.products[val].title
                        var price = data.products[val].price
                        var productImage = data.products[val].images[0]
                        console.log(title);
                        console.log(price);
                        console.log(productImage);
                        // addProductToCart(title, price, productImage);
                        selctedProductsTitles.push(title)
                        selctedProductsPrices.push(price)
                        selctedProductsImages.push(productImage)
                        console.log(selctedProductsTitles)
                        //updatetotal();

                    }
                })(i);


                divPro.append(imgPro)
                proContent.append(titlePro, descrPro)
                proPriceContainer.append(pricePro, cartPro)
                divPro.append(proContent, proPriceContainer)

                var div = document.getElementById('Pro')
                div.append(divPro)
            }
        }
    }
}


function getLaptops() {
    var xmlRequest = new XMLHttpRequest()
    xmlRequest.open("Get", "https://dummyjson.com/products/category/laptops", true)
    xmlRequest.send()
    xmlRequest.onreadystatechange = function () {
        if (this.status == 200 && this.readyState == 4) {
            var data = JSON.parse(this.responseText)
            console.log(data.products)
            for (var i = 0; i < data.products.length; i++) {

                var divPro = document.createElement('div')
                divPro.setAttribute('class', 'product')


                var imgPro = document.createElement('img')
                imgPro.setAttribute('class', "product-img")
                imgPro.setAttribute('src', data.products[i].images[0])
                imgPro.setAttribute('alt', 'not loaded')


                var proContent = document.createElement('div')
                proContent.setAttribute('class', 'product-content')


                var titlePro = document.createElement('h2')
                titlePro.setAttribute('class', 'product-title')


                var descrPro = document.createElement('p')
                descrPro.setAttribute("class", "product-description")
                var txt_descrPro = document.createTextNode(
                    data.products[i].description.length > 80
                        ? data.products[i].description.substring(0, 80).concat(' ...more')
                        : data.products[i].description)
                descrPro.append(txt_descrPro)


                var proPriceContainer = document.createElement('div')
                proPriceContainer.setAttribute("class", "product-price-container")
                var txt_titlePro = document.createTextNode(data.products[i].title)
                titlePro.append(txt_titlePro)
                var pricePro = document.createElement('h3')
                pricePro.setAttribute('class', 'product-price')
                var txt_pricePro = document.createTextNode(data.products[i].price)
                pricePro.append("$", txt_pricePro)
                var cartPro = document.createElement('a')
                var cartA = document.createElement("ion-icon")
                cartA.setAttribute('name', "cart-outline")
                cartPro.append(cartA)
                cartPro.setAttribute('class', 'add-to-cart')

                cartPro.onclick = (function (val) {
                    return function () {
                        //console.log(val)
                        var title = data.products[val].title
                        var price = data.products[val].price
                        var productImage = data.products[val].images[0]
                        console.log(title);
                        console.log(price);
                        console.log(productImage);
                        // addProductToCart(title, price, productImage);
                        selctedProductsTitles.push(title)
                        selctedProductsPrices.push(price)
                        selctedProductsImages.push(productImage)
                        console.log(selctedProductsTitles)
                        updatetotal();

                    }
                })(i);


                divPro.append(imgPro)
                proContent.append(titlePro, descrPro)
                proPriceContainer.append(pricePro, cartPro)
                divPro.append(proContent, proPriceContainer)

                var div = document.getElementById('Pro')
                div.append(divPro)
            }
        }
    }
}



function getFragrances() {
    var xmlRequest = new XMLHttpRequest()
    xmlRequest.open("Get", "https://dummyjson.com/products/category/fragrances", true)
    xmlRequest.send()
    xmlRequest.onreadystatechange = function () {
        if (this.status == 200 && this.readyState == 4) {
            var data = JSON.parse(this.responseText)
            console.log(data.products)
            for (var i = 0; i < data.products.length; i++) {

                var divPro = document.createElement('div')
                divPro.setAttribute('class', 'product')


                var imgPro = document.createElement('img')
                imgPro.setAttribute('class', "product-img")
                imgPro.setAttribute('src', data.products[i].images[0])
                imgPro.setAttribute('alt', 'not loaded')


                var proContent = document.createElement('div')
                proContent.setAttribute('class', 'product-content')


                var titlePro = document.createElement('h2')
                titlePro.setAttribute('class', 'product-title')


                var descrPro = document.createElement('p')
                descrPro.setAttribute("class", "product-description")
                var txt_descrPro = document.createTextNode(
                    data.products[i].description.length > 80
                        ? data.products[i].description.substring(0, 80).concat(' ...more')
                        : data.products[i].description)
                descrPro.append(txt_descrPro)


                var proPriceContainer = document.createElement('div')
                proPriceContainer.setAttribute("class", "product-price-container")
                var txt_titlePro = document.createTextNode(data.products[i].title)
                titlePro.append(txt_titlePro)
                var pricePro = document.createElement('h3')
                pricePro.setAttribute('class', 'product-price')
                var txt_pricePro = document.createTextNode(data.products[i].price)
                pricePro.append("$", txt_pricePro)
                var cartPro = document.createElement('a')
                var cartA = document.createElement("ion-icon")
                cartA.setAttribute('name', "cart-outline")
                cartPro.append(cartA)
                cartPro.setAttribute('class', 'add-to-cart')

                cartPro.onclick = (function (val) {
                    return function () {
                        //console.log(val)
                        var title = data.products[val].title
                        var price = data.products[val].price
                        var productImage = data.products[val].images[0]
                        console.log(title);
                        console.log(price);
                        console.log(productImage);
                        // addProductToCart(title, price, productImage);
                        selctedProductsTitles.push(title)
                        selctedProductsPrices.push(price)
                        selctedProductsImages.push(productImage)
                        console.log(selctedProductsTitles)
                        updatetotal();

                    }
                })(i);


                divPro.append(imgPro)
                proContent.append(titlePro, descrPro)
                proPriceContainer.append(pricePro, cartPro)
                divPro.append(proContent, proPriceContainer)

                var div = document.getElementById('Pro')
                div.append(divPro)
            }
        }
    }
}




function getSkincare() {
    var xmlRequest = new XMLHttpRequest()
    xmlRequest.open("Get", "https://dummyjson.com/products/category/skincare", true)
    xmlRequest.send()
    xmlRequest.onreadystatechange = function () {
        if (this.status == 200 && this.readyState == 4) {
            var data = JSON.parse(this.responseText)
            console.log(data.products)
            for (var i = 0; i < data.products.length; i++) {

                var divPro = document.createElement('div')
                divPro.setAttribute('class', 'product')


                var imgPro = document.createElement('img')
                imgPro.setAttribute('class', "product-img")
                imgPro.setAttribute('src', data.products[i].images[0])
                imgPro.setAttribute('alt', 'not loaded')


                var proContent = document.createElement('div')
                proContent.setAttribute('class', 'product-content')


                var titlePro = document.createElement('h2')
                titlePro.setAttribute('class', 'product-title')


                var descrPro = document.createElement('p')
                descrPro.setAttribute("class", "product-description")
                var txt_descrPro = document.createTextNode(
                    data.products[i].description.length > 80
                        ? data.products[i].description.substring(0, 80).concat(' ...more')
                        : data.products[i].description)
                descrPro.append(txt_descrPro)


                var proPriceContainer = document.createElement('div')
                proPriceContainer.setAttribute("class", "product-price-container")
                var txt_titlePro = document.createTextNode(data.products[i].title)
                titlePro.append(txt_titlePro)
                var pricePro = document.createElement('h3')
                pricePro.setAttribute('class', 'product-price')
                var txt_pricePro = document.createTextNode(data.products[i].price)
                pricePro.append("$", txt_pricePro)
                var cartPro = document.createElement('a')
                var cartA = document.createElement("ion-icon")
                cartA.setAttribute('name', "cart-outline")
                cartPro.append(cartA)
                cartPro.setAttribute('class', 'add-to-cart')

                cartPro.onclick = (function (val) {

                    return function () {
                        //console.log(val)
                        var title = data.products[val].title
                        var price = data.products[val].price
                        var productImage = data.products[val].images[0]
                        console.log(title);
                        console.log(price);
                        console.log(productImage);
                        // addProductToCart(title, price, productImage);
                        selctedProductsTitles.push(title)
                        selctedProductsPrices.push(price)
                        selctedProductsImages.push(productImage)
                        console.log(selctedProductsTitles)
                        updatetotal();

                    }
                })(i);


                divPro.append(imgPro)
                proContent.append(titlePro, descrPro)
                proPriceContainer.append(pricePro, cartPro)
                divPro.append(proContent, proPriceContainer)

                var div = document.getElementById('Pro')
                div.append(divPro)

            }
        }
    }
}



function getGroceries() {
    var xmlRequest = new XMLHttpRequest()
    xmlRequest.open("Get", "https://dummyjson.com/products/category/groceries", true)
    xmlRequest.send()
    xmlRequest.onreadystatechange = function () {
        if (this.status == 200 && this.readyState == 4) {
            var data = JSON.parse(this.responseText)
            console.log(data.products)
            for (var i = 0; i < data.products.length; i++) {

                var divPro = document.createElement('div')
                divPro.setAttribute('class', 'product')


                var imgPro = document.createElement('img')
                imgPro.setAttribute('class', "product-img")
                imgPro.setAttribute('src', data.products[i].images[0])
                imgPro.setAttribute('alt', 'not loaded')


                var proContent = document.createElement('div')
                proContent.setAttribute('class', 'product-content')


                var titlePro = document.createElement('h2')
                titlePro.setAttribute('class', 'product-title')


                var descrPro = document.createElement('p')
                descrPro.setAttribute("class", "product-description")
                var txt_descrPro = document.createTextNode(
                    data.products[i].description.length > 80
                        ? data.products[i].description.substring(0, 80).concat(' ...more')
                        : data.products[i].description)
                descrPro.append(txt_descrPro)


                var proPriceContainer = document.createElement('div')
                proPriceContainer.setAttribute("class", "product-price-container")
                var txt_titlePro = document.createTextNode(data.products[i].title)
                titlePro.append(txt_titlePro)
                var pricePro = document.createElement('h3')
                pricePro.setAttribute('class', 'product-price')
                var txt_pricePro = document.createTextNode(data.products[i].price)
                pricePro.append("$", txt_pricePro)
                var cartPro = document.createElement('a')
                var cartA = document.createElement("ion-icon")
                cartA.setAttribute('name', "cart-outline")
                cartPro.append(cartA)
                cartPro.setAttribute('class', 'add-to-cart')

                cartPro.onclick = (function (val) {
                    return function () {
                        //console.log(val)
                        var title = data.products[val].title
                        var price = data.products[val].price
                        var productImage = data.products[val].images[0]
                        console.log(title);
                        console.log(price);
                        console.log(productImage);
                        // addProductToCart(title, price, productImage);
                        selctedProductsTitles.push(title)
                        selctedProductsPrices.push(price)
                        selctedProductsImages.push(productImage)
                        console.log(selctedProductsTitles)
                        updatetotal();

                    }
                })(i);


                divPro.append(imgPro)
                proContent.append(titlePro, descrPro)
                proPriceContainer.append(pricePro, cartPro)
                divPro.append(proContent, proPriceContainer)

                var div = document.getElementById('Pro')
                div.append(divPro)
            }
        }
    }
}







function getHomeDecoration() {
    var xmlRequest = new XMLHttpRequest()
    xmlRequest.open("Get", "https://dummyjson.com/products/category/home-decoration", true)
    xmlRequest.send()
    xmlRequest.onreadystatechange = function () {
        if (this.status == 200 && this.readyState == 4) {
            var data = JSON.parse(this.responseText)
            console.log(data.products)
            for (var i = 0; i < data.products.length; i++) {

                var divPro = document.createElement('div')
                divPro.setAttribute('class', 'product')


                var imgPro = document.createElement('img')
                imgPro.setAttribute('class', "product-img")
                imgPro.setAttribute('src', data.products[i].images[0])
                imgPro.setAttribute('alt', 'not loaded')


                var proContent = document.createElement('div')
                proContent.setAttribute('class', 'product-content')


                var titlePro = document.createElement('h2')
                titlePro.setAttribute('class', 'product-title')


                var descrPro = document.createElement('p')
                descrPro.setAttribute("class", "product-description")
                var txt_descrPro = document.createTextNode(
                    data.products[i].description.length > 80
                        ? data.products[i].description.substring(0, 80).concat(' ...more')
                        : data.products[i].description)
                descrPro.append(txt_descrPro)


                var proPriceContainer = document.createElement('div')
                proPriceContainer.setAttribute("class", "product-price-container")
                var txt_titlePro = document.createTextNode(data.products[i].title)
                titlePro.append(txt_titlePro)
                var pricePro = document.createElement('h3')
                pricePro.setAttribute('class', 'product-price')
                var txt_pricePro = document.createTextNode(data.products[i].price)
                pricePro.append("$", txt_pricePro)
                var cartPro = document.createElement('a')
                var cartA = document.createElement("ion-icon")
                cartA.setAttribute('name', "cart-outline")
                cartPro.append(cartA)
                cartPro.setAttribute('class', 'add-to-cart')

                cartPro.onclick = (function (val) {
                    return function () {
                        //console.log(val)
                        var title = data.products[val].title
                        var price = data.products[val].price
                        var productImage = data.products[val].images[0]
                        console.log(title);
                        console.log(price);
                        console.log(productImage);
                        // addProductToCart(title, price, productImage);
                        selctedProductsTitles.push(title)
                        selctedProductsPrices.push(price)
                        selctedProductsImages.push(productImage)
                        console.log(selctedProductsTitles)
                        updatetotal();

                    }
                })(i);


                divPro.append(imgPro)
                proContent.append(titlePro, descrPro)
                proPriceContainer.append(pricePro, cartPro)
                divPro.append(proContent, proPriceContainer)

                var div = document.getElementById('Pro')
                div.append(divPro)
            }
        }
    }
}





function getProcut(that) {
    if (that.value == "1") {
        document.getElementById("Pro").innerHTML = "";

        getMenTshirts();
    }
    else if (that.value == "2") {
        document.getElementById("Pro").innerHTML = "";

        getSmartPhones();
    }

    else if (that.value == "3") {
        document.getElementById("Pro").innerHTML = "";

        getLaptops();
    }


    else if (that.value == "4") {
        document.getElementById("Pro").innerHTML = "";

        getFragrances();
    }


    else if (that.value == "5") {
        document.getElementById("Pro").innerHTML = "";

        getSkincare();
    }


    else if (that.value == "6") {
        document.getElementById("Pro").innerHTML = "";

        getGroceries();
    }


    else if (that.value == "7") {
        document.getElementById("Pro").innerHTML = "";

        getHomeDecoration();
    }


}







let cartIcon = document.querySelector('#cart-icon')
let cart = document.querySelector('.cart')
let closeCart = document.querySelector('#close-cart')
var totalPrice = 0


cartIcon.onclick = () => {
    cart.classList.add("active");
    var cartC = document.getElementById("carContent")
    var s = selctedProductsTitles.length

    for (var i = 0; i < s; i++) {
        var divC = document.createElement('div')
        divC.setAttribute('class', 'cart-box')

        var cartIm = document.createElement('img')
        cartIm.setAttribute('class', 'cart-img')
        cartIm.setAttribute('src', selctedProductsImages[i])


        var divDetailsBox = document.createElement('div')
        divDetailsBox.setAttribute('class', 'detail-box')

        var divTilte = document.createElement('div')
        divTilte.setAttribute('class', 'cat-product-title')
        divTilte.innerText = selctedProductsTitles[i]

        var divPrice = document.createElement('div')
        divPrice.setAttribute('class', 'cat-price')

        divPrice.innerText = selctedProductsPrices[i] + '$'
        totalPrice += selctedProductsPrices[i]

        // var numberOfPro = document.createElement('input')
        // numberOfPro.setAttribute('type', 'number')
        // numberOfPro.setAttribute('value', '1')
        // numberOfPro.setAttribute('min', '1')
        // numberOfPro.setAttribute('class', "cart-quantity")


        // var delPro = document.createElement('i')
        // delPro.setAttribute('class', "fa-solid fa-trash-can cart-remove")
        // delPro.setAttribute('onclick', "removeCartItem()")


        divTilte.innerText = selctedProductsTitles[i]

        divDetailsBox.append(divTilte, divPrice)
        divC.append(cartIm, divDetailsBox)
    }


    cartC.append(divC)


    document.getElementById('totalP').innerHTML = totalPrice + '$'

    console.log(cartC)
}

closeCart.onclick = () => {
    cart.classList.remove("active");
}


if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
}
else {
    ready();
}



function ready() {
    var removeCartButtons = document.getElementsByClassName('cart-remove')
    for (var i = 0; i < removeCartButtons.length; i++) {
        var button = removeCartButtons[i]
        button.addEventListener('click', removeCartItem)
    }



    var quantityInputs = document.getElementsByClassName('cart-quantity');
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener("change", quantityChanged);

    }

    var addCart = document.getElementsByClassName("add-to-cart");
    console.log(addCart);
    for (var i = 0; i < addCart.length; i++) {
        var button = addCart[i];

        button.addEventListener("click", addCartClicked);
    }

}

// function removeCartItem(event) {

//     var buttonClicked = event.target;
//     buttonClicked.parentElement.remove();
//     totalPrice = 0
// }



function quantityChanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updatetotal();


}

function addCartClicked(event) {
    var button = event.target;
    var shopProducts = button.parentElement;
    var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
    var price = shopProducts.getElementsByClassName("product-price")[0].innerText;
    var productImage = shopProducts.getElementsByClassName("product-img")[0].src;
    console.log(title);
    addProductToCart(title, price, productImage);
    updatetotal();

}


function addProductToCart(title, price, productImage) {

    var cartShopBox = document.createElement("div");
    var cartItems = document.getElementsByClassName("cart-content")[0];
    var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
    for (var i = 0; i < cartItemsNames.length; i++) {
        if (cartItemsNames[i].innerText == this) {
            alert("you have already add this item to cart");
            return;
        }
    }
}




function updatetotal() {
    var cartContent = document.getElementsByClassName('cart-content')[0];
    var cartBoxes = document.getElementsByClassName('cart-box');
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName('cart-price')[0];
        var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
        var price = parseFloat(priceElement.innerText.replace("$", ""));
        var quantity = quantityElement.value;
        total = total + (price * quantity);
        total = Math.round(total * 100) / 100;
        document.getElementsByClassName("total-price")[0].innerText = "$" + total;
    }

}


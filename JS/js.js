document.addEventListener("DOMContentLoaded", function() {
  let products = document.querySelector('.products');
  async function fetchProducts(url) {
      try {
          let data = await fetch(url);
          let response = await data.json();

          for (let i = 0; i <10; i++) {
              let description = response[i].description;
              let title = response[i].title;
              products.innerHTML += `
     <div class="product">
         <a href="shop.html"><img src="${response[i].images[0]}" alt="${response[i].category.name}" class="product-img"></a>
         <div class="product-content">
         <h2 class="product-title">${
           title.length > 18 ? title.substring(0, 18).concat(' ...') : title
         }</h2>
         <h4 class="product-category">${response[i].category.name}</h4>
         <p class="product-description">${
           description.length > 80
             ? description.substring(0, 150).concat(' ...more')
             : description
         }</p>
         </div>
        
     </div>
     `;
          }
         
          
      } catch (err) {
          console.log(err);
      }
  }
  fetchProducts("https://api.escuelajs.co/api/v1/products");
});

// sidebar javascript

  function toggleSidebar(){
    document.getElementById("sidebar").classList.toggle('active');
  }
    

//add to cart button javascript
  const totalItem = document.getElementById("total-item");
  console.log(totalItem);

  let count = 0;

  const addToCartBtn = document.querySelectorAll(".add-to-cart");
  console.log(addToCartBtn);

  addToCartBtn.forEach(btn => {
    btn.addEventListener("click", function(){ 
      console.log("clicked");
      totalItem.innerHTML = ++count;
    })
  });
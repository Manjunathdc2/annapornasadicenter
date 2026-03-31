function orderNow(product) {
  let phone = "918073319024";
  let message = "Hello, I want to order: " + product;
  window.open("https://wa.me/" + phone + "?text=" + encodeURIComponent(message));
}

// Search
function searchProduct() {
  let input = document.getElementById("search").value.toLowerCase();
  let products = document.querySelectorAll(".product");

  products.forEach(p => {
    let text = p.innerText.toLowerCase();
    p.style.display = text.includes(input) ? "block" : "none";
  });
}

// Filter
function filterProducts() {
  let price = document.getElementById("price").value;
  let color = document.getElementById("color").value;
  let region = document.getElementById("region").value;

  let products = document.querySelectorAll(".product");

  products.forEach(p => {
    let match =
      (!price || p.dataset.price === price) &&
      (!color || p.dataset.color === color) &&
      (!region || p.dataset.region === region);

    p.style.display = match ? "block" : "none";
  });
}

function orderNow(product) {
  let phone = "918073319024";
  let message = "Hello, I want to order: " + product;
  window.open("https://wa.me/" + phone + "?text=" + encodeURIComponent(message));
}

function scrollToShop() {
  document.getElementById("shop").scrollIntoView({behavior: "smooth"});
}

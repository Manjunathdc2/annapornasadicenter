function orderNow(product) {
  let phone = "918073319024";
  let msg = "Hello, I want to order: " + product;
  window.open("https://wa.me/" + phone + "?text=" + encodeURIComponent(msg));
}

function scrollToShop() {
  document.getElementById("shop").scrollIntoView({behavior:"smooth"});
}

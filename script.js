function orderNow(product) {
  let phone = "918073319024"; // replace with your WhatsApp number
  let message = "Hello, I want to order: " + product;
  let url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);
  window.open(url, "_blank");
}
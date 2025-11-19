// script.js for Fitovit Landing

function contactWhatsApp(product) {
  const phone = "57313785499"; // Cambia este número si deseas otro
  const message = encodeURIComponent(`Hola, quiero más información sobre el producto: ${product}`);
  const url = `https://wa.me/${phone}?text=${message}`;
  window.open(url, '_blank');
}

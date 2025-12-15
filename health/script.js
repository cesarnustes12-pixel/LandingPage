// script.js (Health)

// Función para redirigir a WhatsApp con mensaje personalizado
function contactWhatsApp(productName) {
    const phone = "573137774871";
    const message = encodeURIComponent(`Hola, estoy interesado en el producto de salud: ${productName}. ¿Me das más info?`);
    const url = `https://wa.me/${phone}?text=${message}`;
    window.open(url, '_blank');
}



// script.js (Tech)

// Función para redirigir a WhatsApp con mensaje personalizado
function contactWhatsApp(productName) {
    const phone = "573137774871";
    const message = encodeURIComponent(`Hola, me interesa el gadget tecnológico: ${productName}. ¿Está disponible?`);
    const url = `https://wa.me/${phone}?text=${message}`;
    window.open(url, '_blank');
}



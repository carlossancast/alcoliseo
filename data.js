/* ==========================================================================
   ALCOLISEO — CONTENIDO EDITABLE
   Cambia textos, links, eventos, bebidas y fotos SOLO en este archivo.
   No necesitas tocar index.html, styles.css ni app.js.
   ========================================================================== */

window.ALCOLISEO = {
  /* TEMPORADA
     "halloween" → logo Halloween, sección Halloween, murciélagos/telarañas/velas
     "normal"    → logo normal, sin sección Halloween ni decoración
     "auto"      → Halloween del 1 de octubre al 3 de noviembre, normal el resto del año */
  season: "halloween",

  config: {
    address: { line1: "GÉNOVA 59", line2: "ZONA ROSA", city: "CIUDAD DE MÉXICO", short: "GÉNOVA 59 · ZONA ROSA · CDMX" },
    googleMapsUrl: "https://share.google/SM5WfqySOFwlX7hzY",
    /* Mapa embebido: solo se muestra cuando el sitio está publicado en tu dominio */
    googleMapsEmbed: "https://www.google.com/maps?q=G%C3%A9nova+59,+Zona+Rosa,+Ciudad+de+M%C3%A9xico&output=embed",
    instagramUrl: "https://www.instagram.com/alcoliseozonarosa",
    instagramHandle: "@alcoliseozonarosa",
    tiktokUrl: "", /* vacío = se ocultan los botones de TikTok */
    /* Todos los botones "RESERVA TU MESA" llevan aquí */
    reservationUrl: "https://wa.me/525518359278?text=Hola%20Alcoliseo%2C%20quiero%20reservar%20una%20mesa",
    menuUrl: "assets/menu.pdf",
    allEventsUrl: "https://www.instagram.com/alcoliseozonarosa",
    halloweenUrl: "https://www.instagram.com/alcoliseozonarosa",
    phone: "+52 55 1835 9278",
    whatsapp: "525518359278",
    openingHours: [
      { days: "LUNES A DOMINGO", hours: "14:00 – 06:00", note: "Abrimos todos los días" },
    ],
    /* Video de fondo del hero. Deja "" para usar solo la foto.
       heroVideoWide   → computadora/tablet (horizontal 16:9)
       heroVideoMobile → celular (vertical 9:16) */
    heroVideoWide: "assets/hero-alcoliseo-wide.mp4",
    heroVideoMobile: "assets/hero-alcoliseo-mobile.mp4",
  },

  /* CARTELERA — "ESTA SEMANA EN EL COLISEO"
     Fotos verticales 800×1100 en assets/events/
     ticketUrl / reservationUrl vacíos → el botón usa reservationUrl general */
  events: [
    { title: "SALSA EN VIVO", day: "VIERNES", date: "30 OCT", music: "Salsa · Banda en vivo · Baile", time: "14:00 – 06:00", image: "assets/events/01.jpg", ticketUrl: "", reservationUrl: "", tag: "EN VIVO" },
    { title: "LA NOCHE DE LOS MUERTOS", day: "SÁBADO", date: "31 OCT", music: "Halloween · Hits · Reggaetón · Latino", time: "14:00 – 06:00", image: "assets/events/02.jpg", ticketUrl: "", reservationUrl: "", tag: "HALLOWEEN" },
    { title: "RAVE ELECTRÓNICA", day: "DOMINGO · GÉNOVA 59 SUNDAY", date: "1 NOV", music: "Día de Muertos · Eduardo McGregor · Saza Fisher · Karlos Elizondo · White Flamingo · Numen · Ivan Rush", time: "14:00 – 06:00", image: "assets/events/03.jpg", ticketUrl: "", reservationUrl: "", tag: "DÍA DE MUERTOS" },
    { title: "AFTER OFFICE ROMANO", day: "JUEVES", date: "5 NOV", music: "Pop · 2000s · Cubetas", time: "14:00 – 06:00", image: "assets/events/04.jpg", ticketUrl: "", reservationUrl: "" },
  ],

  /* MIXOLOGÍA — fotos verticales 3:4 en assets/drinks/ · price "" = oculto */
  drinks: [
    { name: "CANTARITO", description: "Tequila y cítricos servido en jarro de barro, con jarritos escarchados de chile. Para toda la mesa.", price: "", image: "assets/drinks/cantarito.jpg", accent: "#b5541a" },
    { name: "TARRO DE CHELA", description: "Cerveza de barril en torre dorada, directo a la mesa. Para los que no vinieron a medias.", price: "", image: "assets/drinks/tarro.jpg", accent: "#C59A45" },
    { name: "CUBETA DEL COLISEO", description: "Cervezas bien frías con limón. La que nunca falta en la mesa.", price: "", image: "assets/drinks/cubeta.jpg", accent: "#9E0B0F" },
    { name: "SANGRE ROMANA", description: "Tequila, frutos rojos y vino tinto en tarro con hielo. Edición Halloween.", price: "", image: "assets/drinks/sangre-romana-nueva.png", accent: "#4A0507" },
    { name: "AZUL DEL COLISEO", description: "Vodka, curaçao, limón y cereza. El trago que nadie recuerda pedir.", price: "", image: "assets/drinks/azul-del-coliseo-nueva.png", accent: "#2f5fa3" },
    { name: "PALOMA", description: "Refrescante Paloma en tarro con hielo y un toque cítrico.", price: "", image: "assets/drinks/paloma.png", accent: "#eeb889" },
    /* Para agregar más, copia una línea de arriba. Ideas pendientes de foto:
       EL GLADIADOR · LA MEDUSA · EL EMPERADOR */
  ],

  /* COLLAGE "LA EXPERIENCIA" — 6 fotos: 01 y 04 verticales, 02 y 05 horizontales, 03 y 06 cuadradas */
  experience: [
    { src: "assets/gallery/01.jpg", alt: "Cubeta de Alcoliseo bajo el neón: Ya no voy a pistear más, pero tampoco menos" },
    { src: "assets/gallery/02.jpg", alt: "Cantante bailando con la banda de salsa en el escenario" },
    { src: "assets/gallery/03.jpg", alt: "Percusionistas tocando timbales y cencerro en vivo" },
    { src: "assets/gallery/04.jpg", alt: "Cantante de la banda de salsa en el escenario" },
    { src: "assets/gallery/05.jpg", alt: "Cantarito servido en la mesa con tequila" },
    { src: "assets/gallery/06.jpg", alt: "Banda en vivo en Alcoliseo" },
  ],

  /* FEED SOCIAL — cuadradas 900×900 */
  social: [
    { src: "assets/gallery/07.jpg", alt: "Cantante con camisa de lentejuelas en el escenario" },
    { src: "assets/gallery/08.jpg", alt: "El Romano zombie brindando en Halloween" },
    { src: "assets/gallery/09.jpg", alt: "Percusión en vivo" },
    { src: "assets/gallery/10.jpg", alt: "Sticker del Romano de Alcoliseo" },
    { src: "assets/gallery/11.jpg", alt: "Cubeta de cervezas en la pista" },
    { src: "assets/gallery/12.jpg", alt: "El Romano levantando su tarro" },
    { src: "assets/gallery/13.jpg", alt: "Tarro de chela en torre dorada" },
    { src: "assets/gallery/14.jpg", alt: "Rave electrónica de Día de Muertos, domingo 1 de noviembre" },
  ],
};

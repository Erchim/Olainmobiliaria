const WHATSAPP_NUMBER = "529671922636";

const translations = {
  es: {
    "brand.sub": "Compra y venta de propiedades con atención personalizada",
    "nav.about": "Nosotros",
    "nav.process": "Proceso",
    "nav.properties": "Propiedades",
    "nav.testimonials": "Testimonios",
    "nav.contact": "Contacto",
    "nav.faq": "FAQ",
    "trust.card1.title": "Información cuidada",
    "trust.card1.text": "Compartimos detalles sensibles en la etapa correcta del proceso para proteger al cliente y a la operación.",
    "trust.card2.title": "Visitas con contexto",
    "trust.card2.text": "Primero entendemos la intención del prospecto y después avanzamos con visitas y seguimiento más claros.",
    "trust.card3.title": "Atención directa",
    "trust.card3.text": "El sitio funciona como vitrina de confianza y como entrada a una conversación real por WhatsApp.",
    "hero.eyebrow": "Presentación profesional y atención directa",
    "hero.title": "Propiedades seleccionadas con una experiencia clara y confiable.",
    "hero.text": "OLA Grupo Inmobiliario funciona como una vitrina seria y elegante para presentar oportunidades, generar confianza y acompañar a cada prospecto con un proceso más ordenado y seguro.",
    "hero.primary": "Escribir por WhatsApp",
    "hero.secondary": "Ver propiedades",
    "hero.stats.properties": "Propiedades destacadas",
    "hero.stats.process": "Proceso más claro",
    "hero.stats.contact": "Canal principal de atención",
    "hero.note": "Versión inicial del sitio preparada para crecer con más propiedades, testimonios y contenido institucional sin romper la estructura del proyecto.",
    "hero.premiumNote": "Una vitrina más clara, discreta y enfocada en prospectos que valoran contexto, confianza y seguimiento serio.",
    "about.eyebrow": "Nosotros",
    "about.title": "Una inmobiliaria en construcción, presentada con orden y seriedad.",
    "about.lead": "OLA Grupo Inmobiliario está construyendo una presencia profesional para presentar oportunidades reales, filtrar mejor a los prospectos y acompañar el proceso con más claridad desde el primer contacto.",
    "about.box1.title": "Por qué elegir OLA",
    "about.box1.text": "Priorizamos una comunicación directa, una presentación cuidada y un proceso de atención más ordenado. La información sensible se comparte en la etapa correcta para proteger tanto al cliente como a la operación.",
    "about.box2.title": "Proceso de trabajo",
    "about.box2.text": "Primero calificamos la intención del prospecto, después coordinamos la visita y más adelante compartimos la documentación relevante dentro del proceso. Esto ayuda a mantener claridad, seguridad y seriedad.",
    "approach.eyebrow": "Enfoque",
    "approach.title": "Una forma de trabajar más seria, clara y útil para ambas partes.",
    "approach.lead": "No buscamos saturar al prospecto con datos desde el primer clic. Buscamos ordenar la conversación, entender la intención y avanzar con contexto real.",
    "approach.card1.title": "Filtrado inicial",
    "approach.card1.text": "El sitio ayuda a presentar mejor los inmuebles y a iniciar la conversación con personas que realmente tienen interés.",
    "approach.card2.title": "Información en etapas",
    "approach.card2.text": "La ubicación exacta, la documentación completa y ciertos detalles sensibles se comparten más adelante dentro del proceso.",
    "approach.card3.title": "Seguimiento real",
    "approach.card3.text": "La meta final no es solo mostrar una ficha bonita, sino convertir la visita al sitio en una conversación útil por WhatsApp.",
    "process.eyebrow": "Proceso de atención",
    "process.title": "Un proceso simple, claro y profesional.",
    "process.lead": "La meta no es saturar al cliente con información, sino acompañarlo paso a paso con orden, contexto y confianza.",
    "properties.eyebrow": "Propiedades destacadas",
    "properties.title": "Una base limpia para mostrar oportunidades reales.",
    "properties.lead": "En esta versión del sitio ya mostramos varias propiedades y dejamos la estructura lista para agregar más terrenos o casas en el futuro.",
    "properties.note": "La ubicación exacta, el precio final y la documentación completa se comparten dentro del proceso de atención con prospectos calificados.",
    "properties.footerNote": "Si no ves todavía el tipo de propiedad que buscas, el inventario puede ampliarse conforme avance la operación comercial.",
    "landFocus.card1.title": "Terrenos con mejor lectura",
    "landFocus.card1.text": "La vitrina prioriza propiedades que se entienden rápido: ubicación general, servicios confirmados y sensación del entorno.",
    "landFocus.card2.title": "Menos ruido, más contexto",
    "landFocus.card2.text": "La intención no es subir toda la información posible desde el inicio, sino ordenar mejor el interés real del prospecto.",
    "landFocus.card3.title": "Compra con acompañamiento",
    "landFocus.card3.text": "El sitio está pensado como puerta de entrada a una conversación útil, no como sustituto del proceso de atención.",
    "properties.photos": "fotos",
    "gallery.hint": "Toca o haz clic en una foto para verla en tamaño completo.",
    "testimonials.eyebrow": "Confianza",
    "testimonials.title": "Espacio listo para testimonios reales.",
    "testimonials.lead": "Por ahora este bloque funciona como placeholder elegante. Más adelante se puede reemplazar con reseñas reales, casos de compra o experiencias verificadas.",
    "contact.eyebrow": "Contacto",
    "contact.title": "Hablemos por WhatsApp.",
    "contact.lead": "Si una propiedad te interesa, el primer paso es escribirnos. Así podemos entender mejor tu intención, resolver dudas iniciales y orientarte en el siguiente paso.",
    "contact.primary": "Enviar mensaje",
    "contact.secondary": "Instagram",
    "contact.cardTitle": "Información de contacto",
    "contact.helper": "Atención inicial en español e inglés. Visitas con cita previa.",
    "contact.quickGeneral": "Consulta general",
    "contact.quickInvestment": "Inversión",
    "contact.quickVisit": "Agendar visita",
    "contact.signal1": "Atención bilingüe",
    "contact.signal2": "Visitas con cita",
    "contact.signal3": "Proceso guiado",
    "faq.eyebrow": "FAQ",
    "faq.title": "Preguntas frecuentes antes del primer contacto.",
    "faq.lead": "Estas respuestas ayudan a que el prospecto llegue con mejor contexto, sin exponer información sensible antes de tiempo.",
    "faq.card1.title": "¿Comparten ubicación exacta desde el inicio?",
    "faq.card1.text": "No siempre. Primero buscamos entender la intención del prospecto y después avanzamos con ubicación, visita y contexto completo según el caso.",
    "faq.card2.title": "¿Se puede agendar una visita?",
    "faq.card2.text": "Sí. Las visitas se coordinan con cita previa, una vez que existe interés real y una conversación inicial más clara.",
    "faq.card3.title": "¿Comparten documentos completos en el sitio?",
    "faq.card3.text": "No. La documentación completa se comparte en etapas posteriores del proceso, para mantener orden, seguridad y seriedad en la operación.",
    "faq.card4.title": "¿Atienden en más de un idioma?",
    "faq.card4.text": "Sí. El sitio está preparado en español e inglés para facilitar el primer contacto con compradores locales e internacionales.",
    "contact.item1": "WhatsApp:",
    "contact.item2": "Atención inicial personalizada.",
    "contact.item3": "Información completa en etapas posteriores del proceso.",
    "contact.item4": "Ubicaciones exactas y documentación solo para prospectos calificados.",
    "footer.text": "Sitio de presentación inicial de OLA Grupo Inmobiliario. Diseñado para confianza, claridad y crecimiento gradual.",
    "footer.note1": "Información sujeta a disponibilidad y cambios sin previo aviso.",
    "footer.note2": "Las visitas se coordinan con cita previa.",
    "footer.note3": "La documentación completa se comparte dentro del proceso de atención según el perfil del prospecto.",
    "gallery.eyebrow": "Galería",
    "floating.whatsapp": "WhatsApp"
  },
  en: {
    "brand.sub": "Property sales and acquisition with personalized attention",
    "nav.about": "About",
    "nav.process": "Process",
    "nav.properties": "Properties",
    "nav.testimonials": "Testimonials",
    "nav.contact": "Contact",
    "nav.faq": "FAQ",
    "trust.card1.title": "Protected information",
    "trust.card1.text": "Sensitive details are shared at the right stage of the process to protect both the client and the operation.",
    "trust.card2.title": "Visits with context",
    "trust.card2.text": "We first understand the prospect’s intent and then move forward with clearer visits and follow-up.",
    "trust.card3.title": "Direct attention",
    "trust.card3.text": "The website works as a trust showcase and as the entry point to a real WhatsApp conversation.",
    "hero.eyebrow": "Professional presentation and direct attention",
    "hero.title": "Selected properties with a clear and trustworthy experience.",
    "hero.text": "OLA Grupo Inmobiliario is designed as a serious and elegant showcase for opportunities, helping build trust and guiding each prospect through a more organized and secure process.",
    "hero.primary": "Message on WhatsApp",
    "hero.secondary": "View properties",
    "hero.stats.properties": "Featured properties",
    "hero.stats.process": "Clearer process",
    "hero.stats.contact": "Main contact channel",
    "hero.note": "Initial website version prepared to grow with more properties, testimonials and institutional content without breaking the project structure.",
    "hero.premiumNote": "A clearer, more discreet showcase focused on prospects who value context, trust and serious follow-up.",
    "about.eyebrow": "About",
    "about.title": "A real estate brand in the making, presented with structure and seriousness.",
    "about.lead": "OLA Grupo Inmobiliario is building a professional presence to present real opportunities, filter prospects better and guide the process with more clarity from the first contact.",
    "about.box1.title": "Why choose OLA",
    "about.box1.text": "We prioritize direct communication, careful presentation and a more structured service process. Sensitive information is shared at the right stage to protect both the client and the operation.",
    "about.box2.title": "How the process works",
    "about.box2.text": "We first confirm the prospect’s intent, then coordinate the visit, and later share relevant documentation within the process. This helps maintain clarity, security and professionalism.",
    "approach.eyebrow": "Approach",
    "approach.title": "A more serious, clear and useful way of working for both sides.",
    "approach.lead": "We do not try to overwhelm the prospect with every detail from the first click. We try to structure the conversation, understand intent and move forward with real context.",
    "approach.card1.title": "Initial filtering",
    "approach.card1.text": "The website helps present the properties better and start conversations with people who are genuinely interested.",
    "approach.card2.title": "Information by stages",
    "approach.card2.text": "Exact location, full documentation and certain sensitive details are shared later as part of the process.",
    "approach.card3.title": "Real follow-up",
    "approach.card3.text": "The final goal is not just to show a nice listing, but to turn the website visit into a useful WhatsApp conversation.",
    "process.eyebrow": "Service process",
    "process.title": "A simple, clear and professional process.",
    "process.lead": "The goal is not to overwhelm the client with information, but to guide them step by step with order, context and trust.",
    "properties.eyebrow": "Featured properties",
    "properties.title": "A clean base for presenting real opportunities.",
    "properties.lead": "This website version already shows several properties and keeps the structure ready to add more land or homes in the future.",
    "properties.note": "Exact location, final price and full documentation are shared during the service process with qualified prospects.",
    "properties.footerNote": "If you do not yet see the type of property you are looking for, the inventory can grow as the commercial operation expands.",
    "landFocus.card1.title": "Land with stronger readability",
    "landFocus.card1.text": "The showcase prioritizes properties that are easy to understand: general location, confirmed services and a clear sense of the surroundings.",
    "landFocus.card2.title": "Less noise, more context",
    "landFocus.card2.text": "The intention is not to upload every possible detail from the beginning, but to better organize genuine prospect interest.",
    "landFocus.card3.title": "Guided purchase path",
    "landFocus.card3.text": "The website is designed as the entry point to a useful conversation, not as a replacement for the service process.",
    "properties.photos": "photos",
    "gallery.hint": "Tap or click on a photo to view it full size.",
    "testimonials.eyebrow": "Trust",
    "testimonials.title": "A section ready for real testimonials.",
    "testimonials.lead": "For now this block works as an elegant placeholder. Later it can be replaced with real reviews, purchase stories or verified client experiences.",
    "contact.eyebrow": "Contact",
    "contact.title": "Let’s talk on WhatsApp.",
    "contact.lead": "If a property interests you, the first step is to message us. That helps us understand your intent, answer initial questions and guide you to the next stage.",
    "contact.primary": "Send message",
    "contact.secondary": "Instagram",
    "contact.cardTitle": "Contact information",
    "contact.helper": "Initial attention in Spanish and English. Visits by appointment.",
    "contact.quickGeneral": "General inquiry",
    "contact.quickInvestment": "Investment",
    "contact.quickVisit": "Schedule a visit",
    "contact.signal1": "Bilingual attention",
    "contact.signal2": "Visits by appointment",
    "contact.signal3": "Guided process",
    "faq.eyebrow": "FAQ",
    "faq.title": "Frequently asked questions before the first contact.",
    "faq.lead": "These answers help the prospect arrive with better context, without exposing sensitive information too early.",
    "faq.card1.title": "Do you share the exact location from the start?",
    "faq.card1.text": "Not always. We first try to understand the prospect’s intent and then move forward with location, visit and full context depending on the case.",
    "faq.card2.title": "Can I schedule a visit?",
    "faq.card2.text": "Yes. Visits are scheduled by appointment once there is real interest and a clearer initial conversation.",
    "faq.card3.title": "Do you share full documents on the website?",
    "faq.card3.text": "No. Full documentation is shared in later stages of the process to keep the operation organized, secure and serious.",
    "faq.card4.title": "Do you assist in more than one language?",
    "faq.card4.text": "Yes. The website is prepared in Spanish and English to make first contact easier for local and international buyers.",
    "contact.item1": "WhatsApp:",
    "contact.item2": "Personalized first contact.",
    "contact.item3": "Full information is shared in later stages of the process.",
    "contact.item4": "Exact locations and documentation are only shared with qualified prospects.",
    "footer.text": "Initial presentation website for OLA Grupo Inmobiliario. Designed for trust, clarity and gradual growth.",
    "footer.note1": "Information subject to availability and changes without prior notice.",
    "footer.note2": "Visits are scheduled by appointment.",
    "footer.note3": "Complete documentation is shared during the service process according to the prospect profile.",
    "gallery.eyebrow": "Gallery",
    "floating.whatsapp": "WhatsApp"
  }
};

const processSteps = {
  es: [
    { title: "Primer contacto", text: "El prospecto nos escribe por WhatsApp y plantea su interés inicial de forma directa." },
    { title: "Validación de intención", text: "Aclaremos zona, tipo de propiedad, tiempos y seriedad del interés antes de avanzar." },
    { title: "Visita o seguimiento", text: "Si el perfil encaja, coordinamos la visita o compartimos más contexto del inmueble." },
    { title: "Siguiente etapa", text: "La ubicación exacta y documentos relevantes se muestran en el momento adecuado del proceso." }
  ],
  en: [
    { title: "First contact", text: "The prospect reaches out on WhatsApp and shares their initial interest directly." },
    { title: "Intent validation", text: "We clarify area, property type, timing and level of seriousness before moving forward." },
    { title: "Visit or follow-up", text: "If the profile fits, we coordinate a visit or share more relevant property context." },
    { title: "Next stage", text: "Exact location and relevant documents are shown at the appropriate stage of the process." }
  ]
};

const testimonials = {
  es: [
    {
      quote: "Este espacio queda preparado para testimonios verificados, casos reales de compra y referencias de clientes conforme la operación siga creciendo.",
      author: "Sección en preparación"
    },
    {
      quote: "Mientras tanto, el sitio prioriza claridad, atención directa por WhatsApp y un proceso más ordenado para filtrar mejor el interés real.",
      author: "Enfoque actual"
    },
    {
      quote: "La meta es que esta vitrina se llene con evidencia real de servicio y acompañamiento, no con frases genéricas que no aportan confianza.",
      author: "Próximo paso"
    }
  ],
  en: [
    {
      quote: "This space is prepared for verified testimonials, real purchase cases and client references as the operation continues to grow.",
      author: "Section in preparation"
    },
    {
      quote: "In the meantime, the website prioritizes clarity, direct WhatsApp attention and a more organized process to filter genuine interest.",
      author: "Current focus"
    },
    {
      quote: "The goal is for this showcase to be filled with real proof of service and guidance, not with generic phrases that do not build trust.",
      author: "Next step"
    }
  ]
};

let currentLang = "es";
let currentGalleryProperty = null;
let currentLightboxIndex = 0;
let touchStartX = 0;
let touchEndX = 0;

const savedLanguage = localStorage.getItem("ola_lang");
if (savedLanguage === "es" || savedLanguage === "en") currentLang = savedLanguage;

const statusLabels = {
  es: { available: "Disponible", reserved: "En proceso", sold: "Vendido" },
  en: { available: "Available", reserved: "In progress", sold: "Sold" }
};

function makeWhatsAppLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
function t(key) { return translations[currentLang][key] || key; }
function applyTranslations() {
  document.documentElement.lang = currentLang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    el.textContent = t(key);
  });
}

function renderContactQuick() {
  const container = document.getElementById("contact-quick");
  if (!container) return;

  const intents = currentLang === "es"
    ? [
        { label: t("contact.quickGeneral"), message: "Hola, vi su sitio y me gustaría recibir información general. [Fuente: contacto rápido]" },
        { label: t("contact.quickInvestment"), message: "Hola, vi su sitio y me interesan opciones para inversión. [Fuente: contacto rápido]" },
        { label: t("contact.quickVisit"), message: "Hola, vi su sitio y me gustaría agendar una visita. [Fuente: contacto rápido]" }
      ]
    : [
        { label: t("contact.quickGeneral"), message: "Hi, I saw your website and I would like general information. [Source: quick contact]" },
        { label: t("contact.quickInvestment"), message: "Hi, I saw your website and I am interested in investment options. [Source: quick contact]" },
        { label: t("contact.quickVisit"), message: "Hi, I saw your website and I would like to schedule a visit. [Source: quick contact]" }
      ];

  container.innerHTML = intents
    .map((intent) => `<a class="contact-quick-btn" target="_blank" rel="noopener noreferrer" href="${makeWhatsAppLink(intent.message)}">${intent.label}</a>`)
    .join("");
}


function renderServiceSignals() {
  const container = document.getElementById("service-signals");
  if (!container) return;
  const labels = [t("contact.signal1"), t("contact.signal2"), t("contact.signal3")];
  container.innerHTML = labels
    .map((label) => `<div class="service-signal">${label}</div>`)
    .join("");
}

function renderProcess() {
  const stepsContainer = document.getElementById("steps");
  stepsContainer.innerHTML = "";
  processSteps[currentLang].forEach((step, index) => {
    const article = document.createElement("article");
    article.className = "step";
    article.innerHTML = `
      <div class="step-number">${index + 1}</div>
      <h3>${step.title}</h3>
      <div class="step-text">${step.text}</div>
    `;
    stepsContainer.appendChild(article);
  });
}
function renderProperties() {
  const grid = document.getElementById("properties-grid");
  grid.innerHTML = "";
  propertyData.forEach((property) => {
    const title = currentLang === "es" ? property.titleEs : property.titleEn;
    const description = currentLang === "es" ? property.shortEs : property.shortEn;
    const zone = currentLang === "es" ? property.zoneEs : property.zoneEn;
    const badge = currentLang === "es" ? property.badgeEs : property.badgeEn;
    const features = currentLang === "es" ? property.featuresEs : property.featuresEn;
    const services = property.services.join(" • ");
    const message = currentLang === "es" ? property.whatsappEs : property.whatsappEn;
    const article = document.createElement("article");
    article.className = "property-card";
    article.id = `property-${property.id}`;
    article.innerHTML = `
      <div class="property-image">
        <a class="property-image-link open-gallery" data-id="${property.id}" aria-label="${currentLang === "es" ? "Abrir galería" : "Open gallery"}">
          <img loading="lazy" src="${property.image}" alt="${title}" />
        </a>
        <div class="property-badge">${badge}</div>
        <div class="property-status">${statusLabels[currentLang][property.status] || (currentLang === "es" ? "Disponible" : "Available")}</div>
        <div class="photo-count">${property.gallery.length} ${t("properties.photos")}</div>
      </div>
      <div class="property-body">
        <div class="property-top">
          <div>
            <div class="property-title">${title}</div>
            <div class="property-subtitle">${zone}</div>
          </div>
        </div>
        <div class="property-meta">
          <span class="meta-pill">${property.area}</span>
          <span class="meta-pill">${services}</span>
        </div>
        <div class="muted">${description}</div>
        <div class="features">
          ${features.map((feature) => `<span class="feature-pill">${feature}</span>`).join("")}
        </div>
        <div class="property-actions">
          <a class="button" target="_blank" rel="noopener noreferrer" href="${makeWhatsAppLink(message + (currentLang === "es" ? " [Fuente: ficha del sitio]" : " [Source: website property card]"))}">${currentLang === "es" ? "Solicitar información" : "Request information"}</a>
          <button class="button-secondary open-gallery" data-id="${property.id}">${currentLang === "es" ? "Ver fotos" : "View gallery"}</button>
        </div>
      </div>
    `;
    grid.appendChild(article);
  });
  bindGalleryButtons();
}

function renderPropertyChips() {
  const chips = document.getElementById("property-chips");
  if (!chips) return;
  chips.innerHTML = "";
  propertyData.forEach((property) => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "property-chip";
    chip.textContent = currentLang === "es" ? property.titleEs : property.titleEn;
    chip.addEventListener("click", () => {
      const target = document.getElementById(`property-${property.id}`);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    chips.appendChild(chip);
  });
  const counter = document.getElementById("stat-properties-count");
  if (counter) counter.textContent = String(propertyData.length);
}

function renderTestimonials() {
  const grid = document.getElementById("testimonials-grid");
  grid.innerHTML = "";
  testimonials[currentLang].forEach((item) => {
    const article = document.createElement("article");
    article.className = "testimonial-card";
    article.innerHTML = `
      <div class="eyebrow">${currentLang === "es" ? "Confianza en construcción" : "Trust in progress"}</div>
      <div class="testimonial-text">${item.quote}</div>
      <div class="testimonial-author subtle">${item.author}</div>
    `;
    grid.appendChild(article);
  });
}
function updateHero() {
  const firstProperty = propertyData[0];
  document.getElementById("hero-image").src = firstProperty.image;
  document.getElementById("hero-image").alt = currentLang === "es" ? firstProperty.titleEs : firstProperty.titleEn;
  document.getElementById("hero-overlay-title").textContent = currentLang === "es" ? firstProperty.titleEs : firstProperty.titleEn;
  document.getElementById("hero-overlay-text").textContent = currentLang === "es" ? firstProperty.shortEs : firstProperty.shortEn;
  document.getElementById("hero-whatsapp").href = makeWhatsAppLink(currentLang === "es" ? "Hola, vi el sitio de OLA Grupo Inmobiliario y quiero más información." : "Hi, I saw the OLA Grupo Inmobiliario website and I would like more information.");
  document.getElementById("contact-whatsapp").href = makeWhatsAppLink(currentLang === "es" ? "Hola, quiero recibir información sobre sus propiedades." : "Hi, I would like to receive information about your properties.");
  const floating = document.getElementById("floating-whatsapp");
  if (floating) {
    floating.href = makeWhatsAppLink(currentLang === "es" ? "Hola, vi su sitio web y me gustaría recibir información sobre sus propiedades. [Fuente: botón flotante]" : "Hi, I saw your website and I would like information about your properties. [Source: floating button]");
    floating.textContent = t("floating.whatsapp");
  }
}
function bindLanguageButtons() {
  document.querySelectorAll(".lang-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const lang = button.dataset.lang;
      if (lang === currentLang) return;
      currentLang = lang;
      localStorage.setItem("ola_lang", currentLang);
      document.querySelectorAll(".lang-btn").forEach((btn) => btn.classList.toggle("active", btn.dataset.lang === currentLang));
      renderAll();
    });
  });
}
function openGallery(propertyId) {
  const property = propertyData.find((item) => item.id === propertyId);
  if (!property) return;
  currentGalleryProperty = property;
  document.getElementById("gallery-title").textContent = currentLang === "es" ? property.titleEs : property.titleEn;
  document.getElementById("gallery-subtitle").textContent = currentLang === "es" ? property.zoneEs : property.zoneEn;
  const galleryGrid = document.getElementById("gallery-grid");
  galleryGrid.innerHTML = property.gallery.map((image, index) => `<img loading="lazy" class="gallery-thumb" data-index="${index}" src="${image}" alt="${(currentLang === "es" ? property.titleEs : property.titleEn) + " " + (index + 1)}" />`).join("");
  const modal = document.getElementById("gallery-modal");
  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  bindGalleryThumbs();
}
function closeGallery() {
  const modal = document.getElementById("gallery-modal");
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  if (!document.getElementById("lightbox-modal").classList.contains("active")) document.body.classList.remove("modal-open");
}
function openLightbox(index) {
  if (!currentGalleryProperty) return;
  currentLightboxIndex = index;
  const images = currentGalleryProperty.gallery;
  const title = currentLang === "es" ? currentGalleryProperty.titleEs : currentGalleryProperty.titleEn;
  document.getElementById("lightbox-image").src = images[currentLightboxIndex];
  document.getElementById("lightbox-image").alt = `${title} ${currentLightboxIndex + 1}`;
  document.getElementById("lightbox-caption").textContent = `${title} — ${currentLightboxIndex + 1}/${images.length}`;
  document.getElementById("lightbox-prev").disabled = currentLightboxIndex === 0;
  document.getElementById("lightbox-next").disabled = currentLightboxIndex === images.length - 1;
  const modal = document.getElementById("lightbox-modal");
  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}
function closeLightbox() {
  const modal = document.getElementById("lightbox-modal");
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  if (!document.getElementById("gallery-modal").classList.contains("active")) document.body.classList.remove("modal-open");
}
function showPrevImage() { if (currentGalleryProperty && currentLightboxIndex > 0) openLightbox(currentLightboxIndex - 1); }
function showNextImage() { if (currentGalleryProperty && currentLightboxIndex < currentGalleryProperty.gallery.length - 1) openLightbox(currentLightboxIndex + 1); }
function bindGalleryButtons() {
  document.querySelectorAll(".open-gallery").forEach((button) => {
    button.addEventListener("click", () => openGallery(button.dataset.id));
  });
}
function bindGalleryThumbs() {
  document.querySelectorAll(".gallery-thumb").forEach((img) => {
    img.addEventListener("click", () => openLightbox(Number(img.dataset.index)));
  });
}

function syncLanguageButtons() {
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === currentLang);
  });
}

function bindBackToTop() {
  const btn = document.getElementById("back-to-top");
  if (!btn) return;

  const toggleVisibility = () => {
    btn.classList.toggle("visible", window.scrollY > 500);
  };

  window.addEventListener("scroll", toggleVisibility, { passive: true });
  toggleVisibility();

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function bindModal() {
  document.getElementById("gallery-close").addEventListener("click", closeGallery);
  document.getElementById("gallery-modal").addEventListener("click", (event) => { if (event.target.id === "gallery-modal") closeGallery(); });
  document.getElementById("lightbox-close").addEventListener("click", closeLightbox);
  document.getElementById("lightbox-prev").addEventListener("click", showPrevImage);
  document.getElementById("lightbox-next").addEventListener("click", showNextImage);
  document.getElementById("lightbox-modal").addEventListener("click", (event) => { if (event.target.id === "lightbox-modal") closeLightbox(); });
  document.addEventListener("keydown", (event) => {
    const lightboxOpen = document.getElementById("lightbox-modal").classList.contains("active");
    const galleryOpen = document.getElementById("gallery-modal").classList.contains("active");
    if (event.key === "Escape") {
      if (lightboxOpen) return closeLightbox();
      if (galleryOpen) return closeGallery();
    }
    if (lightboxOpen && event.key === "ArrowLeft") showPrevImage();
    if (lightboxOpen && event.key === "ArrowRight") showNextImage();
  });
}
function renderAll() {
  applyTranslations();
  renderProcess();
  renderProperties();
  renderPropertyChips();
  renderContactQuick();
  renderServiceSignals();
  renderTestimonials();
  updateHero();
  if (document.getElementById("gallery-modal").classList.contains("active")) {
    closeLightbox();
    closeGallery();
  }
}
bindLanguageButtons();
syncLanguageButtons();
bindBackToTop();
bindModal();
renderAll();

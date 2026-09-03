/* =========================================================================
   FIKA STORE — LÓGICA DEL SITIO
   No es necesario editar este archivo para agregar productos.
   Todo el contenido se edita en js/data.js
   ========================================================================= */

/* --------------------------- Utilidades --------------------------- */

function formatPrice(value) {
  return "$" + value.toLocaleString("es-CO");
}

function waLink(message) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${STORE.whatsappNumber}?text=${encoded}`;
}

function getQueryParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

function categoryName(slug) {
  const cat = CATEGORIES.find(c => c.slug === slug);
  return cat ? cat.name : slug;
}

/* --------------------------- SEO --------------------------- */

const SITE_URL = "https://fikastore.store";


function setMetaContent(selector, content) {
  const element = document.querySelector(selector);

  if (element) {
    element.setAttribute("content", content);
  }
}


function setMetaProperty(property, content) {
  const element = document.querySelector(
    `meta[property="${property}"]`
  );

  if (element) {
    element.setAttribute("content", content);
  }
}


function setCanonical(url) {
  const canonical = document.getElementById("canonical-url");

  if (canonical) {
    canonical.href = url;
  }
}


function setRobots(content) {
  let robots = document.querySelector(
    'meta[name="robots"]'
  );

  if (!robots) {
    robots = document.createElement("meta");
    robots.name = "robots";
    document.head.appendChild(robots);
  }

  robots.setAttribute("content", content);
}


function setProductSEO(product) {

  const productUrl =
    `${SITE_URL}/producto.html?id=${product.id}`;

  const imageUrl =
    `${SITE_URL}/${product.images[0]}`;

  const title =
    `${product.name} | Fika Store Colombia`;

  const description =
    `${product.name} personalizado. ` +
    `${product.description} ` +
    `Precio: ${formatPrice(product.price)}. ` +
    `Envíos a toda Colombia.`;

  document.title = title;

  /*
   * Control de indexación
   */
  if (product.seo === false) {

    setRobots("noindex, nofollow");

  } else {

    setRobots("index, follow");

  }

  /*
   * Meta description
   */
  setMetaContent(
    'meta[name="description"]',
    description
  );

  /*
   * URL canónica
   */
  setCanonical(productUrl);

  /*
   * Open Graph
   */
  setMetaProperty(
    "og:title",
    title
  );

  setMetaProperty(
    "og:description",
    description
  );

  setMetaProperty(
    "og:image",
    imageUrl
  );

  setMetaProperty(
    "og:url",
    productUrl
  );
}


function setCategorySEO(category) {

  const categoryUrl =
    `${SITE_URL}/categoria.html?cat=${category.slug}`;

  const title =
    `${category.name} Personalizados | Fika Store Colombia`;

  const description =
    `Descubre ${category.name.toLowerCase()} ` +
    `personalizados en Fika Store Colombia. ` +
    `Diseños únicos y regalos especiales con ` +
    `envíos a toda Colombia.`;

  document.title = title;

  setRobots("index, follow");

  setMetaContent(
    'meta[name="description"]',
    description
  );

  setCanonical(categoryUrl);

  setMetaProperty(
    "og:title",
    title
  );

  setMetaProperty(
    "og:description",
    description
  );

  setMetaProperty(
    "og:image",
    `${SITE_URL}/${category.image}`
  );

  setMetaProperty(
    "og:url",
    categoryUrl
  );
}

function setProductSchema(product) {

  /*
   * Si el producto no debe aparecer en Google,
   * tampoco agregamos Product Schema.
   */
  if (product.seo === false) {

    const oldSchema =
      document.getElementById("product-schema");

    if (oldSchema) {
      oldSchema.remove();
    }

    return;
  }


  /*
   * Eliminar Schema anterior si existe
   */

  const oldSchema =
    document.getElementById("product-schema");

  if (oldSchema) {
    oldSchema.remove();
  }


  const productUrl =
    `${SITE_URL}/producto.html?id=${product.id}`;


  const imageUrls =
    product.images.map(
      image => `${SITE_URL}/${image}`
    );


  const schema = {

    "@context": "https://schema.org",

    "@type": "Product",

    "name": product.name,

    "image": imageUrls,

    "description": product.description,

    "sku": product.id,

    "brand": {
      "@type": "Brand",
      "name": STORE.name
    },

    "offers": {

      "@type": "Offer",

      "url": productUrl,

      "priceCurrency": "COP",

      "price": product.price,

      "availability":
        "https://schema.org/InStock"
    }
  };


  const script =
    document.createElement("script");

  script.type =
    "application/ld+json";

  script.id =
    "product-schema";

  script.textContent =
    JSON.stringify(schema);

  document.head.appendChild(script);
}



/* --------------------------- Fin de la Sección SEO --------------------------- */

const whatsappIconSVG = `
<svg viewBox="0 0 32 32" width="18" height="18" fill="currentColor" aria-hidden="true">
<path d="M16.02 3C9.4 3 4 8.38 4 15c0 2.34.66 4.53 1.8 6.4L4 29l7.78-1.75A11.9 11.9 0 0 0 16.02 27C22.65 27 28 21.62 28 15S22.65 3 16.02 3Zm0 21.6c-1.97 0-3.85-.55-5.46-1.6l-.39-.24-4.62 1.04 1.04-4.5-.26-.4A9.5 9.5 0 0 1 6.4 15c0-5.3 4.3-9.6 9.62-9.6 5.3 0 9.6 4.3 9.6 9.6 0 5.3-4.3 9.6-9.6 9.6Zm5.28-7.2c-.29-.15-1.7-.84-1.96-.93-.26-.1-.45-.15-.65.14-.19.29-.74.93-.9 1.12-.17.2-.33.22-.62.08-.29-.15-1.2-.44-2.3-1.42-.85-.75-1.42-1.68-1.59-1.97-.17-.29-.02-.44.13-.59.13-.13.29-.34.44-.5.15-.17.19-.29.29-.48.1-.2.05-.37-.02-.52-.08-.15-.65-1.58-.9-2.16-.24-.57-.48-.5-.65-.5-.17-.01-.36-.01-.55-.01-.19 0-.5.07-.76.36-.26.29-1 1-1 2.42 0 1.43 1.03 2.82 1.17 3.02.15.19 2.03 3.1 4.93 4.35.69.3 1.22.48 1.64.61.69.22 1.32.19 1.81.11.55-.08 1.7-.7 1.94-1.37.24-.68.24-1.26.17-1.38-.07-.12-.26-.19-.55-.34Z"/>
</svg>`;

const searchIconSVG = `
<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
<circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
</svg>`;

const menuIconSVG = `
<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
</svg>`;

const cartIconSVG = `
<svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
<path d="M6 6h15l-1.5 9h-12z"/><path d="M6 6 5 2H2"/><circle cx="9.5" cy="20" r="1.5"/><circle cx="17.5" cy="20" r="1.5"/>
</svg>`;

const truckIconSVG = `
<svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
<rect x="1" y="6" width="14" height="11" rx="1.5"/><path d="M15 10h4l3 3v4h-7z"/><circle cx="6" cy="19.5" r="1.8"/><circle cx="17.5" cy="19.5" r="1.8"/>
</svg>`;

const starIconSVG = (filled) => `
<svg viewBox="0 0 24 24" width="16" height="16" fill="${filled ? '#B4502A' : 'none'}" stroke="#B4502A" stroke-width="1.5" aria-hidden="true">
<polygon points="12 2 15.09 8.63 22 9.24 16.5 14.14 18.18 21 12 17.27 5.82 21 7.5 14.14 2 9.24 8.91 8.63"/>
</svg>`;

const instagramIconSVG = `
<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/>
</svg>`;

const tiktokIconSVG = `
<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
<path d="M16.5 3c.3 2.1 1.6 3.6 3.9 3.8v2.6c-1.4.1-2.7-.3-3.9-1.1v6.4c0 3.3-2.4 5.6-5.5 5.6-3 0-5.5-2.3-5.5-5.5 0-3.1 2.5-5.5 5.5-5.5.4 0 .8 0 1.1.1v2.7c-.3-.1-.7-.2-1.1-.2-1.6 0-2.9 1.2-2.9 2.9 0 1.6 1.3 2.9 2.9 2.9 1.7 0 3-1.3 3-3.1V3h2.5Z"/>
</svg>`;

/* --------------------------- Header --------------------------- */
/* mode: "home" | "inner"  (inner = category/product/carrito pages, shows hamburger for sidebar) */
function renderHeader(mode = "home") {
  const el = document.getElementById("site-header");
  if (!el) return;

  el.innerHTML = `
    <div class="header-inner">
      <div class="header-left">
        ${mode === "inner" ? `<button class="icon-btn hamburger-btn" id="hamburger-btn" aria-label="Abrir menú">${menuIconSVG}</button>` : ""}
        <a href="index.html" class="brand">
          <img src="${STORE.logo}" alt="${STORE.name} logo" class="brand-logo" />
          <span class="brand-name">${STORE.name}</span>
        </a>
      </div>
      <div class="header-shipping">${STORE.shippingText}</div>
      <div class="header-right">
        <button class="icon-btn" id="search-toggle-btn" aria-label="Buscar">${searchIconSVG}</button>
        <a class="icon-btn cart-icon-btn" href="carrito.html" aria-label="Carrito de compras">
          ${cartIconSVG}
          <span class="cart-badge" id="cart-badge">0</span>
        </a>
        <a class="icon-btn whatsapp-header-btn" href="${waLink('Hola, quiero más información sobre sus productos 🙂')}" target="_blank" rel="noopener" aria-label="WhatsApp">${whatsappIconSVG}</a>
      </div>
    </div>
    <div class="header-search-bar" id="header-search-bar">
      <input type="text" id="search-input" placeholder="Buscar productos..." autocomplete="off" />
    </div>
  `;

  const toggleBtn = document.getElementById("search-toggle-btn");
  const searchBar = document.getElementById("header-search-bar");
  toggleBtn.addEventListener("click", () => {
    searchBar.classList.toggle("open");
    if (searchBar.classList.contains("open")) {
      document.getElementById("search-input").focus();
    }
  });

  const searchInput = document.getElementById("search-input");
  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && searchInput.value.trim()) {
      window.location.href = `buscar.html?q=${encodeURIComponent(searchInput.value.trim())}`;
    }
  });

  updateCartBadge();
}

/* --------------------------- Sidebar (desktop) + Mobile menu --------------------------- */
function renderSidebar(activeSlug = null) {
  const desktopEl = document.getElementById("sidebar-nav");
  const mobileEl = document.getElementById("mobile-nav-panel");

  const linksHTML = `
    <li><a href="index.html" class="${!activeSlug ? "active" : ""}">Inicio</a></li>
    ${CATEGORIES.map(cat => `
      <li><a href="categoria.html?cat=${cat.slug}" class="${activeSlug === cat.slug ? "active" : ""}">${cat.name}</a></li>
    `).join("")}
    <li class="sidebar-divider"></li>
    <li><a href="carrito.html">Carrito de compras</a></li>
  `;

  if (desktopEl) {
    desktopEl.innerHTML = `<ul>${linksHTML}</ul>`;
  }

  if (mobileEl) {
    mobileEl.innerHTML = `
      <div class="mobile-nav-header">
        <span class="brand-name">${STORE.name}</span>
        <button class="icon-btn" id="mobile-nav-close" aria-label="Cerrar menú">&times;</button>
      </div>
      <ul>${linksHTML}</ul>
    `;

    document.getElementById("mobile-nav-close").addEventListener("click", closeMobileNav);
  }

  const hamburgerBtn = document.getElementById("hamburger-btn");
  if (hamburgerBtn) {
    hamburgerBtn.addEventListener("click", openMobileNav);
  }
}

function openMobileNav() {
  document.getElementById("mobile-nav-panel").classList.add("open");
  document.getElementById("mobile-nav-overlay").classList.add("open");
}
function closeMobileNav() {
  document.getElementById("mobile-nav-panel").classList.remove("open");
  document.getElementById("mobile-nav-overlay").classList.remove("open");
}

function renderMobileNavOverlay() {
  const overlayContainer = document.getElementById("mobile-nav-overlay-container");
  if (!overlayContainer) return;
  overlayContainer.innerHTML = `<div class="mobile-nav-overlay" id="mobile-nav-overlay"></div>`;
  document.getElementById("mobile-nav-overlay").addEventListener("click", closeMobileNav);
}



/* --------------------------- Footer --------------------------- */
function renderFooter() {
  const el = document.getElementById("site-footer");
  if (!el) return;
  el.innerHTML = `
    <div class="footer-inner">
      <div class="footer-col">
        <h4>${STORE.name}</h4>
        <p>Cuadros y regalos personalizados, hechos con dedicación para acompañar tus momentos más especiales.</p>
      </div>
      <div class="footer-col">
        <h4>Contáctanos</h4>
        <p>¿Tienes dudas o quieres hacer un pedido personalizado? Escríbenos directamente por WhatsApp.</p>
        <a class="footer-whatsapp" href="${waLink('Hola, quiero más información sobre sus productos 🙂')}" target="_blank" rel="noopener">
          ${whatsappIconSVG} <span>+57 315 915 9677</span>
        </a>
      </div>
      <div class="footer-col">
        <h4>Síguenos</h4>
        <a class="footer-social" href="https://instagram.com/${STORE.instagram}" target="_blank" rel="noopener">${instagramIconSVG} <span>@${STORE.instagram}</span></a>
        <a class="footer-social" href="https://tiktok.com/@${STORE.tiktok}" target="_blank" rel="noopener">${tiktokIconSVG} <span>@${STORE.tiktok}</span></a>
      </div>
    </div>
    <div class="footer-bottom">© ${new Date().getFullYear()} ${STORE.name}. Todos los derechos reservados.</div>
  `;
}

/* --------------------------- Página de inicio --------------------------- */
function renderHome() {
  // Banner
  const bannerEl = document.getElementById("promo-banner");
  if (bannerEl) {
    bannerEl.style.backgroundImage = `url('${STORE.bannerImage}')`;
    bannerEl.innerHTML = `
      <div class="banner-text">
        <h2>${STORE.bannerTitle}</h2>
        <p>${STORE.bannerSubtitle}</p>
      </div>
    `;
  }

  // Contraentrega / envíos
  const codEl = document.getElementById("cod-section");
  if (codEl) {
    codEl.innerHTML = `
      <div class="cod-icon">${truckIconSVG}</div>
      <div class="cod-text">
        <h3>${STORE.codTitle}</h3>
        <p>${STORE.codText}</p>
      </div>
    `;
  }

  // Bestsellers
  const bestsellersEl = document.getElementById("bestsellers-row");
  if (bestsellersEl) {
    const bestsellers = PRODUCTS.filter(p => p.bestseller);
    bestsellersEl.innerHTML = bestsellers.map(p => productCardHTML(p)).join("");
    initProductCardCartButtons();
  }

  // Categories grid
  const catGridEl = document.getElementById("categories-grid");
  if (catGridEl) {
    catGridEl.innerHTML = CATEGORIES.map(cat => `
      <a href="categoria.html?cat=${cat.slug}" class="category-card" style="background-image: url('${cat.image}')">
        <div class="category-card-overlay">
          <h3>${cat.name}</h3>
        </div>
      </a>
    `).join("");
  }

  // Payment methods
  const paymentsEl = document.getElementById("payment-methods-row");
  if (paymentsEl) {
    paymentsEl.innerHTML = PAYMENT_METHODS.map(m => `
      <div class="payment-logo-box">
        <img src="${m.logo}" alt="${m.name}" />
      </div>
    `).join("");
  }

  // Reviews
  const reviewsEl = document.getElementById("reviews-grid");
  if (reviewsEl) {
    reviewsEl.innerHTML = REVIEWS.map(r => `
      <div class="review-card">
        <div class="review-header">
          <img src="${r.photo}" alt="${r.name}" class="review-photo" />
          <div>
            <div class="review-name">${r.name}</div>
            <div class="review-stars">${[1,2,3,4,5].map(n => starIconSVG(n <= r.stars)).join("")}</div>
          </div>
        </div>
        <p class="review-comment">${r.comment}</p>
      </div>
    `).join("");
  }
}

/* --------------------------- Tarjeta de producto (reutilizable) --------------------------- */
function productCardHTML(p) {
  const msg = `Hola, quiero pedir el producto: ${p.name} (${formatPrice(p.price)})`;
  const mainImage = p.images ? p.images[0] : p.image;
  return `
    <div class="product-card">
      <a href="producto.html?id=${p.id}" class="product-card-image">
        <img
          src="${mainImage}"
          alt="${p.name} personalizado — ${STORE.name}"
          loading="lazy"
        />
      </a>
      <div class="product-card-body">
        <a href="producto.html?id=${p.id}" class="product-card-name">${p.name}</a>
        <div class="product-card-price">${formatPrice(p.price)}</div>
        
        <div class="product-card-actions">

          <a class="btn-pedir" href="${waLink(msg)}" target="_blank" rel="noopener">
            ${whatsappIconSVG} <span>Pedir</span>
          </a>

          <button 
            type="button" 
            class="btn-add-cart-card" 
            data-product-id="${p.id}"
            aria-label="Agregar ${p.name} al carrito"
          >
            ${cartIconSVG}
          </button>

        </div>
      </div>
    </div>
  `;
}

function initProductCardCartButtons() {
  document.querySelectorAll(".btn-add-cart-card").forEach(button => {
    button.addEventListener("click", () => {

      const productId = button.dataset.productId;
      const product = PRODUCTS.find(p => p.id == productId);

      if (!product) return;

      addToCart(product, 1);

      button.classList.add("added");

      setTimeout(() => {
        button.classList.remove("added");
      }, 800);
    });
  });
}

/* --------------------------- Página de categoría --------------------------- */

function renderCategoryPage() {
  const slug = getQueryParam("cat");

  const titleEl = document.getElementById("category-title");
  const gridEl = document.getElementById("category-products-grid");
  const emptyEl = document.getElementById("category-empty");

  const category = CATEGORIES.find(
    cat => cat.slug === slug
  );

  if (!category) {
    if (titleEl) {
      titleEl.textContent = "Colección";
    }

    document.title = "Colección | Fika Store Colombia";

    return;
  }

  const items = PRODUCTS.filter(
    p => p.category === slug
  );

  if (titleEl) {
    titleEl.textContent = category.name;
  }

  /* SEO de la categoría */
  setCategorySEO(category, items);

  /* Productos */
  if (gridEl) {

    if (items.length === 0) {

      gridEl.innerHTML = "";

      if (emptyEl) {
        emptyEl.style.display = "block";
      }

    } else {

      if (emptyEl) {
        emptyEl.style.display = "none";
      }

      gridEl.innerHTML = items
        .map(p => productCardHTML(p))
        .join("");

      initProductCardCartButtons();
    }
  }
}

/* --------------------------- Página de producto --------------------------- */
let currentProductForCart = null;
let currentQty = 1;

function renderProductPage() {
  const id = getQueryParam("id");
  const product = PRODUCTS.find(p => p.id === id);
  const container = document.getElementById("product-detail");

  if (!product || !container) {
    if (container) {
      container.innerHTML = `<p class="not-found">No encontramos este producto. <a href="index.html">Volver al inicio</a></p>`;
    }
    return;
  }

  currentProductForCart = product;
  currentQty = 1;

  const images = product.images && product.images.length ? product.images : [product.image];
  const msg = `Hola, quiero pedir el producto: ${product.name} (${formatPrice(product.price)})`;

  setProductSEO(product);

  setProductSchema(product);

  container.innerHTML = `
    <div class="product-detail-gallery">
      <div class="product-gallery-main">
        <img
          src="${images[0]}"
          alt="${product.name} personalizado — ${STORE.name}"
          id="gallery-main-image"
        />
      </div>
      ${images.length > 1 ? `
        <div class="product-gallery-thumbs" id="gallery-thumbs">
          ${images.map((img, i) => `
            <button class="gallery-thumb ${i === 0 ? "active" : ""}" data-img="${img}" aria-label="Ver imagen ${i + 1}">
              <img src="${img}" alt="${product.name} - vista ${i + 1}" />
            </button>
          `).join("")}
        </div>
      ` : ""}
    </div>
    <div class="product-detail-info">
      <p class="product-detail-breadcrumb"><a href="categoria.html?cat=${product.category}">${categoryName(product.category)}</a></p>
      <h1>${product.name}</h1>
      <div class="product-detail-price">${formatPrice(product.price)}</div>
      <p class="product-detail-description">${product.description.replace(/\n/g, "<br>")}</p>

      <div class="qty-selector">
        <span class="qty-label">Cantidad</span>
        <div class="qty-controls">
          <button type="button" id="qty-minus" aria-label="Restar">−</button>
          <span id="qty-value">1</span>
          <button type="button" id="qty-plus" aria-label="Sumar">+</button>
        </div>
      </div>

      <div class="product-detail-actions">
        <a class="btn-pedir btn-pedir-large" href="${waLink(msg)}" target="_blank" rel="noopener">
          ${whatsappIconSVG} <span>Pedir por WhatsApp</span>
        </a>
        <button type="button" class="btn-add-cart" id="add-to-cart-btn">
          ${cartIconSVG} <span>Agregar al carrito</span>
        </button>
      </div>
      <p class="add-to-cart-feedback" id="add-to-cart-feedback"></p>
    </div>
  `;

  // Gallery thumbnail switching
  const thumbs = container.querySelectorAll(".gallery-thumb");
  const mainImg = document.getElementById("gallery-main-image");
  thumbs.forEach(thumb => {
    thumb.addEventListener("click", () => {
      mainImg.src = thumb.dataset.img;
      thumbs.forEach(t => t.classList.remove("active"));
      thumb.classList.add("active");
    });
  });

  // Quantity stepper
  const qtyValueEl = document.getElementById("qty-value");
  document.getElementById("qty-minus").addEventListener("click", () => {
    currentQty = Math.max(1, currentQty - 1);
    qtyValueEl.textContent = currentQty;
  });
  document.getElementById("qty-plus").addEventListener("click", () => {
    currentQty += 1;
    qtyValueEl.textContent = currentQty;
  });

  // Add to cart
  document.getElementById("add-to-cart-btn").addEventListener("click", () => {
    addToCart(currentProductForCart, currentQty);
    const feedback = document.getElementById("add-to-cart-feedback");
    feedback.textContent = `Agregado al carrito (${currentQty} unidad${currentQty > 1 ? "es" : ""}). `;
    const link = document.createElement("a");
    link.href = "carrito.html";
    link.textContent = "Ver carrito";
    feedback.appendChild(link);
    feedback.classList.add("show");
  });
}

/* --------------------------- Página de búsqueda --------------------------- */
function renderSearchPage() {
  const query = (getQueryParam("q") || "").toLowerCase().trim();
  const titleEl = document.getElementById("search-title");
  const gridEl = document.getElementById("search-results-grid");
  const emptyEl = document.getElementById("search-empty");

  if (titleEl) titleEl.textContent = query ? `Resultados para "${query}"` : "Buscar productos";

  const results = query
    ? PRODUCTS.filter(p => p.name.toLowerCase().includes(query))
    : [];

  if (gridEl) {
    if (results.length === 0) {
      gridEl.innerHTML = "";
      if (emptyEl) emptyEl.style.display = "block";
    } else {
      if (emptyEl) emptyEl.style.display = "none";
      gridEl.innerHTML = results.map(p => productCardHTML(p)).join("");
      initProductCardCartButtons();
    }
  }
}

/* =========================================================================
   FIKA STORE — CARRITO DE COMPRAS
   =========================================================================
   No se usa ninguna base de datos ni servidor: el carrito vive solo en la
   sesión del navegador (sessionStorage), y se usa ÚNICAMENTE para que el
   pedido no se pierda mientras el cliente navega de "Producto" a
   "Carrito". Si el cliente recarga la página (F5) o cierra la pestaña, el
   carrito se vacía automáticamente. No se guarda ningún dato personal ni
   de pedidos en ningún servidor: todo desaparece al cerrar o recargar.
   ========================================================================= */

const CART_KEY = "fika_cart_session";

/* Detecta si la carga actual de la página es una RECARGA (F5 / botón
   recargar) y, en ese caso, vacía el carrito. Si es una navegación normal
   (el cliente hizo clic en un enlace o botón dentro del sitio), el
   carrito se mantiene. */
(function clearCartOnReload() {
  try {
    let isReload = false;
    const navEntries = performance.getEntriesByType && performance.getEntriesByType("navigation");
    if (navEntries && navEntries.length > 0) {
      isReload = navEntries[0].type === "reload";
    } else if (performance.navigation) {
      isReload = performance.navigation.type === 1; // TYPE_RELOAD (API antigua)
    }
    if (isReload) {
      sessionStorage.removeItem(CART_KEY);
    }
  } catch (e) {
    /* Si el navegador no soporta esta API, simplemente no se limpia. */
  }
})();

function getCart() {
  try {
    const raw = sessionStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  try {
    sessionStorage.setItem(CART_KEY, JSON.stringify(cart));
  } catch (e) {
    /* almacenamiento no disponible: el carrito simplemente no persiste */
  }
  updateCartBadge();
}

function addToCart(product, qty = 1) {
  const cart = getCart();
  const existing = cart.find(item => item.id === product.id);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images ? product.images[0] : product.image,
      qty: qty
    });
  }
  saveCart(cart);
}

function updateCartQty(id, qty) {
  let cart = getCart();
  cart = cart.map(item => item.id === id ? { ...item, qty: Math.max(1, qty) } : item);
  saveCart(cart);
}

function removeFromCart(id) {
  const cart = getCart().filter(item => item.id !== id);
  saveCart(cart);
}

function clearCart() {
  saveCart([]);
}

function cartCount() {
  return getCart().reduce((sum, item) => sum + item.qty, 0);
}

function cartSubtotal() {
  return getCart().reduce((sum, item) => sum + (item.price * item.qty), 0);
}

function updateCartBadge() {
  const badge = document.getElementById("cart-badge");
  if (!badge) return;
  const count = cartCount();
  badge.textContent = count;
  badge.style.display = count > 0 ? "flex" : "none";
}

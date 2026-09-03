/* =========================================================================
   FIKA STORE — PÁGINA DE CARRITO
   ========================================================================= */

function renderCartPage() {
  renderCartItems();
  renderCitySelect();

  // Seleccionar automáticamente "Pago anticipado" para los productos
  const pagoAnticipado = document.querySelector(
    'input[name="pago-productos"][value="anticipado"]'
  );

  if (pagoAnticipado) {
    pagoAnticipado.checked = true;
  }

  attachCartEvents();
  updatePaymentProductDescription();
  recalculateTotals();
}

/* --------------------------- Lista de productos en el carrito --------------------------- */
function renderCartItems() {
  const cart = getCart();
  const itemsEl = document.getElementById("cart-items");
  const emptyEl = document.getElementById("cart-empty");
  const formSection = document.getElementById("cart-checkout-section");

  if (!itemsEl) return;

  if (cart.length === 0) {
    itemsEl.innerHTML = "";
    if (emptyEl) emptyEl.style.display = "block";
    if (formSection) formSection.style.display = "none";
    return;
  }

  if (emptyEl) emptyEl.style.display = "none";
  if (formSection) formSection.style.display = "grid";

  itemsEl.innerHTML = cart.map(item => `
    <div class="cart-item" data-id="${item.id}">
      <img src="${item.image}" alt="${item.name}" class="cart-item-image" />
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-unit-price">${formatPrice(item.price)} c/u</div>
        <div class="cart-item-qty">
          <button type="button" class="cart-qty-btn" data-action="minus" data-id="${item.id}" aria-label="Restar">−</button>
          <span>${item.qty}</span>
          <button type="button" class="cart-qty-btn" data-action="plus" data-id="${item.id}" aria-label="Sumar">+</button>
        </div>
      </div>
      <div class="cart-item-right">
        <div class="cart-item-subtotal">${formatPrice(item.price * item.qty)}</div>
        <button type="button" class="cart-item-remove" data-id="${item.id}" aria-label="Eliminar producto">Eliminar</button>
      </div>
    </div>
  `).join("");
}

/* --------------------------- Selector de ciudad --------------------------- */
function renderCitySelect() {
  const select = document.getElementById("input-ciudad");
  if (!select) return;
  select.innerHTML = `<option value="" disabled selected>Selecciona tu ciudad</option>` +
    CITIES.map(c => `<option value="${c.name}">${c.name}</option>`).join("");
}

function getSelectedCity() {
  const select = document.getElementById("input-ciudad");
  if (!select || !select.value) return null;
  return CITIES.find(c => c.name === select.value) || null;
}

/* --------------------------- Descripciones según forma de pago --------------------------- */
/* Edita estos textos si quieres cambiar la descripción que ve el cliente
   al elegir cada forma de pago para los productos. */
const PAYMENT_PRODUCT_DESCRIPTIONS = {
  anticipado: "Envía los datos de tu pedido por WhatsApp. Te compartiremos los medios de pago disponibles (Nequi, Bancolombia, PayPal y otros) para realizar el pago y confirmar tu pedido."
};

function updatePaymentProductDescription() {
  const el = document.getElementById("pago-productos-description");
  if (!el) return;
  const selected = getSelectedRadioValue("pago-productos");
  const text = selected ? (PAYMENT_PRODUCT_DESCRIPTIONS[selected] || "") : "";
  el.textContent = text;
  el.classList.toggle("show", !!text);
}

/* --------------------------- Eventos --------------------------- */
function attachCartEvents() {
  const itemsEl = document.getElementById("cart-items");
  if (itemsEl) {
    itemsEl.addEventListener("click", (e) => {
      const qtyBtn = e.target.closest(".cart-qty-btn");
      if (qtyBtn) {
        const id = qtyBtn.dataset.id;
        const cart = getCart();
        const item = cart.find(i => i.id === id);
        if (!item) return;
        const newQty = qtyBtn.dataset.action === "plus" ? item.qty + 1 : item.qty - 1;
        if (newQty <= 0) {
          removeFromCart(id);
        } else {
          updateCartQty(id, newQty);
        }
        renderCartItems();
        recalculateTotals();
        return;
      }
      const removeBtn = e.target.closest(".cart-item-remove");
      if (removeBtn) {
        removeFromCart(removeBtn.dataset.id);
        renderCartItems();
        recalculateTotals();
      }
    });
  }

  const ciudadSelect = document.getElementById("input-ciudad");
  if (ciudadSelect) ciudadSelect.addEventListener("change", recalculateTotals);

  document.querySelectorAll('input[name="pago-productos"]').forEach(el => {
    el.addEventListener("change", () => {
      updatePaymentProductDescription();
      recalculateTotals();
    });
  });
  document.querySelectorAll('input[name="pago-envio"]').forEach(el => {
    el.addEventListener("change", recalculateTotals);
  });

  const submitBtn = document.getElementById("submit-order-btn");
  if (submitBtn) submitBtn.addEventListener("click", handleSubmitOrder);
}

/* --------------------------- Cálculo de totales --------------------------- */
function getSelectedRadioValue(name) {
  const checked = document.querySelector(`input[name="${name}"]:checked`);
  return checked ? checked.value : null;
}

function recalculateTotals() {
  const subtotal = cartSubtotal();
  const city = getSelectedCity();
  const pagoEnvio = getSelectedRadioValue("pago-envio");

  let shippingCost = null;
  if (city && pagoEnvio) {
    shippingCost = pagoEnvio === "anticipado" ? city.shippingPrepaid : city.shippingCOD;
  }

  const subtotalEl = document.getElementById("summary-subtotal");
  const shippingEl = document.getElementById("summary-shipping");
  const totalEl = document.getElementById("summary-total");

  if (subtotalEl) subtotalEl.textContent = formatPrice(subtotal);
  if (shippingEl) shippingEl.textContent = shippingCost !== null ? formatPrice(shippingCost) : "Selecciona ciudad y forma de pago del envío";
  if (totalEl) totalEl.textContent = formatPrice(subtotal + (shippingCost || 0));
}

/* --------------------------- Validación y envío --------------------------- */
function setFieldError(inputId, message) {
  const errorEl = document.getElementById(`error-${inputId}`);
  const inputEl = document.getElementById(inputId);
  if (errorEl) errorEl.textContent = message || "";
  if (inputEl) inputEl.classList.toggle("invalid", !!message);
}

function validateCartForm() {
  let valid = true;

  if (getCart().length === 0) {
    valid = false;
  }

  const requiredTextFields = [
    { id: "input-nombre", label: "el nombre de quien recibe" },
    { id: "input-telefono", label: "el teléfono" },
    { id: "input-direccion", label: "la dirección" },
    { id: "input-barrio", label: "el barrio" },
    { id: "input-ciudad", label: "la ciudad" }
  ];
  

  requiredTextFields.forEach(field => {
    const el = document.getElementById(field.id);
    if (!el || !el.value.trim()) {
      setFieldError(field.id, `Ingresa ${field.label}.`);
      valid = false;
    } else {
      setFieldError(field.id, "");
    }
  });


  // Ciudad
  const ciudadEl = document.getElementById("input-ciudad");
  if (!ciudadEl || !ciudadEl.value) {
    setFieldError("input-ciudad", "Selecciona una ciudad.");
    valid = false;
  } else {
    setFieldError("input-ciudad", "");
  }

  // Pago de productos
  const pagoProductos = getSelectedRadioValue("pago-productos");
  const errorPagoProductos = document.getElementById("error-pago-productos");
  if (!pagoProductos) {
    if (errorPagoProductos) errorPagoProductos.textContent = "Selecciona una forma de pago para los productos.";
    valid = false;
  } else if (errorPagoProductos) {
    errorPagoProductos.textContent = "";
  }

  // Pago de envío
  const pagoEnvio = getSelectedRadioValue("pago-envio");
  const errorPagoEnvio = document.getElementById("error-pago-envio");
  if (!pagoEnvio) {
    if (errorPagoEnvio) errorPagoEnvio.textContent = "Selecciona una forma de pago para el envío.";
    valid = false;
  } else if (errorPagoEnvio) {
    errorPagoEnvio.textContent = "";
  }

  const cartErrorEl = document.getElementById("cart-form-error");
  if (cartErrorEl) {
    cartErrorEl.textContent = getCart().length === 0
      ? "Tu carrito está vacío. Agrega al menos un producto antes de continuar."
      : (!valid ? "Revisa los campos marcados en rojo antes de continuar." : "");
  }

  return valid;
}

function paymentLabel(value) {
  return value === "anticipado" ? "Pago anticipado" : "Pago contraentrega";
}

function handleSubmitOrder() {
  if (!validateCartForm()) {
    const firstError = document.querySelector(".invalid") || document.getElementById("cart-form-error");
    if (firstError) firstError.scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }

  const cart = getCart();
  const city = getSelectedCity();
  const pagoProductos = getSelectedRadioValue("pago-productos");
  const pagoEnvio = getSelectedRadioValue("pago-envio");
  const shippingCost = pagoEnvio === "anticipado" ? city.shippingPrepaid : city.shippingCOD;
  const subtotal = cartSubtotal();
  const total = subtotal + shippingCost;

  const nombre = document.getElementById("input-nombre").value.trim();
  const telefono = document.getElementById("input-telefono").value.trim();
  const direccion = document.getElementById("input-direccion").value.trim();
  const barrio = document.getElementById("input-barrio").value.trim();
  const observaciones = document.getElementById("input-observaciones").value.trim();

  
  let msg = `Hola, quiero confirmar el siguiente pedido:\n\n`;

  msg += `*PRODUCTOS*\n`;
  cart.forEach(item => {
    msg += `• ${item.name} x${item.qty} — ${formatPrice(item.price * item.qty)}\n`;
  });

  msg += `\n*RESUMEN DEL PAGO*\n`;
  msg += `• Productos: ${formatPrice(subtotal)}\n`;

  if (pagoEnvio === "anticipado") {
    msg += `• Envío: ${formatPrice(shippingCost)}\n`;
  } else {
    msg += `• Envío Contraentrega: ${formatPrice(shippingCost)}\n`;
  }

  const totalPagarAhora = pagoEnvio === "anticipado"
    ? subtotal + shippingCost
    : subtotal;

  const envioPagarAlRecibir = pagoEnvio === "anticipado"
    ? 0
    : shippingCost;

  msg += `\n*DATOS DE ENTREGA*\n`;
  msg += `• Nombre: ${nombre}\n`;
  msg += `• Teléfono: ${telefono}\n`;
  msg += `• Ciudad: ${city.name}\n`;
  msg += `• Dirección: ${direccion}\n`;
  msg += `• Barrio: ${barrio}\n`;

  if (observaciones) {
    msg += `• Observaciones: ${observaciones}\n`;
  }

  msg += `\n*TOTAL A PAGAR AHORA: ${formatPrice(totalPagarAhora)}*\n`;
  msg += `*VALOR DEL ENVÍO A PAGAR AL RECIBIR: ${formatPrice(envioPagarAlRecibir)}*\n`;

  


  const link = waLink(msg);
  window.open(link, "_blank", "noopener");

  clearCart();
  renderCartItems();
  recalculateTotals();

  const cartErrorEl = document.getElementById("cart-form-error");
  if (cartErrorEl) {
    cartErrorEl.textContent = "";
  }
  const successEl = document.getElementById("cart-success-message");
  if (successEl) {
    successEl.style.display = "block";
    successEl.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}

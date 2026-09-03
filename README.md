# Fika Store — Catálogo Virtual

Sitio web de catálogo (no tiene carrito de compras ni pagos en línea): el
cliente navega el catálogo y hace el pedido por WhatsApp con un solo clic.

## 📁 Estructura de archivos

```
fika-store/
├── index.html          → Página de inicio
├── categoria.html       → Página que lista los productos de una colección
├── producto.html        → Página de un producto individual (galería + carrito)
├── carrito.html           → Carrito de compras y formulario de pedido
├── buscar.html             → Resultados de la lupa de búsqueda
├── css/
│   └── style.css              → Todos los estilos (colores, tipografía, layout)
├── js/
│   ├── data.js                 → ⭐ AQUÍ EDITAS PRODUCTOS, CATEGORÍAS, CIUDADES, RESEÑAS
│   ├── cart.js                  → Lógica del carrito (no hace falta tocarlo)
│   ├── main.js                   → Lógica general del sitio (no hace falta tocarlo)
│   └── cart-page.js               → Lógica de la página del carrito (no hace falta tocarlo)
└── images/                          → Todas las fotos del catálogo
```

## ▶️ Cómo verlo en Visual Studio Code

1. Abre la carpeta `fika-store` en VS Code (Archivo → Abrir carpeta).
2. Instala la extensión **Live Server** (de Ritwick Dey) desde el
   marketplace de extensiones.
3. Haz clic derecho sobre `index.html` → **"Open with Live Server"**.
4. Se abrirá el sitio en tu navegador y se actualiza solo cada vez que
   guardas un cambio.

No necesitas instalar Node, ni frameworks, ni nada más. Es HTML, CSS y
JavaScript puro.

## 🖼️ Cómo subir tus propias fotos

1. Copia tus imágenes (jpg, png o webp) dentro de la carpeta `images/`.
   Usa nombres sin espacios ni tildes, por ejemplo: `cuadro-pareja-1.jpg`.
2. Recomendado: fotos cuadradas (1:1) para los productos y de formato
   horizontal (ancho) para las categorías y el banner, para que se vean
   nítidas y no se recorten mal.
3. Luego, en `js/data.js`, reemplaza las rutas del arreglo `images` del
   producto (por ejemplo `images/prod-1-a.svg`) por tus fotos reales.

Las imágenes que vienen por defecto (los cuadros de colores con texto) son
solo de ejemplo, para que puedas ver el sitio funcionando de una vez.
Reemplázalas por las tuyas cuando quieras.

### Galería de varias fotos por producto

Cada producto tiene un arreglo `images` (no un solo `image`). Puedes poner
la cantidad de fotos que quieras — la primera es la que se ve como
principal, y el cliente puede tocar las demás como miniaturas para
cambiarla, igual que en Temu o Shein:

```js
images: [
  "images/cuadro-pareja-1.jpg",
  "images/cuadro-pareja-1-detalle.jpg",
  "images/cuadro-pareja-1-empacado.jpg"
]
```

Si solo tienes una foto, deja el arreglo con un solo elemento y no se
mostrarán miniaturas.

## 🗂️ Cómo crear una nueva categoría / colección

Abre `js/data.js` y busca el bloque `CATEGORIES` al principio del archivo.
Agrega un nuevo objeto siguiendo este formato:

```js
{
  slug: "cuadros-mascotas",       // sin espacios ni tildes, único
  name: "Cuadros para Mascotas",  // nombre visible
  image: "images/cat-mascotas.jpg" // imagen de fondo de la tarjeta
}
```

Con solo agregar esto, la nueva categoría aparecerá automáticamente:
- En la grilla de colecciones de la página de inicio.
- En el menú lateral (computador) y en el menú de hamburguesa (celular).

Para eliminar una categoría, simplemente borra su bloque `{ ... }` de la
lista. (Recuerda mover o borrar también los productos que tenía asignados,
o cambiarles la categoría, para que no queden "huérfanos".)

## 🛍️ Cómo agregar un producto nuevo

En el mismo archivo `js/data.js`, busca el bloque `PRODUCTS` y agrega un
nuevo objeto con este formato, dentro de los corchetes `[ ... ]`:

```js
{
  id: "p11",                              // único, no repetir (p1, p2, p3...)
  name: "Cuadro Pareja Iniciales",        // nombre del producto
  price: 80000,                            // precio, solo número
  category: "cuadros-parejas",            // debe coincidir con un "slug" de arriba
  image: "images/cuadro-iniciales.jpg",   // foto principal
  description: "Cuadro personalizado con las iniciales de la pareja, ideal para regalar en cualquier ocasión especial.",
  bestseller: false                        // true = aparece en "Los más vendidos"
}
```

No olvides poner una **coma** después de la llave `}` de cada producto
(menos en el último), tal como ya están los demás.

### Editar o eliminar un producto
- **Editar**: busca el producto por su `name` o `id` y cambia el valor que
  quieras (precio, descripción, imagen, etc.).
- **Eliminar**: borra su bloque `{ ... }` completo de la lista.

## 🛒 Cómo funciona el carrito de compras

El sitio no tiene pasarela de pagos ni base de datos: es un carrito
"ligero" pensado para que el cliente arme su pedido y lo envíe por
WhatsApp con toda la información lista.

- En la página de cada producto hay dos botones: **"Pedir por WhatsApp"**
  (manda un mensaje directo por ese solo producto, tal como ya existía) y
  **"Agregar al carrito"** (lo suma al carrito para pedir varios productos
  juntos).
- El carrito vive solo en la sesión del navegador. Esto quiere decir que
  si el cliente navega entre páginas del sitio (por ejemplo, agrega un
  producto y luego entra al carrito), el pedido se mantiene. Pero si
  **recarga la página (F5)** o cierra la pestaña, el carrito se vacía
  automáticamente. No se guarda ningún dato en ningún servidor ni base de
  datos — todo desaparece al recargar o cerrar.
- En `carrito.html`, el cliente completa sus datos de entrega (nombre,
  cédula, teléfono, correo, ciudad y dirección son obligatorios;
  observaciones es opcional), elige la forma de pago de los **productos**
  (anticipado o contraentrega) y la forma de pago del **envío** (anticipado
  o contraentrega). Según la ciudad y el tipo de pago del envío que elija,
  el sistema calcula automáticamente el costo del envío.
- Al hacer clic en **"Enviar por WhatsApp"**, se valida que todos los
  campos obligatorios estén completos y se abre WhatsApp con un mensaje ya
  armado con: los productos, cantidades, subtotal, costo de envío, total,
  forma de pago elegida para productos y envío, y todos los datos de
  entrega.

## 🚚 Ciudades y valores de envío ("base de datos" de envíos)

En `js/data.js`, busca el bloque `CITIES`. Ahí defines cada ciudad a la
que despachas y el valor del envío según la forma de pago que el cliente
elija para el envío:

```js
{
  name: "Bogotá",            // nombre que ve el cliente en el selector
  shippingPrepaid: 10000,    // costo si paga el envío anticipado
  shippingCOD: 13000         // costo si paga el envío contraentrega
}
```

Agrega, edita o elimina ciudades libremente; el carrito las toma
automáticamente para calcular el envío. Si más adelante quieres manejar
esto desde una hoja de cálculo o base de datos real, este mismo arreglo
es el punto donde se conectaría esa información.

## ⭐ Reseñas de clientes

En `js/data.js`, busca el bloque `REVIEWS` para agregar, editar o quitar
reseñas que aparecen en la página de inicio. Cada una lleva nombre, foto
(opcional, puedes usar el placeholder), número de estrellas (1 a 5) y el
comentario.

## 💳 Métodos de pago (sección "Pagos seguros")

En `js/data.js`, busca el bloque `PAYMENT_METHODS`. Ahí defines el nombre
y el logo de cada método (Nequi, Bancolombia, Daviplata, Bre-B, PayPal,
etc.). Cuando tengas los logos reales, súbelos a `images/` y reemplaza la
ruta correspondiente — los recuadros ya están listos para mostrarlos.

## 📱 Número de WhatsApp y redes sociales

También en `js/data.js`, en el bloque `STORE`, puedes cambiar:

```js
const STORE = {
  name: "Fika Store",
  whatsappNumber: "573159159677", // sin "+" y sin espacios
  instagram: "fika_store_col",
  tiktok: "fika_store_col",
  ...
};
```

## 🎨 Colores y tipografía

La paleta y la fuente están definidas como variables al inicio de
`css/style.css`, dentro de `:root`. Si algún día quieres ajustar un tono,
solo cambias el valor hexadecimal ahí y se actualiza en todo el sitio:

```css
--color-white: #FDFCF9;
--color-beige-dark: #6B5D4F;
--color-khaki: #BEB08A;
--color-orange-dark: #B4502A;
```

La tipografía usada es **Poppins** (Google Fonts), cargada en cada archivo
HTML. Si no tienes internet al momento de abrir el sitio, el navegador usa
una fuente similar (`Segoe UI` / `Arial`) como respaldo automático.

## 🌐 Cómo publicarlo cuando esté listo

Como es un sitio 100% estático (sin base de datos ni servidor), lo puedes
publicar gratis en cualquiera de estas opciones, subiendo la carpeta
`fika-store` completa:

- **Netlify** (netlify.com) → arrastra la carpeta y listo.
- **Vercel** (vercel.com)
- **GitHub Pages** (github.com) → sube la carpeta a un repositorio y
  activa "Pages" en la configuración.

## ✅ Resumen rápido

| Quiero...                            | Dónde lo hago                        |
|----------------------------------------|---------------------------------------|
| Agregar/editar un producto            | `js/data.js` → bloque `PRODUCTS`      |
| Agregar varias fotos a un producto    | `js/data.js` → arreglo `images` del producto |
| Crear/editar una colección            | `js/data.js` → bloque `CATEGORIES`    |
| Agregar/editar ciudades y envíos      | `js/data.js` → bloque `CITIES`        |
| Editar reseñas de clientes            | `js/data.js` → bloque `REVIEWS`       |
| Cambiar logos de métodos de pago      | `js/data.js` → bloque `PAYMENT_METHODS` |
| Cambiar WhatsApp, Instagram, TikTok   | `js/data.js` → bloque `STORE`         |
| Subir fotos nuevas                    | carpeta `images/`                      |
| Cambiar colores o fuente              | `css/style.css` → `:root`             |

# Catálogo Ninino — web

Web-catálogo de una sola página, pensada primero para teléfono, para que el equipo
comercial muestre los productos Ninino durante una visita y el cliente pueda pedir
información por WhatsApp.

No es una tienda en línea: no hay carrito, pagos, cuentas, inventario ni backend.

**URL pública prevista:** https://nininomx11.github.io/catalogo-ninino/

---

## 1. Estructura de archivos

```
catalogo-ninino/
├── index.html                  Estructura, metadatos, SEO y sprite del logotipo
├── styles.css                  Sistema visual completo (tokens + componentes)
├── script.js                   Render de fichas, buscador, galerías, variantes
├── .nojekyll                   Evita que GitHub Pages procese el sitio con Jekyll
├── README.md
├── assets/
│   ├── images/
│   │   ├── brand/              logo-wordmark.svg, logo-isotipo.svg, favicon.png, og-image.jpg
│   │   └── products/<modelo>/  Fotografías seleccionadas, en WebP
│   └── js/
│       └── products.js         ÚNICA fuente de datos del sitio
└── docs/
    └── image-inventory.csv     Qué se hizo con cada imagen del PDF y por qué
```

Todas las rutas del sitio son **relativas** (`assets/…`, nunca `/assets/…`) para que
funcione desde el subdirectorio de GitHub Pages. GitHub Pages distingue mayúsculas
y minúsculas: todos los nombres van en minúsculas, con guiones, sin acentos ni espacios.

---

## 2. Fuentes de información

| Dato | Fuente |
|---|---|
| Nombre comercial, frase, edad, configuraciones, funciones, orden de productos | **Catálogo PDF final** |
| Modelo, color, SKU, código de barras, pesos, medidas de caja | **Excel `Datos_productos_Ninino_1.xlsx`** |
| Logotipo, paleta, tipografías, personalidad | **Manual de Identidad Visual (abril 2026)** |
| Apariencia real, variantes, detalles físicos | **Fotografías** |

No hay ningún dato inventado. El sitio **no publica** precios, promociones, materiales,
certificaciones, peso soportado, dimensiones del producto, garantías, puntos de venta,
stock ni métodos de envío, porque ninguno está confirmado en las fuentes.

Las medidas y pesos del Excel corresponden a la **caja**, y así aparecen etiquetados
en el bloque «Datos del producto» de cada ficha. En ningún momento se presentan como
dimensiones físicas del producto.

---

## 3. Discrepancias detectadas

Ninguna se resolvió en silencio.

### 3.1 BH-515 — nombre del producto
- **Excel:** «Correpasillos / Andador»
- **PDF final:** «Periquera plegable»
- **Publicado:** Periquera plegable (nombre del PDF, según la jerarquía acordada).
- **Evidencia:** las fotografías muestran una silla de comer plegable con charola
  removible y arnés de 3 puntos; no hay ninguna característica de andador. El SKU
  `NIN-SCOM-BH515-VER` y la caja de 43 × 14.5 × 44 cm son coherentes con la silla plegada.
- **Pendiente:** corregir la descripción en el Excel. **No se modificó el archivo original.**

### 3.2 BH-524 — color
- **Excel:** Blanco · **PDF final:** Gris
- **Publicado:** Blanco.
- **Motivo:** la fotografía muestra una estructura blanca con cojín gris. Coinciden
  el Excel y la fotografía; la etiqueta del catálogo impreso parece heredada de las
  fichas anteriores (BH-522 y BH-525 sí son grises).
- **Pendiente:** decidir si se corrige la etiqueta en el catálogo impreso.

### 3.3 BH-327 — nomenclatura del modelo
- **Excel:** BH-327+212 · **PDF final:** BH-327
- **Publicado:** BH-327+212 en «Datos del producto», con la aclaración «(BH-327 en catálogo)».
  El buscador encuentra el producto con cualquiera de las dos formas.
- **Motivo:** el «+212» corresponde al cojín incluido, lo que confirma el beneficio
  «Cojín incluido» de la ficha.

### 3.4 BH-810 — texto de la tarjeta «Giros 360°»
En el PDF, la tarjeta «Giros 360°» lleva la descripción «Materiales duraderos», que
es la misma de la tarjeta «Material resistente» del BH-153. Parece un texto copiado
por error. En la web se publica **solo el título** «Giros 360°», sin descripción, en
lugar de repetir un texto que no corresponde.
- **Pendiente:** definir la descripción correcta y agregarla en `products.js`.

### 3.5 Ortografía de la marca
El brief de este proyecto escribía «Niniño». El Manual de Identidad Visual y el
catálogo escriben **«Ninino»**, sin eñe, en todas sus apariciones. Se usa **Ninino**.

---

## 4. Tipografías

| Rol | Brandbook | En la web | Motivo |
|---|---|---|---|
| Principal / títulos | Montserrat | **Montserrat** | Disponible en Google Fonts |
| Secundaria / textos | Futura LT Pro | **Jost** | Futura no puede licenciarse para web |

Jost es una geométrica derivada directamente de Futura: misma construcción circular,
misma «a» de un solo piso y proporciones equivalentes. **Es una sustitución técnica
documentada, no una decisión de diseño.** Si en algún momento se adquiere una licencia
web de Futura, basta con colocar los `.woff2` en `assets/fonts/`, declarar un
`@font-face` y cambiar la variable `--texto` en `styles.css`.

Las fuentes se cargan desde Google Fonts con `preconnect` y `display=swap`.

---

## 5. Logotipo

El Manual de Identidad Visual llegó como archivo con extensión `.pdf` pero con
contenido ZIP de imágenes JPEG, por lo que solo contiene el logotipo en baja resolución.

El wordmark del sitio se obtuvo del **catálogo PDF**, donde sí es vectorial: se
renderizó a 1200 dpi y se vectorizó a `logo-wordmark.svg`. Está insertado en
`index.html` como sprite (`<symbol id="nin-wordmark">`) y se colorea con `currentColor`,
lo que permite usarlo en verde, blanco o vino sin duplicar archivos y sin deformarlo.

`logo-isotipo.svg` se conserva como recurso de marca, pero **no se usa en el sitio**:
la única fuente disponible es de baja resolución y el trazado resultante no tiene la
calidad suficiente. El favicon usa el isotipo en mapa de bits, donde el tamaño lo permite.

Cuando exista el logotipo vectorial original, reemplaza `assets/images/brand/logo-wordmark.svg`
y actualiza el `<symbol>` de `index.html` con sus trazados.

---

## 6. Paleta

Tomada íntegra del Manual de Identidad Visual y declarada en `:root` de `styles.css`:

`#1A6B63` verde (principal) · `#430D21` vino · `#CFE8E6` aqua · `#FAC8C6` rosa ·
`#C8DAA7` verde claro · `#E8CBB4` durazno.

El sitio queda «emparedado» entre bloques verdes —hero y contacto— igual que el
catálogo entre sus portadas. El resto es blanco, con la fotografía como protagonista.

---

## 7. Imágenes

Las 112 imágenes incrustadas en el PDF se extrajeron, deduplicaron e identificaron
una por una comparándolas con la página correspondiente del catálogo. El resultado
está en `docs/image-inventory.csv`, con columnas de archivo original, página, producto,
modelo, variante, función visual, decisión, motivo, nuevo nombre, ruta final y
`object-position`.

**Formato:** WebP, máximo 1000 px de ancho. Total del sitio: ~1.2 MB de fotografía.
Cada `<img>` declara `width` y `height` para evitar saltos de layout, usa
`loading="lazy"` fuera del hero y `fetchpriority="high"` en la imagen principal.

**Recortes.** Acrobat exportó las fotografías completas, sin las máscaras de Canva.
El encuadre del catálogo se reprodujo recortando el archivo y, cuando hace falta ajuste
fino, con `object-position` declarado por imagen en `products.js`.

### Imágenes omitidas y por qué

| Imagen | Motivo |
|---|---|
| BH-515, ficha del proveedor | Texto publicitario en chino |
| BH-327, ficha «PLEGABLE / Fácil de guardar» (3 apariciones) | Texto sobreimpreso |
| BH-525, «CHAROLA DESMONTABLE» | Texto sobreimpreso |
| BH-524, detalle de altura ajustable | Anotaciones gráficas del proveedor sobre la foto |
| BH-221, bañera aislada | **Lleva impresa la marca de un tercero en el producto.** Aparece pequeña en el catálogo impreso, pero a tamaño web se lee con claridad |
| BH-327, ficha completa del proveedor | Es una hoja con texto; solo se usaron sus recortes fotográficos |
| Fondos y filetes de portada/índice/contraportada | Elementos gráficos sin valor fotográfico |

No se cubrió ningún texto con rectángulos, no se borró nada con IA y no se reconstruyó
ninguna parte de un producto. Las imágenes solo se recortaron.

Tres fotografías buenas quedaron marcadas como **«no publicada»** en el inventario
únicamente porque cada galería está limitada a 5 imágenes: `bh-522-almacenamiento`,
`bh-327-plegada` y `bh-327-cojin`. Si quieres publicarlas, súbelas de nuevo a la carpeta
del modelo y agrégalas a `images.gallery` (ver 8.2).

---

## 8. Mantenimiento

Todo se edita en **`assets/js/products.js`**. No hace falta tocar el HTML.

### 8.1 Cambiar un texto de producto
Edita `name`, `tagline`, `age`, `highlights` o `features` del producto. El orden del
arreglo `PRODUCTOS` define el orden en el sitio y en el buscador.

### 8.2 Cambiar o agregar una fotografía
1. Guarda la imagen en `assets/images/products/<modelo>/` como WebP, en minúsculas y
   con el patrón `[modelo]-[funcion]-[variante].webp`.
2. Agrégala en `images.gallery` con `src`, `alt`, `position` y `role`.
3. La galería muestra un máximo de **5** imágenes en este orden: hero, variantes,
   configuraciones y detalles. Para cambiar el límite, ajusta `MAX_SLIDES` en `script.js`.

### 8.3 Ajustar el encuadre (`object-position`)
En `products.js`, cada imagen tiene `position: '50% 45%'`. El primer valor es
horizontal y el segundo vertical: bajar el segundo número sube el encuadre. Ajusta
cada imagen por separado; **no uses el mismo valor para todas.**

### 8.4 Agregar una variante de color
Añade un objeto al arreglo `colors`:

```js
{ id: 'menta', name: 'Menta', hex: '#B9D8CE',
  sku: 'NIN-...', barcode: '750306...',
  image: 'assets/images/products/bh-153/bh-153-menta.webp',
  alt: 'Escalera para WC Ninino BH-153 en color menta' }
```

Con dos o más colores el selector aparece solo, cambia la imagen mostrada, indica el
estado seleccionado y muestra el SKU y el código de cada variante en «Datos del producto».
**Si no existe fotografía real de una variante, no la agregues:** no fabriques la imagen.

### 8.5 Agregar un producto
Copia un objeto completo de `PRODUCTOS`, cambia `slug` (será su ancla y su URL:
`#nuevo-slug`), `model`, textos, datos del Excel y rutas de imagen. La tarjeta del
buscador, la ficha, la galería, el CTA y el JSON-LD se generan solos.

### 8.6 Cambiar WhatsApp o correo
- WhatsApp: constante `CONTACTO.whatsapp` en `products.js`, en formato internacional
  sin signos (`52` + 10 dígitos). El mensaje se arma solo:
  *«Hola, me interesa recibir información sobre [producto], modelo [modelo].»*
- Correo y teléfono visibles: en `index.html`, sección `#contacto` y el pie.

---

## 9. Publicar en GitHub Pages

El proyecto está listo para subir tal cual. **No se publicó desde aquí porque no se
proporcionaron credenciales de GitHub.**

### Opción A — desde la web de GitHub (sin instalar nada)
1. Entra a github.com con la cuenta **nininomx11** y crea un repositorio público
   llamado `catalogo-ninino`. No agregues README ni .gitignore.
2. En el repositorio vacío: **Add file → Upload files**.
3. Arrastra **el contenido** de la carpeta `catalogo-ninino` (no la carpeta misma):
   `index.html`, `styles.css`, `script.js`, `.nojekyll`, `README.md`, `assets/`, `docs/`.
   Si el navegador no permite arrastrar carpetas, súbelas por partes; conserva la
   estructura exactamente igual.
4. **Commit changes**.
5. **Settings → Pages → Source: Deploy from a branch → Branch: `main` / `(root)` → Save**.
6. Espera 1–2 minutos y abre `https://nininomx11.github.io/catalogo-ninino/`.

`.nojekyll` es necesario: sin él, GitHub Pages ignora carpetas que empiezan con guion bajo.

### Opción B — desde la terminal
```bash
cd catalogo-ninino
git init
git add .
git commit -m "Catálogo web Ninino: estructura, datos, imágenes y estilos"
git branch -M main
git remote add origin https://github.com/nininomx11/catalogo-ninino.git
git push -u origin main
```
Después activa Pages como en el paso 5 de la opción A.

### Revisión posterior a la publicación
1. Abre la URL en un teléfono real.
2. Recorre las 8 fichas y comprueba que cada fotografía corresponda a su modelo.
3. Prueba el buscador con `BH-153`, `bañera` y `scooter`.
4. Pulsa un CTA y confirma que WhatsApp abre con el mensaje correcto.
5. Comparte el enlace por WhatsApp y revisa que la vista previa muestre la imagen verde.
6. Abre la consola del navegador y confirma que no haya errores ni 404.

---

## 10. Verificación realizada

Comprobado de forma automatizada sobre el DOM ya renderizado:

- Se generan las 8 fichas, 8 tarjetas y 8 galerías, con 9 enlaces de WhatsApp.
- Las 63 imágenes referenciadas existen en disco; **ningún 404**.
- **Ninguna ruta absoluta** (todas empiezan por `assets/`).
- **Ningún archivo huérfano** en `assets/images/products`.
- Todas las imágenes tienen `alt` descriptivo.
- Un solo `<h1>` y jerarquía de encabezados sin saltos.
- Sin placeholders, sin `Lorem ipsum`, sin `undefined`, sin `[teléfono]` ni `[correo]`.
- Cada galería tiene entre 2 y 5 imágenes, con indicadores alineados.
- Cada ficha tiene CTA y bloque «Datos del producto».
- Sin errores de JavaScript al cargar.

**Falta por comprobar en un navegador real:** el render visual en 360, 390, 768, 1024
y 1440 px, la ausencia de scroll horizontal, el contraste medido y la puntuación de
Lighthouse. En este entorno no fue posible instalar un navegador headless, así que
esa revisión visual debe hacerse al abrir el sitio. El punto más probable de ajuste
es el ancho de las tarjetas del carrusel en pantallas de 360 px.

---

## 11. Accesibilidad y movimiento

- Navegable por completo con teclado, con foco visible en vino sobre todos los controles.
- Galerías operables con flechas ← →, con botones reales, indicadores y soporte táctil.
- Selectores de variante con `aria-pressed`; el color nunca comunica solo: siempre va
  acompañado del nombre.
- Áreas táctiles de 44 × 44 px como mínimo.
- Resultados del buscador anunciados con `aria-live`.
- Animaciones discretas: aparición `fade-up` de 16 px con `IntersectionObserver`,
  elevación mínima en hover y transiciones de color. **`prefers-reduced-motion: reduce`
  desactiva todo el movimiento** y el sitio queda completamente funcional.

---

© 2026 Ninino. Todos los derechos reservados.

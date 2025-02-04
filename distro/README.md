# AndyBencomoStore - Documentación

## Enlace de web desplegada https://andybencomotareaweb1.netlify.app/

## Estructura del Proyecto

El proyecto está compuesto por tres archivos principales:
- `index.html`: Estructura de la página
- `style.css`: Estilos y diseño visual
- `script.js`: Lógica y funcionalidad

## 1. HTML (index.html)

### Estructura Principal
```html
<header>: Contiene el título de la tienda y el ícono del carrito
<main>: Contiene dos secciones principales:
  - Sección de productos con filtros por categoría
  - Sección del carrito de compras
<footer>: Información del pie de página
```

### Elementos Importantes
- Filtros de categoría usando botones
- Sección de productos que se llena dinámicamente
- Carrito con subtotal, total y botón de checkout
- Integración de fuentes (Inter) e íconos (Font Awesome)

## 2. CSS (style.css)

### Sistema de Diseño
```css
Variables CSS (:root):
--primary-color: #2563eb (Azul principal)
--secondary-color: #1d4ed8 (Azul secundario)
--background-color: #f8fafc (Fondo claro)
--text-color: #1e293b (Color de texto)
--card-background: #ffffff (Fondo de tarjetas)
--border-color: #e2e8f0 (Color de bordes)
```

### Características Principales
1. **Diseño Responsivo Mobile-First**
   - Grid system adaptativo para productos (140px -> 200px -> 250px)
   - Layout flexible que prioriza la experiencia móvil
   - Media queries para tablets (480px) y desktop (768px)
   - Ajustes específicos para cada tamaño de pantalla

2. **Optimizaciones Móviles**
   - Filtros con scroll horizontal en móvil
   - Botones y controles más grandes para mejor interacción táctil
   - Manejo de texto con ellipsis para evitar desbordamiento
   - Espaciado optimizado para pantallas pequeñas
   - Desactivación de highlight táctil no deseado

3. **Efectos y Animaciones**
   - Hover effects en desktop
   - Animaciones suaves en el carrito
   - Transiciones optimizadas para móvil
   - Feedback visual para interacciones táctiles

4. **Componentes Estilizados**
   - Tarjetas de producto adaptativas
   - Botones con estados hover y touch
   - Carrito responsive con diseño flotante en desktop
   - Controles de cantidad optimizados para touch
   - Header y footer adaptables

## 3. JavaScript (script.js)

### Gestión de Datos
```javascript
- products: Array de productos con sus propiedades (id, nombre, precio, categoría, imagen)
- cart: Array que almacena los items del carrito con cantidades
```

### Funciones Principales

1. **Filtrado de Productos**
```javascript
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentCategory = button.dataset.category;
        // Actualiza la vista de productos según la categoría
    });
});
```
- Maneja el filtrado de productos por categoría
- Actualiza la vista dinámicamente al cambiar de categoría

2. **Gestión del Carrito**
```javascript
function addToCart(productId) {
    // Añade productos al carrito o incrementa su cantidad
}

function updateQuantity(productId, delta) {
    // Actualiza la cantidad de productos en el carrito
}

function updateCart() {
    // Actualiza la vista del carrito, conteo y precios
}
```
- Sistema de añadir/remover productos
- Control de cantidades
- Cálculo automático de subtotal y total con impuestos (10%)

3. **Renderizado de Elementos**
```javascript
function renderProducts() {
    // Crea y muestra las tarjetas de productos
}

function renderCartItems() {
    // Actualiza la vista de items en el carrito
}
```
- Creación dinámica de elementos HTML
- Actualización en tiempo real del carrito

### Características Avanzadas

1. **Persistencia de Datos**
- El carrito mantiene su estado mientras la página está abierta

2. **Cálculos Automáticos**
- Subtotal de productos
- Impuestos (10%)
- Total final
- Cantidad total de items

3. **Interacción Usuario**
- Feedback visual al añadir productos
- Animaciones en el contador del carrito
- Validaciones en el checkout
- Controles intuitivos de cantidad

## Mejoras Implementadas

1. **UI/UX**
- Diseño moderno y limpio
- Paleta de colores profesional
- Tipografía moderna (Inter)
- Feedback visual en interacciones

2. **Funcionalidad**
- Sistema de filtrado por categorías
- Control de cantidades en el carrito
- Cálculos automáticos de precios
- Proceso de checkout simplificado

3. **Rendimiento**
- Código optimizado
- Carga eficiente de imágenes
- Animaciones suaves
- Actualización dinámica de contenido

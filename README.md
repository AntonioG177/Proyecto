# 🛍️ Proyecto Final — Tienda Online con React y Tailwind CSS

Este es el repositorio del proyecto final para la materia **DESARROLLO DE APLICACIONES PARA WEB 2.0**, desarrollado en equipo. El objetivo fue construir una tienda en línea funcional utilizando **React**, **Tailwind CSS**, **Vite** y la API pública [FakeStoreAPI](https://fakestoreapi.com/) para simular productos reales.

## 🧑‍💻 Integrantes del equipo

- Argonza Roblero Diego Daniel
- Estrada Ortiz Josué Fernando
- Guadiana Javier Aurelio Antonio
- Jiménez Márquez Angel Uziel

Profesor:
- Hernandez Gutierrez Pedro Noe


---

## 🚀 Tecnologías utilizadas

- **React** – Biblioteca principal para la construcción de interfaces.
- **Vite** – Herramienta de desarrollo ultrarrápida.
- **Tailwind CSS** – Framework de estilos para diseño moderno y responsivo.
- **FakeStoreAPI** – API REST pública para productos ficticios de una tienda.

---

## 🧩 Funcionalidades implementadas

✅ Visualización de productos disponibles.  
✅ Detalle individual de cada producto con imagen, descripción, precio y rating.  
✅ Diseño responsivo usando Tailwind CSS.  
✅ Botón de navegación para volver a la página anterior (`window.history.back()`).  
✅ División del sitio en secciones como encabezado, productos, pie de página, etc.  

---

## ⚛️ React + ⚡ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## 🧠 Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

---

## 🌐 API usada

Usamos [FakeStoreAPI](https://fakestoreapi.com/) para obtener la información de los productos, incluyendo:

- `title` – Nombre del producto.
- `description` – Descripción completa.
- `price` – Precio en USD.
- `image` – Imagen del producto.
- `rating.rate` y `rating.count` – Puntuación promedio y número de opiniones.

---

## 🛠️ Instalación y ejecución

```bash
# Clonar el repositorio
git clone https://github.com/AntonioG177/Proyecto.git
cd Proyecto

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev
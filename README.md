# Recipes React

Simple aplicación web que permite crear y eliminar recetas. Cada receta consiste en un título y una descripción.

## Características

- **Autorizacion:** Se implemento la logica para crear usuario, hacer login y logout, ademas de rutas publicas y protegidas.
- **Crear Recetas:** Los usuarios pueden agregar nuevas recetas proporcionando un título y una descripción.
- **Ver Detalles:** Los usuarios pueden ver los detalles de una receta.
- **Eliminar Recetas:** Los usuarios pueden eliminar recetas existentes.
- **Context:** Se utilizó el hook de Context para que distintos componentes accedan a información sin tener que pasar props.
- **Effect:** Se utilizó el hook de Effect para que almacenar las recetas en un estado recetas, cuando el estado receta se modifique.

## Tecnologías Utilizadas

- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **React Router DOM**: Manejo de rutas en la aplicación.
- **Context API**: Manejo del estado global para compartir recetas entre componentes.
- **Material UI**: Framework para la creación de interfaces de usuario con un diseño limpio y moderno.

## Instalación

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/simonlombardi/recipes-react.git
   ```
2. **Moverse hacia el directorio creado:**
    ```bash
    cd recipes-react
    ```
3. **Instalar dependencias:**
    ```bash
    npm install
    ```
4. **Correr el proyecto:**
    ```bash
    npm run dev
    ```
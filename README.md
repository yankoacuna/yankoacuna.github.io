# Yanko Acuña | Portafolio Personal

Repositorio con el código fuente de mi portafolio web personal, donde documento mi trayectoria, experiencia laboral, proyectos destacados y habilidades técnicas como **Ingeniero Civil en Computación** especializado en Full Stack y Ciencia de Datos.

Puedes visitarlo en vivo aquí: [yankoacuna.cl](https://yankoacuna.cl/) *(o tu enlace de GitHub Pages)*.

## 🛠 Tecnologías Utilizadas

El proyecto está construido desde cero (Vanilla) con un enfoque en rendimiento, ligereza y modularidad, sin depender de frameworks pesados:

- **Frontend Core**: HTML5, CSS3 y JavaScript (ES6+).
- **Arquitectura**: Diseño modular mediante la inyección nativa de componentes HTML (`fetch`), separando lógicamente las distintas secciones.
- **Gráficos 3D**: Uso de `globe.gl` (Three.js) para renderizar el globo interactivo.
- **Internacionalización**: Manejo de diccionarios en JS para permitir el cambio dinámico entre Español e Inglés nativamente.
- **Modo CV (Impresión)**: Reglas CSS especializadas (`@media print`) que transforman la web en un formato limpio de Curriculum Vitae al intentar imprimir la página (Ctrl+P).

## 🗂️ Estructura del Proyecto

- `/components/`: Fragmentos modulares de la interfaz (proyectos, experiencia, educación, habilidades, globo interactivo).
- `/css/`: Hojas de estilo refactorizadas temáticamente (variables, base, layout, proyectos, línea de tiempo).
- `/js/`: Scripts principales (`main.js` para lógica estructural, `globe.js` y `terminal.js`).
- `/imagenes/`: Activos visuales organizados por proyecto.
- `index.html`: Punto principal de montaje de la aplicación.

## 🚀 Instalación Local

Dado que utiliza módulos nativos de JS (`fetch`), necesitas correrlo sobre un servidor HTTP local para evitar bloqueos por CORS, pero no requiere levantar un entorno complejo (npm/node):

```bash
# 1. Clona el repositorio
git clone https://github.com/yankoacuna/yankoacuna.github.io.git

# 2. Entra al directorio
cd yankoacuna.github.io

# 3. Ejecuta un servidor HTTP básico (Ejemplo con Python)
python -m http.server 8000
```
Luego, abre `http://localhost:8000` en el navegador.

---
📝 *Diseñado y desarrollado por Yanko Acuña Villaseca.*
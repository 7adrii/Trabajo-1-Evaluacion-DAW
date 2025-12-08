# Cars Luxury Forum API

Este proyecto es una mini web estática sobre coches deportivos de alta gama, con varias páginas HTML, estilos CSS específicos y un módulo JavaScript para generar tarjetas de vehículos dinámicamente a partir de un formulario.

## Índice

- [Descripción general](#-descripción-general)  
- [Estructura del proyecto](#-estructura-del-proyecto)  
- [Características principales](#-características-principales)  
- [Tecnologías usadas](#-tecnologías-usadas)  
- [Cómo ejecutar el proyecto](#-cómo-ejecutar-el-proyecto)  
- [Autor](#-autor)
- [Licencia](#-licencia)

## Descripción general

El proyecto consiste en un sitio web que presenta varios modelos de coches deportivos (Porsche 911, Audi R8, BMW i8, Ford GTD y Lamborghini Revuelto), cada uno con su propia página de detalle y estilos personalizados. Además, incluye una página de administración de modelos donde el usuario puede registrar nuevos vehículos mediante un formulario y verlos como tarjetas generadas dinámicamente.

## Estructura del proyecto

front/
│
├── 1-bmw/                  
│   ├── i8.css                     
│   └── i8.html             
│   
├── 2-mustang/                  
│   ├── gtd.css                     
│   └── gtd.html
│
├── 3-audi/                  
│   ├── r8.css                     
│   └── r8.html
│
├── 4-lamborghini/                  
│   ├── revuelto.css                     
│   └── revuelto.html
│
├── 5-porsche/                  
│   ├── 911.css                     
│   └── 911.html
│
├── 6-agregar-modelos/                  
│   ├── modelos.css  
│   ├── modelos.html                    
│   └── modelos.js                    
│                                   
├── favicon/                      
├── img/                        
├── index.css    
├── index.html                             
└── README.md                        

## Características principales

- Navegación entre múltiples páginas dedicadas a modelos de coches deportivos, cada una con diseño y estilo diferenciados para resaltar el vehículo.
- Formulario para introducir datos de un coche (como marca, modelo, potencia, precio, fecha de lanzamiento, transmisión e imagen) y generación automática de tarjetas visuales con esa información.
- Separación clara entre contenido (HTML), presentación (CSS) y comportamiento (JavaScript), facilitando el mantenimiento y la ampliación del proyecto.

## Tecnologías usadas

- **HTML5** para la estructura de las páginas y el contenido estático del sitio.
- **CSS3** para la maquetación, estilos de cada modelo y diseño de tarjetas, cabeceras y navegación.
- **JavaScript (vanilla)** para manejar eventos del formulario y crear elementos dinámicamente.

## Cómo ejecutar el proyecto

1. Descarga o clona el repositorio en tu equipo local.  
2. Abre el archivo `index.html` en tu navegador para acceder a la página principal.
3. Usa los enlaces de navegación para visitar las páginas de cada modelo de coche.
4. Accede a `modelos.html`, completa el formulario y envíalo para ver nuevas tarjetas de coches añadidas a la sección correspondiente.

## Autor

Adrián Lorente Mateo
- GitHub: [@7adrii](https://github.com/7adrii)
- Centro San Valero
- Curso: 1º DAW

## Licencia

Este proyecto está bajo la Licencia de Adrian Lorente Mateo y el Centro San Valero
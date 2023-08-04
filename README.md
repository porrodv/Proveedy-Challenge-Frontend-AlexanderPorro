# YachAI demo - Alexander Porro

**Propuesta para el nuevo diseño construido en React.js**

## Características

- Maquetación con HTML5 y CSS3+ (sin uso frameworks).
- Componetización hecha con React.js
- Enrutamiento.

## Ejecución

Para levantar esta demo solo se necesita descargar el proyecto, descomprimirlo y ejecutar en la raíz los siguiente comandos:

- npm install

- npm run dev

## Nuevo diseño

El proyecto presenta 2 templates principales, **la nueva vista** de la propuesta de Figma para los cuestionarios generados y la **landing page**.

He realizado enrutamiento con react-router-dom para separar estos diseños en 2 rutas principales...

- (/): Landing page

- (/quiz): Diseño para los cuestionarios

## API

Los datos de la API son consumidos por la aplicación pero no son utilizados.
 
La API parece rescatar datos en relación a los PDFs subidos y guardados pero esta data no la puedo usar en el template realizado ya que esta parte usa las preguntas y respuestas generadas automáticamente, más no los resúmenes ni las keywords

## Capturas

<div align="center">

  ![JavaScript Banner][img1]
  

  ![JavaScript Banner][img2]

</div>

<!-- Images -->
[img1]: https://raw.githubusercontent.com/porrodv/Proveedy-Challenge-Frontend-AlexanderPorro/master/public/ss1.png

[img2]: https://raw.githubusercontent.com/porrodv/Proveedy-Challenge-Frontend-AlexanderPorro/master/public/ss2.png

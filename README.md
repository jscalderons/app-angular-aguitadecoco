# Agüita de coco

Prueba técnica para siesa titulado "Agüita de coco".

- NodeJS: `v12.4.0`
- npm: `v6.10.1`
- Angular: `v8.0`
- @angular/cli: `v8.0`
- TypeScript: `v3.4.5`
- Bootstrap: `v4.3.1`
- jquery: `v3.1.1`
- popper: `v1.14`

# Pasos para ejecutar.
## 1. Obtener proyecto.

Clone o descargué el repositorio y ubíquelo en la carpeta de su preferencia.

## 2. Descargar dependencias.

1. Abrir una consola o terminal.
2. Navegue a la carpeta donde se encuentra ubicó el proyecto.
3. Ejecutar `$ npm install` para descargar las dependencias.

## 3. Enlace con la API
Al correr el [servidor](https://github.com/jscalderons/app-laravel-aguitadecoco) editar el archivo: __./src/environments/environment.ts__. Remplazar la variable __api_url__ por la URL que nos proporcionó el servidor.

__NOTA:__ Cuando cambies la variable __api_url__ no olvides agregarle '/api' al final. Recordar que esta no debe terminar en "/", ejemplo: http://www.example.com/api.

## 4. Ejecutar el servidor.

Ejecutar `$ ng serve` para subir un servidor de desarrollo. Vaya a [http://localhost:4200/](http://localhost:4200/).


# Sheraton Costa Rica - Backend
Este repositorio contiene el backend de Sheraton Costa Rica, una API específica para guardar, ver y exportar Leads/Contactos de este proyecto.

Está realizado en NodeJS, utilizando MVC para su mejor mantención, y la base de datos está sustentada en MongoDB.

## Requisitos / Dependencias

- Node 16 o superior
- Docker
- MongoDB
## Instalación

### NPM:

- Ejecutar el comando: npm install o npm i
- Crear una copia de .env.example y renombrarlo a .env
- Configurar variables de entorno y credenciales en archivo .env
- Crear un usuario con el comando: npm run create-user "Nombre" "Email" "Password"
- Ejecutar el comando: npm run start

### Docker

- Ejecutar el comando: docker-compose up -d --build
## Endpoints

     /contact : Trae los contactos en forma paginada (en lotes de 10) // GET
     /contact : Guarda posteos. Parámetros: name/email/phone (opcional) // POST
     /contact/all : Trae todos los contactos // GET
     /contact/export : Exporta los Contactos a un archivo Excel // GET
     /contact/:id : Trae un contacto específico // GET
     /contact/:id : Borra un contacto específico // DELETE
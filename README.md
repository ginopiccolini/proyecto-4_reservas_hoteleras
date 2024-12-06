# Hotel Reservations API

## Descripción

Aplicación de servicios CRUD para la gestión de reservas en la industria hotelera. Permite crear, visualizar, actualizar, eliminar y filtrar reservas.

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPOSITORY_NAME.git
   cd YOUR_REPOSITORY_NAME
Instala las dependencias:

bash
npm install
Configura las variables de entorno creando un archivo .env:

PORT=3000
Inicia el servidor:

bash
node server.js
Endpoints Principales
Crear Reserva: POST /api/reservas

Obtener Reservas: GET /api/reservas

Obtener Reserva por ID: GET /api/reservas/:id

Actualizar Reserva: PUT /api/reservas/:id

Eliminar Reserva: DELETE /api/reservas/:id

Filtrar Reservas:

Por hotel: GET /api/reservas?hotel=HOTEL

Por fechas: GET /api/reservas?fechaInicio=FECHA_INICIO&fechaFin=FECHA_FIN

Por tipo de habitación: GET /api/reservas?tipoHabitacion=TIPO_HABITACION

Por estado: GET /api/reservas?estado=ESTADO

Por número de huéspedes: GET /api/reservas?numHuespedes=NUM_HUESPEDES

Documentación
Accede a la documentación completa en /api-docs.

Contribución
Haz un fork del repositorio.

Crea una nueva rama (git checkout -b feature/nueva-funcionalidad).

Realiza tus cambios y haz commit (git commit -am 'Agregar nueva funcionalidad').

Empuja la rama (git push origin feature/nueva-funcionalidad).

Crea un nuevo Pull Request.

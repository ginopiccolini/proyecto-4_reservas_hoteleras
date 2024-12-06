require('dotenv').config();
const express = require('express');
const reservasRoutes = require('./routes/reservasRoutes');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/reservas', reservasRoutes);

// Configuración de Swagger
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Hotel Reservations API',
      version: '1.0.0',
      description: 'API para la gestión de reservas en la industria hotelera',
    },
    servers: [
      {
        url: `http://localhost:${port}`,
      },
    ],
  },
  apis: ['./routes/*.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


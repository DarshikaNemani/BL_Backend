const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Auth API with Swagger',
      version: '1.0.0',
      description: 'Simple login and signup API documented with Swagger',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Development server',
      },
    ],
  },
  apis: ['./routesLogSign.js'], // scan routes folder
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;

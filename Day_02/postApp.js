// const express = require('express');
// const PORT = 3000;
// const app = express();

// app.use(express.json());
// app.post('/a', (req, res)=>{
//     const {name} = req.body;
//     res.send(`Welcome ${name}`);
// });

// app.listen(PORT, (error)=>{
//     if(!error)
//         console.log('App is running and listening on port', PORT);
//     else
//         console.log('Error, try again!', error);
// });




const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');

const app = express();
const port = 3000;
    
app.get('/users', (req, res) => {
    res.send("Successful response with a list of users")
  // Your logic to fetch and return users
  
});
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get a list of users
 *     description: Retrieve a list of users from the database.
 *     responses:
 *       200:
 *         description: Successful response with a list of users.
 */

// Your application routes go here...
 app.use(express.json());
 /**
 * @swagger
 * /a:
 *   post:
 *     summary: Get a list of users
 *     description: Retrieve a list of users from the database.
 *     responses:
 *       200:
 *         description: Successful response with a list of users.
 */
 app.post('/a', (req, res)=>{
     const {name} = req.body;
     res.send(`Welcome ${name}`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
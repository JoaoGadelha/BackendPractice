const cors = require('cors');
const express = require('express');
const serverless = require('serverless-http');

const app = express();
const router = express.Router();

app.use(cors());

router.get('/', (req,res) => {
      res.send('Home page 2');
});

app.use('/.netlify/functions/index', router);

module.exports.handler = serverless(app);
let express = require('express');
require('dotenv').config();
let app = express();
let port = process.env.DB_PORT || 4000;
const mongoose = require('mongoose');
const Port = require('./api/models/todoListModels');
const bodyParser = require('body-parser');
app.use(express.static('./public'));
app.use(bodyParser.json());

const postsRoute = require('./api/routes/todoListRoutes');

app.use('/posts', postsRoute);

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true, useUnifiedTopology: true  }, () => { console.log('Connected to DB.') });

try {
     app.listen(port);
} catch (err) {
     console.log('Error: ' + err);
}

console.log('Server started on port:' + port);

app.get('/', (req, res) => {
     res.send('Hello');
     res.end();
})
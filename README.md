# BackendPractice
Implementing an API and form submission with Node.js and MongoDB

## Preparing a new project with Express deployable on Netlify
These steps are extracted from [this video tutorial](https://www.youtube.com/watch?v=hQAu0YEIF0g&ab_channel=OhSeeMedia) on youtube and lead to the creation of a new project with Express for deployment on Netlify.
1. Create a new package.js file

`npm init -y`
 
2. Install netlify packages

`npm install netlify-lambda serverless-http`

Some other packages that may be important during development

`npm install cors express mongoose`

cors - deals with CORS errors for fetching resources from API's from different origins

express - Node framework

mongoose - connects the project to a mongo database on MongoDB Atlas 

3. Create a .gitignore with the following lines

`node_modules`

`functions`

4. Create a netlify.toml file with the following content

`[build]`

&nbsp; &nbsp; &nbsp; &nbsp;`functions = "functions"`

The second line must have a tab space before the `functions = "functions"` text

5. Create a folder name `dist` with a `index.html` file inside. The .html file can be empty.

6. Create a folder `src` with a file name `index.js` with the following content
```javascript
const cors = require('cors');
const express = require('express');
const serverless = require('serverless-http');

const app = express();
const router = express.Router();

router.get('/', (req,res) => {
      res.send('Home page');
});

app.use('/.netlify/functions/index', router);

module.exports.handler = serverless(app);

```

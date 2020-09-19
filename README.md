# BackendPractice
Implementing an API and form submission with Node.js and MongoDB

## Steps to deploy on Netlify
These steps are extracted from [this video tutorial](https://www.youtube.com/watch?v=hQAu0YEIF0g&ab_channel=OhSeeMedia) on youtube
1. Create a new package.js file

`npm init -y`
 
2. Install netlify packages

`npm install netlify-lambda serverless-http`

Some other packages that may be important during development

`npm install cors express mongoose`

3. Create a .gitignore with the following lines

`node_modules`

`functions`

4. Create a netlify.toml file with the following content

`[build]`

`&nbsp;+space functions = "functions"`

The second line must have a tab space before the `functions = "functions"` text

5.

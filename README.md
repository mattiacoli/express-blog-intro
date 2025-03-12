# Blog Posts API

1. **Set Up the Project**
  - Create file server.js
  - Inizialize a new Node.js project using `npm init`
  - Install Express using `npm i express` for HTTP request


2. **Create the Server**
  - Set up an Express server in file server.js
  - Import Express module using CJS `const express = require('express')
  - Save express function in a variable `const app = express()`
  - Create a server port `const port = 3001`
  - Add scripts in package.json for refresh server console `"dev":"node --watch server.js"`
  - Inizialize server `app.listen(port, () => {})`
  - Define basic route '/'
  - Define route for Bacheca API

3. **Define Posts**
  - Create array of objects for blog posts
  - Objects key = id, title, body, img, tags[]

4. **Add Middleware for static assets**
  - Add middleware using `app.use(express.static('public'))` to serve static file

5. **Test the API**
  - Test endpoint using Postman
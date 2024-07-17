// "Create React App" tooling expects to find the WWW root here,
// so we simply use this file to import the ./www directory.
//
// For the backend, we set the container's entrypoint to src/api/index.js
import 'bootstrap/dist/css/bootstrap.min.css';

module.exports = require('./frontend')

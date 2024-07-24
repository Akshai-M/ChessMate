
const config = require('../config');

const myIo = require('./sockets/io'),
      routes = require('./routes/routes');


console.log(`http://localhost:${config.port}`);

const Handlebars = handlebars.create({
  extname: '.html', 
  partialsDir: path.join(__dirname, '..', 'front', 'views', 'partials'), 
  defaultLayout: false,
  helpers: {}
});
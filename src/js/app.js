require('../css/style.css');
const $ = require('jquery');
const people = require('./people');

people.forEach(item => {
  $('body').append(`<h2>${item.name} is ${item.age}.</h2>`);
})

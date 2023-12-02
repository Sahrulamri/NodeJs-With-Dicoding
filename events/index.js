const { EventEmitter } = require('events');

const myEmitter = new EventEmitter();

const birthdayEventListener = ({name}) => {
    console.log(`Happy Birthday ${name}!`);
  }

  myEmitter.on('Happy Birtday', birthdayEventListener);

  myEmitter.emit('Happy Birtday', { name: 'Amri' });
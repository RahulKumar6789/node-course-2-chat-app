var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');

  socket.emit('createMessage', {
    from: 'Rahul',
    text: 'Hey. This is Rahul'
  });
});

socket.on('disconnect', function () {
  console.log('Disconnect from server');
});

socket.on('newMessage', function (message) {
  console.log('newMessage', message);
});

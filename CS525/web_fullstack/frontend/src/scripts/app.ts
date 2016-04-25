System.config({
  packages: {
    scripts: {
      format: 'register',
      defaultExtension: 'js'
    }
  }
});
System.import('scripts/main')
.then(null, console.error.bind(console));

var socket = io();
socket.emit('test', 'ray wang');
socket.on('test', function(msg:string) {
  console.log(msg);
});

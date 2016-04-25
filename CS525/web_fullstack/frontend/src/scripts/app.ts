var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 2,
    center: { lat: 30, lng: 5 },
    scrollwheel: false,
    draggable: false,
    mapTypeControl: false,
    zoomControl: false,
    disableDoubleClickZoom: true,
    streetViewControl: false
  });
}

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

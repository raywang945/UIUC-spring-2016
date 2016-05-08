var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 2,
    center: { lat: 30, lng: 5 },
    mapTypeControl: false,
    streetViewControl: false
  });
  map.addListener('idle', function() {
    $.getJSON('/api/range_rank/', map.getBounds().toJSON(), function(json:any) {
      $('#local-rank').html(_.reduce(json, function(memo:string, elem:string) {
        return memo + '<li>' + elem + '</li>';
      }, ''));
    });
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
socket.on('world.tweet', function(tweet:any) {
  var marker = new google.maps.Marker({
    position: tweet.position,
    map: map
  });
  var infoWindow = new google.maps.InfoWindow({
    content: tweet.content,
    maxWidth: 200
  });
  infoWindow.open(map, marker);
  setTimeout(function() {
    marker.setMap(null);
  }, 10000);
});

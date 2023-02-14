// Skills
$('.skill').waypoint(function () {
    $('.progress .progress-bar').each(function () {
        $(this).css("width", $(this).attr("aria-valuenow") + '%');
    });
}, {offset: '80%'});

function initMap(){
  var location = {lat:6.500210, lng:3.302700};
  var map = new google.maps.Map(document.getElementById("map"),{
      zoom:4,
      center: location
  }); 
  var marker = new google.maps.Marker({
      position: location,
      map:map
  }); 
}

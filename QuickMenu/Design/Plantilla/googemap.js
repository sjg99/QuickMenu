function myMap() {
    // var la=prompt('Ingrese latitud:','');  
    // var lo=prompt('Ingrese longitud:','');  
    
    var lat = 7.064735;
    var lon = -73.093399;
    myCenter = new google.maps.LatLng(lat, lon);
    var mapOptions = {
        center: myCenter,
        zoom: 15,
        scrollwheel: false,
        draggable: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("googlemap"), mapOptions);

    var marker = new google.maps.Marker({
        position: myCenter,
    });
    marker.setMap(map);
}

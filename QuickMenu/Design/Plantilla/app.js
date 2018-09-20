var divMap = document.getElementById('googlemap');
navigator.geolocation.getCurrentPosition( fn_ok, fn_mal );
function fn_mal(){}
function fn_ok( rta ){
    var lat =  rta.coords.latitude;
    var lon = rta.coords.longitude;
    var gLatLon = new google.maps.LatLon(lat, lon);
    var objConfig = {
        zoom: 17,
        center: gLatLon
    }
    var gMap = new google.maps.Map (divMap, objConfig);
}
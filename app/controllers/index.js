Ti.App.GeoApp = {};

Ti.Geolocation.preferredProvider = Titanium.Geolocation.PROVIDER_GPS;
Ti.Geolocation.purpose = "testing";
Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_BEST;
Titanium.Geolocation.distanceFilter = 10;

if( Titanium.Geolocation.locationServicesEnabled === false ) {
    Ti.API.debug('Your device has GPS turned off. Please turn it on.');
}


function updatePosition(e) {

    if( ! e.success || e.error ) {
        alert("Unable to get your location.");
        Ti.API.debug(JSON.stringify(e));
        Ti.API.debug(e);
        return;
    }

    Ti.App.fireEvent("app:got.location", {
        "coords" : e.coords
    });
};

Ti.App.addEventListener("app:got.location", function(d) {
    Ti.App.GeoApp.f_lng = d.longitude;
    Ti.App.GeoApp.f_lat = d.latitude;
    Ti.API.debug(JSON.stringify(d));
    Ti.Geolocation.removeEventListener('location', updatePosition);

});


Titanium.Geolocation.getCurrentPosition( updatePosition );    
Titanium.Geolocation.addEventListener( 'location', updatePosition );  

$.index.open();
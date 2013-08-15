function Controller() {
    function updatePosition(e) {
        if (!e.success || e.error) {
            alert("Unable to get your location.");
            Ti.API.debug(JSON.stringify(e));
            Ti.API.debug(e);
            return;
        }
        Ti.App.fireEvent("app:got.location", {
            coords: e.coords
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    var __alloyId1 = [];
    $.__views.annotation1 = Ti.Map.createAnnotation({
        id: "annotation1"
    });
    __alloyId1.push($.__views.annotation1);
    $.__views.__alloyId2 = Ti.Map.createAnnotation({
        title: "Palo Alto",
        latitude: "37.47",
        longitude: "-122.12",
        id: "__alloyId2"
    });
    __alloyId1.push($.__views.__alloyId2);
    $.__views.__alloyId3 = Ti.Map.createAnnotation({
        title: "Dominion Enterprises",
        latitude: "36.8476379",
        longitude: "-76.2916683",
        id: "__alloyId3"
    });
    __alloyId1.push($.__views.__alloyId3);
    $.__views.annotation3 = Ti.Map.createAnnotation({
        id: "annotation3"
    });
    __alloyId1.push($.__views.annotation3);
    $.__views.__alloyId4 = Alloy.createController("annotationView", {
        title: "Sunnyvale",
        latitude: "37.37",
        longitude: "-122.03",
        id: "__alloyId4"
    });
    __alloyId1.push($.__views.__alloyId4.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId5 = Alloy.createController("annotationView", {
        title: "Dominion Enterprises",
        latitude: "36.8476379",
        longitude: "-76.2916683",
        id: "__alloyId5"
    });
    __alloyId1.push($.__views.__alloyId5.getViewEx({
        recurse: true
    }));
    $.__views.map = Ti.Map.createView({
        annotations: __alloyId1,
        ns: Ti.Map,
        id: "map"
    });
    $.__views.index.add($.__views.map);
    $.__views.__alloyId6 = Alloy.createController("overlay", {
        id: "__alloyId6",
        __parentSymbol: $.__views.map
    });
    $.__views.__alloyId6.setParent($.__views.map);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Ti.App.GeoApp = {};
    Ti.Geolocation.preferredProvider = Titanium.Geolocation.PROVIDER_GPS;
    Ti.Geolocation.purpose = "testing";
    Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_BEST;
    Titanium.Geolocation.distanceFilter = 10;
    false === Titanium.Geolocation.locationServicesEnabled && Ti.API.debug("Your device has GPS turned off. Please turn it on.");
    Ti.App.addEventListener("app:got.location", function(d) {
        Ti.App.GeoApp.f_lng = d.longitude;
        Ti.App.GeoApp.f_lat = d.latitude;
        Ti.API.debug(JSON.stringify(d));
        Ti.Geolocation.removeEventListener("location", updatePosition);
    });
    Titanium.Geolocation.getCurrentPosition(updatePosition);
    Titanium.Geolocation.addEventListener("location", updatePosition);
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
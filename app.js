window.addEventListener("load", function() {
  console.log("Hello World!");
  initMap('map');
});
//

var map = null;
var sidebar = null;
var minDate = '<div jwcid="@Insert" value="ognl:minDate"/>';
var osmAttribution = 'Map-Data <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-By-SA</a> by <a href="http://openstreetmap.org/">OpenStreetMap</a> contributors';
var vesseltrackerUrl = 'http://maps.vesseltracker.com/vesseltracker/{z}/{x}/{y}.png';
var vesseltrackerLayer = new L.tileLayer(vesseltrackerUrl, {attribution: osmAttribution, continuousWorld:false});
var seachartsUrl = 'http://maps.vesseltracker.com/seacharts/{z}/{x}/{y}.png';
var seachartsLayer = new L.tileLayer(seachartsUrl, {attribution: osmAttribution, continuousWorld:false, minZoom:7});

var control = null;
function initMap(mapelement) {
  map = L.map(mapelement,
    {
      center: [10.59, 50.78],
      zoom: 3,
      maxZoom: 18,
      worldCopyJump: true,
      zoomControl:false,
      layers: [vesseltrackerLayer]
    }
  );
  baseLayers = {
    //"Vesseltracker": vesseltrackerLayer,
    //"Vesseltracker Old": vesseltrackerOldLayer
  };
  L.control.scale().addTo(map);
  control = new L.Control.Layers(baseLayers, {"SeaCharts":seachartsLayer}, {collapsed: false}).addTo(map);
//   L.control.mousePosition({"position" : "topright"}).addTo(map);
  L.control.zoom( {position:'topleft'}).addTo(map)
}
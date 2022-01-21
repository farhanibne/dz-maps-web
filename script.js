mapboxgl.accessToken =
  "pk.eyJ1IjoiZmFyaGFuLXNhaWYiLCJhIjoiY2t5bnlmcmMyMGd6eDJ2bjlmd2FpM2k4NiJ9.UATCTRbAEvLx2VKaeOr-ww"

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true
})

function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
  setupMap([,91.8079189, 22.3195315])
}

function setupMap(center) {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: center,
    zoom: 15
  })

  const nav = new mapboxgl.NavigationControl()
  map.addControl(nav)

  var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken
  })

  map.addControl(directions, "top-left")
}
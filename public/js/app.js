/* global google */
console.log('js loaded');
const input = document.getElementById('places-autocomplete');

if(input) {
  const searchBox = new google.maps.places.SearchBox(input);

  searchBox.addListener('places_changed', function() {
    const places = searchBox.getPlaces();

    if(places.length === 0) return false;

    places.forEach(function(place){
      if(!place.geometry) {
        console.log('Returned place contains no geometry');
        return;
      }
    });
  });
}

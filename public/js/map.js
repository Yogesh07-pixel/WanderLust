// Check if the coordinates are valid
if (listing.coordinates.lat && listing.coordinates.lon) {
  // Set the map view to the new coordinates
  var map = L.map("map").setView(
    [listing.coordinates.lat, listing.coordinates.lon],
    6
  );

  // Add the tile layer (this part stays the same)
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  // Add a marker at the new coordinates
  L.marker([listing.coordinates.lat, listing.coordinates.lon])
    .addTo(map)
    .bindPopup(
      `<h4>${listing.title}</h4><p>Exact location will be provided after Booking!`
    )
    .openPopup();
} else {
  console.log("Invalid coordinates received.");
}

var map = L.map("map").setView([28.679079, 77.06971], 9); // Initial

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([28.679079, 77.06971]) // Latitude, Longitude
  .addTo(map)
  .bindPopup("You are Here.")
  .openPopup();

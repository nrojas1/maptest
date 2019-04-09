let map = L.map('map', {crs:L.CRS.EPSG4326}).setView([2,-70.4], 3);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.control.scale({imperial:false}).addTo(map);

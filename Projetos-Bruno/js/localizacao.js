  function showMap(pos){
      var mymap = L.map('mapid').setView([pos.coords.latitude, pos.coords.longitude], 13);
      L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.streets',
      accessToken: 'pk.eyJ1IjoiYnJ1bm8yMzAzIiwiYSI6ImNqbG4wdHBudTFlNWwzd3FuZWkyZThjbWkifQ.7PxdjxI-Q33AiWYJMTx4Rw'
      }).addTo(mymap);
      var marker = L.marker([pos.coords.latitude, pos.coords.longitude]).addTo(mymap);
    }

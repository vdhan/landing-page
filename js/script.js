/*
Landing page
Copyright (C) 2016 Hoàng Ân

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

function getYear(year) {
  var current = new Date().getFullYear();
  document.write(year + (current > year && '-' + current));
}

function loadJSON(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var data = JSON.parse(xhr.responseText);
      callback(data);
    }
  };
  xhr.open('GET', url);
  xhr.send();
}

document.addEventListener('DOMContentLoaded', function() {
  var rellax = new Rellax('.rellax'); // parallax

  // carousel
  $('#slippry').slippry({
    speed: 800,
    pause: 3000
  });

  // panorama
  loadJSON('tour.json', function(res) {
    pannellum.viewer('demo', res);
  })

  loadJSON('world.json', function(res) {
    pannellum.viewer('world', res);
  });

  // image modal
  var modal = document.getElementById('myModal');
  modal.style.display = 'block';

  var span = modal.querySelector('span');
  span.onclick = function() {
      modal.style.display = 'none';
  }

  document.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  }
});
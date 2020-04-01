// window.open = function() {};
//            window.print = function() {};
//            // Support hover state for mobile.
//            if (false) {
//                window.ontouchstart = function() {};
//            }

function lit() {
 var x = document.getElementById("candle-flame");
 var y = document.getElementById("candle-button");
 var z = document.getElementById("title-card");

 if (x.style.display == "block") {
   x.style.display = "none";
   y.innerHTML = "Light The Candle";
   z.innerHTML = "May your wishes comes true... <br> Happy Birthday Bhumika!";
 } else {
   x.style.display = "block";
   y.innerHTML = "Blow The Candle";
   z.innerHTML = "Now make your wish and blow it";
 }
}

let d = new Date();
document.body.innerHTML = "<h4>swag " + d + "</h4>"

var span = document.getElementById('span');

function time() {
  var d = new Date();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();
  span.textContent = 
    ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2);
}

setInterval(time, 1000);



window.onload = function() {
  document.getElementById("my_audio").play();
}

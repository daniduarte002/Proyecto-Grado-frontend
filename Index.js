window.addEventListener("DOMContentLoaded", function() {
    var images = document.getElementsByTagName("img");
    for (var i = 0; i < images.length; i++) {
      images[i].addEventListener("contextmenu", function(e) {
        e.preventDefault();
      });
    }
  });
  
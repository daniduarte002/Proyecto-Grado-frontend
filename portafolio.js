document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  });
  
  var galleryItems = document.querySelectorAll('.gallery-item img');
  galleryItems.forEach(function(img) {
    img.addEventListener('contextmenu', function(e) {
      e.preventDefault();
    });
  });
  
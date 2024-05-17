document.addEventListener("DOMContentLoaded", function() {
    const photos = document.querySelectorAll(".photo");

    photos.forEach(photo => {
        photo.addEventListener("click", function() {
            this.classList.toggle("enlarged");
        });
    });
});
function myFunction(x) {
    x.classList.toggle("change");
}
function toggleDropdown() {
    var dropdownContent = document.getElementById("dropdownContent");
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
      slowAnimation(dropdownContent);
    }
  }
  
  function slowAnimation(element) {
    var height = 0;
    var id = setInterval(frame, 10);
    function frame() {
      if (height >= 150) {
        clearInterval(id);
      } else {
        height += 5;
        element.style.height = height + 'px';
      }
    }
  }
  document.addEventListener("DOMContentLoaded", function() {
    const photos = document.querySelectorAll(".photo");
    let currentIndex = 0;

    function showPhoto(index) {
        if (index >= 0 && index < photos.length) {
            photos.forEach((photo, i) => {
                if (i === index) {
                    photo.classList.add("enlarged");
                } else {
                    photo.classList.remove("enlarged");
                }
            });
            currentIndex = index;
        }
    }

    function showNextPhoto() {
        showPhoto(currentIndex + 1);
    }

    function showPreviousPhoto() {
        showPhoto(currentIndex - 1);
    }

    photos.forEach((photo, i) => {
        photo.addEventListener("swipeleft", function() {
            showNextPhoto();
        });
        photo.addEventListener("swiperight", function() {
            showPreviousPhoto();
        });
    });

    document.addEventListener("keydown", function(event) {
        if (event.key === "ArrowLeft") {
            showPreviousPhoto();
        } else if (event.key === "ArrowRight") {
            showNextPhoto();
        }
    });
});

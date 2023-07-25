 


/* ------ Popupp------ */
	    var openPopupButton = document.querySelector('.openPopup');
	    var closePopupButton = document.getElementById('closePopup');
	    var popupOverlay = document.getElementById('popupOverlay');

	    openPopupButton.addEventListener('click', function() {
	      popupOverlay.style.display = 'block';
	      document.body.style.overflow = 'hidden';
	    });

	    closePopupButton.addEventListener('click', function() {
	      popupOverlay.style.display = 'none';
	      document.body.style.overflow = 'auto';
	    });

    
        // var openPopupButtonRsvp = document.getElementById('openPopup-rsvp');
        // var closePopupButtonRsvp = document.getElementById('closePopup-rsvp');
        // var popupOverlayRsvp = document.getElementById('popupOverlay-rsvp');

        // openPopupButtonRsvp.addEventListener('click', function() {
        //   popupOverlayRsvp.style.display = 'block';
        //   document.body.style.overflow = 'hidden';
        // });

        // closePopupButtonRsvp.addEventListener('click', function() {
        //   popupOverlayRsvp.style.display = 'none';
        //   document.body.style.overflow = 'auto';
        // });


/* ------ Scroll Button------ */
window.addEventListener('scroll', function() {
  var scrollButton = document.querySelector('.btn-bottom');
  if (window.pageYOffset > 100) {
    scrollButton.classList.add('show');
  } else {
    scrollButton.classList.remove('show');
  }
});

document.querySelector('.btn-bottom').addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});



/* ------ Active Scroll ------ */



/* ------ Play auido ------ */


 var mySong = document.getElementById("mySong");
    var icon = document.getElementById("click");

    click.onclick = function () {
        if (mySong.paused) {
            mySong.play();
        } else {
            mySong.pause();
        }
    };


    document.querySelector("#open-invitation").addEventListener("click", function(){
        document.querySelector(".start-page").style.display = "none";
        document.querySelector(".start-wraper").style.display = "none";
        document.body.style.overflow = 'auto';
    });

     document.querySelector(".start-wraper").addEventListener("click", function(){
        document.querySelector(".start-page").style.display = "none";
        document.querySelector(".start-wraper").style.display = "none";
       document.body.style.overflow = 'auto';
    });


  /* ------ Auto Height Img ------ */
  window.addEventListener('load', function() {
      const gambarList = document.querySelectorAll('.gambar');
      let maxTinggi = 200;
      
      // Dapatkan tinggi gambar terbesar
      gambarList.forEach(function(gambar) {
        if (gambar.clientHeight > maxTinggi) {
          maxTinggi = gambar.clientHeight;
        }
      });
      
      // Tetapkan tinggi yang sama untuk semua gambar
      gambarList.forEach(function(gambar) {
        gambar.style.height = maxTinggi + 'px';
      });
    });

 
  
 /* ------ Contdown Timer ------ */
    (function () {
      const second = 1000,
            minute = second * 60,
            hour = minute * 60,
            day = hour * 24;
    
      //I'm adding this section so I don't have to keep updating this pen every year :-)
      //remove this if you don't need it
      let today = new Date(),
          dd = String(today.getDate()).padStart(2, "0"),
          mm = String(today.getMonth() + 1).padStart(2, "0"),
          yyyy = today.getFullYear(),
          nextYear = yyyy + 1,
          dayMonth = "09/16/",
          birthday = dayMonth + yyyy;
      
      today = mm + "/" + dd + "/" + yyyy;
      if (today > birthday) {
        birthday = dayMonth + nextYear;
      }
      //end
      
      const countDown = new Date(birthday).getTime(),
          x = setInterval(function() {    
    
            const now = new Date().getTime(),
                  distance = countDown - now;
    
            document.getElementById("days").innerText = Math.floor(distance / (day)),
              document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
              document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
              document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
    
            //do something later when date is reached
            if (distance < 0) {
              document.getElementById("headline").innerText = "It's my birthday!";
              document.getElementById("countdown").style.display = "none";
              document.getElementById("content").style.display = "block";
              clearInterval(x);
            }
            //seconds
          }, 0)
      }());
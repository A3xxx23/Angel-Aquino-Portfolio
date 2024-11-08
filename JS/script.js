// toggle icon navbar

const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const navbg = document.querySelector('.nav-bg');
menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
  navbg.classList.toggle('active');
});

// changer letters
var typed = new Typed('.text-animation', {
  strings: ['Frontend Dev', ' Web Designer ', ' UX/UI Designer '],
  typeSpeed: 80,
  backSpeed: 100,
  backDelay: 1200,
  loop: true,
});

// Darkmode icon change
document.addEventListener('DOMContentLoaded', () => {
  let darkModeIcon = document.querySelector('#icon-darkmode');

  const checkDarkModePreference = () => {
      const darkModePreference = localStorage.getItem('darkMode');
      if (darkModePreference === 'enabled') {
          document.body.classList.add('dark-mode');
          darkModeIcon.querySelector('i').classList.remove('bx-moon');
          darkModeIcon.querySelector('i').classList.add('bx-sun');
      } else {
          document.body.classList.remove('dark-mode');
          darkModeIcon.querySelector('i').classList.remove('bx-sun');
          darkModeIcon.querySelector('i').classList.add('bx-moon');
      }
  };

  checkDarkModePreference();

  darkModeIcon.onclick = () => {
     
      document.body.classList.toggle('dark-mode');
      document.body.classList.toggle('light-mode'); 

      if (document.body.classList.contains('dark-mode')) {
          localStorage.setItem('darkMode', 'enabled');
          darkModeIcon.querySelector('i').classList.remove('bx-moon');
          darkModeIcon.querySelector('i').classList.add('bx-sun');
      } else {
          localStorage.setItem('darkMode', 'disabled');
          darkModeIcon.querySelector('i').classList.remove('bx-sun');
          darkModeIcon.querySelector('i').classList.add('bx-moon');
      }
  };
});

var container = document.getElementById('container')
        var slider = document.getElementById('slider');
        var slides = document.getElementsByClassName('slide').length;
        var buttons = document.getElementsByClassName('btn');

        var currentPosition = 0;
        var currentMargin = 0;
        var slidesPerPage = 0;
        var slidesCount = slides - slidesPerPage;
        var containerWidth = container.offsetWidth;
        var prevKeyActive = false;
        var nextKeyActive = true;

        window.addEventListener("resize", checkWidth);

        function checkWidth() {
            containerWidth = container.offsetWidth;
            setParams(containerWidth);
        }

        function setParams(w) {
            if (w < 551) {
                slidesPerPage = 1;
            } else {
                if (w < 901) {
                    slidesPerPage = 3;
                } else {
                    if (w < 1101) {
                        slidesPerPage = 3;
                    } else {
                        slidesPerPage = 4;
                    }
                }
            }
            slidesCount = slides - slidesPerPage;
            if (currentPosition > slidesCount) {
                currentPosition -= slidesPerPage;
            };
            currentMargin = - currentPosition * (100 / slidesPerPage);
            slider.style.marginLeft = currentMargin + '%';
            if (currentPosition > 0) {
                buttons[0].classList.remove('inactive');
            }
            if (currentPosition < slidesCount) {
                buttons[1].classList.remove('inactive');
            }
            if (currentPosition >= slidesCount) {
                buttons[1].classList.add('inactive');
            }
        }

        setParams();

        function slideRight() {
            if (currentPosition != 0) {
                slider.style.marginLeft = currentMargin + (100 / slidesPerPage) + '%';
                currentMargin += (100 / slidesPerPage);
                currentPosition--;
            };
            if (currentPosition === 0) {
                buttons[0].classList.add('inactive');
            }
            if (currentPosition < slidesCount) {
                buttons[1].classList.remove('inactive');
            }
        };

        function slideLeft() {
            if (currentPosition != slidesCount) {
                slider.style.marginLeft = currentMargin - (100 / slidesPerPage) + '%';
                currentMargin -= (100 / slidesPerPage);
                currentPosition++;
            };
            if (currentPosition == slidesCount) {
                buttons[1].classList.add('inactive');
            }
            if (currentPosition > 0) {
                buttons[0].classList.remove('inactive');
            }
        };

        $(document).ready(function () {
            $(".buttom-btn").click(function () {
                alert("Contact Me: angelemilioaquino6@gmail.com");
            });
        });

        document.querySelector('.btn-download').addEventListener('click', function (event) {
            event.preventDefault();

            const link = document.createElement('a');
        link.href = 'https://github.com/A3xxx23/Angel-Aquino-Portfolio/raw/main/Angel%20Aquino%20CV.pdf'; 
        link.download = 'Angel_Aquino_CV.pdf'; 
        document.body.appendChild(link);
        link.click(); 
        document.body.removeChild(link); 

            const modal = new bootstrap.Modal(document.getElementById('downloadModal'));
            modal.show();
        });




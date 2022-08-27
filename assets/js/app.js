let video = document.querySelector('.video'),
  play_button = document.querySelector('.play-btn'),
  intro = document.querySelector('.intro'),
  nav_toggle = document.querySelector('.nav-toggle'),
  nav = document.querySelector('.nav'),
  introHeight = intro.offsetHeight,
  header = document.querySelector('.header'),
  headerHeight = header.offsetHeight,
  scrollOffset = window.pageYOffset;

// Header fixed

window.addEventListener('scroll', () => {
  let scrollDistance = window.scrollY;

  if (scrollDistance >= introHeight) {
    header.classList.add('fixed');
    // intro.style.marginTop = `${headerHeight}px`;
  } else {
    header.classList.remove('fixed');
    // intro.style.marginTop = null;
  }
});

// Nav toggle

nav_toggle.addEventListener('click', function () {
  this.classList.toggle('active');
  nav.classList.toggle('active');
});

// Player

play_button.addEventListener('click', playOrPause, false);

function playOrPause() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

video.addEventListener(
  'ended',
  function () {
    video.load();
  },
  false
);

const root = document.documentElement;
const darkBackground = "#2b2b2b";
const lightBackground = "#fafafa";
const darkText = '#424242';
const lightText = '#fff';
const descrText = '#424242'

document.querySelector('body').addEventListener('click', () => {
  if (document.body.classList.contains('dark-theme')) {
    root.style.setProperty('--them-background', lightBackground);
    root.style.setProperty('--them-text', darkText);
    root.style.setProperty('--them-light-text', descrText);
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
  } else {
    root.style.setProperty('--them-background', darkBackground);
    root.style.setProperty('--them-text', lightText);
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
  };
});


// video playing

const videoPlay = document.querySelector('.video-controller--play');
const videoPause = document.querySelector('.video-controller--pause');
const video = document.querySelector('.video');
const barLine = document.querySelector('.bar__line');

videoPlay.addEventListener('click', () => {
  video.play();
  videoPlay.style.display = 'none';
  videoPause.style.display = 'block';
});

videoPause.addEventListener('click', () => {
  video.pause();
  videoPause.style.display = 'none';
  videoPlay.style.display = 'block';
});

video.ontimeupdate = function () {
  let percentage = (video.currentTime / video.duration) * 100;
  barLine.style.width = percentage + '%';
}

// menu
const burger = document.querySelector('.burger');
const close = document.querySelector('.close');
const menu = document.querySelector('.menu');
const body = document.body;

let keys = {
  ESC: 27,
};

function showMenu () {
  menu.classList.add('menu--showed');
  body.style.overflow = 'hidden';

  document.addEventListener('keydown', function(e){
    if (e.keyCode == keys.ESC) {
      closeMenu();
    };
  });
};

function closeMenu () {
  menu.classList.remove('menu--showed');
  body.style.overflow = 'initial';
}

burger.addEventListener('click', showMenu);
close.addEventListener('click', closeMenu);
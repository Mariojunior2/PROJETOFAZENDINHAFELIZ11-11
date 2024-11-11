var imageTracker = 'playImage';

document.getElementById('swapImage').onclick = function() {
    swapImage();
    playPause();
 };

 document.getElementById("stopImage").onclick = function() {
    stop();
  }

  document.getElementById("nextImage").onclick = function() {
    forward();
}

document.getElementById("backImage").onclick = function() {
    backward();
 }

 var swapImage = function () {
    var image = document.getElementById(swapImage);
    if (imageTracker == 'playImage') {
        image.src = 'assets/img/song-on.gif';
        imageTracker = 'pauseImage';
    } else {
        image.src = 'assets/img/song1.png';
        imageTracker = 'playImage';
    }
 };

 var musicTracker = 'noMusic';
 var audios = [];
 $(".song").each(function() { 
    var load = new Audio($(this).attr("url"));
    load.load();
    load.addEventListener('ended', function() {
        forward();
    });
    audios.push(load);
 });

 var activeTrack = 0;


 var playPause = function () {
    if (musicTracker == 'noMusic') {
        audios[activeTrack].play();
        musicTracker = 'playMusic';
    } else {
        audios[activeTrack].pause();
        musicTracker = 'noMusic';
    }
    showPlaying();
 };

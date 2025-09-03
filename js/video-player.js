document.addEventListener('DOMContentLoaded', function() {
  const videoContainers = document.querySelectorAll('.video-container');
  
  videoContainers.forEach(function(videoContainer) {
    const video = videoContainer.querySelector('video');
    const playButton = videoContainer.querySelector('.play-button-overlay');
    
    if (!video || !playButton) return;

    videoContainer.addEventListener('click', function(e) {
      e.preventDefault();
      if (video.paused) {
        video.play().then(() => {
          videoContainer.classList.add('playing');
          video.setAttribute('controls', 'true');
        }).catch(error => {
          console.warn('Video playback failed:', error.message);
          videoContainer.classList.add('error');
        });
      } else {
        video.pause();
        videoContainer.classList.remove('playing');
      }
    });

    video.addEventListener('play', function() {
      videoContainer.classList.add('playing');
      videoContainer.classList.remove('error');
      video.setAttribute('controls', 'true');
    });

    video.addEventListener('pause', function() {
      videoContainer.classList.remove('playing');
    });

    video.addEventListener('ended', function() {
      videoContainer.classList.remove('playing');
      video.removeAttribute('controls');
    });

    video.addEventListener('error', function(e) {
      console.warn('Video error:', e.target.error);
      videoContainer.classList.add('error');
      videoContainer.classList.remove('playing');
    });

    video.addEventListener('loadstart', function() {
      videoContainer.classList.remove('error');
    });
  });
});

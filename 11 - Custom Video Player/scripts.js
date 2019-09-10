
const useDOMElement = (selector) => {
	return document.querySelector(selector);
}

const togglePlayButton = useDOMElement('.player__buttontoggle');
	
const videoElement =  useDOMElement('.player__video');

const toggleVideoPlay = () => {
  if(videoElement.paused){
    videoElement.play();
    return;
  }
  videoElement.pause();
}

const initListeners = () => {
  togglePlayButton.addEventListener('click', toggleVideoPlay);
  }


initListeners();

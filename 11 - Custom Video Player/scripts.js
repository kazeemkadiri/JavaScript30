
const useDOMElement = (selector, multiple = false) => {
	return multiple ? document.querySelectorAll(selector) : document.querySelector(selector);
}

const togglePlayButton = useDOMElement('.player__buttontoggle');
	
const videoElement =  useDOMElement('.player__video');

const skipButtons = useDOMElement('.player__button', true); //true indicates multiple element selection

const sliderElements = useDOMElement('.player__slider', true);

const progress = useDOMElement('.progress');

const progressBar = useDOMElement('.progress__filled');

const toggleVideoPlay = () => {
  if(videoElement.paused){
    videoElement.play();
    return;
  }
  videoElement.pause();
}

const skip = (e) => {
		
	videoElement.currentTime += parseFloat(e.target.dataset.skip);
	
}

const handleRangeUpdate = (e) => {

		videoElement[e.target.name] = e.target.value;

}

const handleProgress = (e) => {
		progressBar.style.flexBasis = ((videoElement.currentTime / videoElement.duration) * 100) + "%";
	
}

const scrub = (e) => {
	
	videoElement.currentTime = (e.offsetX / progressBar.offsetWidth) * videoElement.duration;
	
}

const initListeners = () => {
  togglePlayButton.addEventListener('click', toggleVideoPlay);
  
  skipButtons.forEach( skipButton => {
  		skipButton.addEventListener('click', skip);
  		
  });
 
 sliderElements.forEach( sliderElement => {
 	sliderElement.addEventListener('change', handleRangeUpdate);
 	
 });
 
 videoElement.addEventListener('timeupdate', handleProgress);

progressBar.addEventListener('click', scrub);

  }


initListeners();

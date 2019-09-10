
const useDOMElement = (selector, multiple = false) => {
	return multiple ? document.querySelectorAll(selector) : document.querySelector(selector);
}

const togglePlayButton = useDOMElement('.player__buttontoggle');
	
const videoElement =  useDOMElement('.player__video');

const skipButtons = useDOMElement('.player__button', true); //true indicates multiple element selection

const sliderElements = useDOMElement('.player__slider', true);

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

const initListeners = () => {
  togglePlayButton.addEventListener('click', toggleVideoPlay);
  
  skipButtons.forEach( skipButton => {
  		skipButton.addEventListener('click', skip);
  		
  });
 
 sliderElements.forEach( sliderElement => {
 	sliderElement.addEventListener('change', handleRangeUpdate);
 	
 });
 
  }


initListeners();

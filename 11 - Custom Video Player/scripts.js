
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
    togglePlayButton.textContent = "| |";
    
    return;
  }
  
  videoElement.pause();
  togglePlayButton.textContent = "►";
  
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

const scrub = (e, ev) => {
	console.log(ev);
	videoElement.currentTime = (e.offsetX / progress.offsetWidth) * videoElement.duration;
	
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

progress.addEventListener('click', scrub);

let mousedown = false;
progress.addEventListener('mousemove', (e) => mousedown && scrub(e, 'mouse'));

progress.addEventListener('mousedown', () => mousedown = true );

progress.addEventListener('mouseup', () => mousedown = false );

  }


initListeners();

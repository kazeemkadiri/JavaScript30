//Add event listener to all timer buttons
const TimerModule = (()=>{
	
	const timerCount = {
		seconds: 0,
		minutes: 0,
		time: 0,
		timerInterval: null
	};
	
const addTimerButtonListeners = () => {
  
  document.querySelectorAll(".timer__button").forEach(function(timerButton){
	
  const time = timerButton.dataset.time;

  timerButton.addEventListener('click',	() => {
	  
	  timerCount.time = time;

	  startTimer(); 	
	});//End timer event listener
	
  });
};

const decrementTimeCount = () => {
	
	if(timerCount.seconds === 0){
		
		if(timerCount.minutes > 0){
		  timerCount.minutes -= 1;
		}
		
		timerCount.seconds = 60;
		
	}
	
	timerCount.seconds -= 1;
	
}

const updateDOMTimeCount = () => {

	const { minutes, seconds } = timerCount;

	document.querySelector('.display__time-left').textContent 
	= `${(minutes < 10 ? '0' + minutes : minutes )} : ${seconds < 10 ? '0' + seconds : seconds}`;

}

const resetTimerCountValues = () => {
	timerCount.minutes = 0;
	timerCount.seconds = 0;
}

const startTimer = () => {
	
	let { time, timerInterval } = timerCount;

	if(parseInt(timerInterval)){

	  clearInterval(timerInterval);

	}
	
	  timerCount.minutes = (time < 60) ? 0: (time / 60).toFixed(0); 
	 
	  timerCount.seconds = (timerCount.time % 60);
	 

	  timerCount.timerInterval = setInterval(() => {

	    updateDOMTimeCount();

		  if((timerCount.minutes === 0) && (timerCount.seconds === 0)){
		
		    clearInterval(timerInterval);
				
		    resetTimerCountValues();
			  
			return;

		  }

		  decrementTimeCount();
			
		},1000);
		
}

const AddcustomTimeInputListener = () => {

  document.querySelector('input[name="minutes"]').addEventListener('keydown', e => {
	
    if( e.key.toUpperCase() === "ENTER" ){

	  timerCount.time = e.target.value;

	  startTimer();
	}

  });

}

const preventSubmit = () => {

  document.querySelector('#custom').addEventListener('submit', e => {
	
	e.preventDefault();

  });

}

function init(){		
	addTimerButtonListeners();
	AddcustomTimeInputListener();
}

return {
	init,
	preventSubmit
};

})();

TimerModule.init();
TimerModule.preventSubmit();
//Add listener for custom time input
//Link to function to display timer

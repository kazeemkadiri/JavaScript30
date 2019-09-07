//Add event listener to all timer buttons
(()=>{
	
	const timerCount = {
		seconds: 0,
		minutes: 0
	};
	
function addTimerButtonListeners(){
		 document.querySelectorAll(".timer__button").forEach(function(timerButton){
		 const time = timerButton.dataset.time;
		 	timerButton.addEventListener('click',	function(){
		 		timerCount.time = time;
		 		startTimer(); 	
		 		});//End timer event listener
		 	
		 });
	};

function decrementTimeCount(){
	
	if(timerCount.seconds === 0){
		
		timerCount.minutes -= 1;
		
		timerCount.seconds = 60;
		
	}
	
	timerCount.seconds -= 1;
	
}

function updateDOMTimeCount(){
	document.querySelector('.display__time-left').textContent = `${(timerCount.minutes)}
	:${timerCount.seconds}`;
}

function startTimer(){
	 
	 const timerButtonMinutes = (timerCount.time / 60).toFixed(0); 
	 
	 const timerButtonSeconds = (timerCount.time % 60);
	 
		const timerInterval = setInterval(function(){
			if((timerButtonMinutes === timerCount.minutes)
				&& (timerButtonSeconds === timerCount.seconds)){
					clearInterval(timerInterval);
				}
				
			decrementTimeCount();
			
			updateDOMTimeCount();
			
		},100);
	}
	
function init(){		addTimerButtonListeners();
	}
	
	init();
	
})()
//write function to run and display timer in DOM
//COMMIT
//Add listener for custom time input
//Link to function to display timer

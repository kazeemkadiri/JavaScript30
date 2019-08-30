(() => {
    const playAudio = (audiokey) => {
      
      const audioElement = document.querySelector(`audio[data-key="${audiokey}"]`);

      if(!audioElement) return;

        audioElement.play();
    }
    
    const addListenerForDrumButtons = () => {

        const drumButtons = document.querySelectorAll('.key');

        drumButtons.forEach( drumButton => {

          drumButton.addEventListener('click', (e) => {
            
            const audiokey = drumButton.dataset.key;

            playAudio(audiokey);

          })
          
        });

    }
    
    addListenerForDrumButtons();
})()
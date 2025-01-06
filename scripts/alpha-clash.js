// function play()
// {
//     // console.log('play start now !!');

//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     const playgroundSection = document.getElementById('play-ground');
//     // console.log(playgroundSection.classList);
//     playgroundSection.classList.remove('hidden');
    
// }




function handleKeyboardButtonPress(event)
{

   // Get Expected to press

  const playerPressed = event.key;
  const currentAlphabetElement = document.getElementById('current-alphabet');
  const currentAlphabet = currentAlphabetElement.innerText;

  const expectedAlphabet = currentAlphabet.toLowerCase();


   // Check matched the Alphabet or, not

   if(playerPressed === expectedAlphabet)
      {
      console.log('you got a point !');
      console.log('You have pressed the correct alphabet', expectedAlphabet);

      const currentScore = getTextElementValueByID('current-score');
      
      const updatedScore = currentScore + 1;

      setTextElementValueByID('current-score', updatedScore);
      
       //-------------------------------------------------
      //Update Score:
      // const currentScoreElement = document.getElementById('current-score');
      
      // const currentScoreText = currentScoreElement.innerText;
      // const currentScore = parseInt(currentScoreText);
      // console.log(currentScore);
      
      // const newScore = currentScore + 1;  
      // currentScoreElement.innerText = newScore ;
      
      // Start a new Round
      removeBackgroundColor(expectedAlphabet);
      gameStart();
      
      }
      else{
         console.log('you pressed the wrong alphabet and missed a point');

         const currentLife = getTextElementValueByID('current-life');
         const updatedLife = currentLife - 1;

         setTextElementValueByID('current-life', updatedLife);

         if(updatedLife === 0)
            {
              gameOver();
            }
              

         // ----------------------------------------------------------------
         // life count

         // const currentLifeElement = document.getElementById('current-life');
         // const currentLifeText = currentLifeElement.innerText;
         // const currentLife = parseInt(currentLifeText);

         // const newLife = currentLife - 1;
         // currentLifeElement.innerText = newLife;

    
          

      }
   
   
}


document.addEventListener('keyup', handleKeyboardButtonPress);


function gameStart()
{
   //  step-1: generate a random Alphabet

   const alphabet = getARandomAlphabet();
   
   
   // step-2: show the random alphabet into the screen 

   const currentAlphabet = document.getElementById('current-alphabet');
   currentAlphabet.innerText = alphabet;

   // step-3: set the background Color to the keyboard Alphabet

   setBackgroundColor(alphabet);
   
}

function play()
{
   hideElementByID('home-screen');
   hideElementByID('score-page');
   showElementByID('play-ground');

 //   reset Score and life
  
   setTextElementValueByID('current-score',0);
   setTextElementValueByID('current-life',5);


   gameStart();
}

function gameOver()
{
   hideElementByID('play-ground');
   showElementByID('score-page');
}
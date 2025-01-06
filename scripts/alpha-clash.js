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
  console.log(playerPressed,expectedAlphabet);

   // Check matched the Alphabet or, not

   if(playerPressed === expectedAlphabet)
      {
      console.log('you pressed the correct alphabet');
      
      }
      else{
         console.log('you pressed the wrong alphabet and missed a point');
      }
   
   
}


document.addEventListener('keyup', handleKeyboardButtonPress);

function gameStart()
{
   //  step-1: generate a random Alphabet

   const alphabet = getARandomAlphabet();
   console.log('Your random alphabet is ',alphabet);
   
   // step-2: show the random alphabet into the screen 

   const currentAlphabet = document.getElementById('current-alphabet');
   currentAlphabet.innerText = alphabet;

   // step-3: set the background Color to the keyboard Alphabet

   setBackgroundColor(alphabet);
   
}

function play()
{
   hideElementByID('home-screen');
   showElementByID('play-ground');
   gameStart();
}
// function play()
// {
//     // console.log('play start now !!');

//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     const playgroundSection = document.getElementById('play-ground');
//     // console.log(playgroundSection.classList);
//     playgroundSection.classList.remove('hidden');
    
// }



function gameStart()
{
   //  step-1: generate a random Alphabet

   const alphabet = getARandomAlphabet();
   console.log('Your random alphabet is ',alphabet);
   
   // step-2: show the random alphabet into the screen 

   const currentAlphabet = document.getElementById('current-alphabet');
   currentAlphabet.innerText = alphabet;
   
}

function play()
{
   hideElementByID('home-screen');
   showElementByID('play-ground');
   gameStart();
}
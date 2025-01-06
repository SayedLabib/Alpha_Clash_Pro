function hideElementByID(elementID)
{
   const element = document.getElementById(elementID);
   elementID = element.classList.add('hidden');
}

function showElementByID(elementID)
{
  const element = document.getElementById(elementID);
  elementID = element.classList.remove('hidden');
}


function setBackgroundColor(elementID)
{
   const element = document.getElementById(elementID);
   elementID = element.classList.add('bg-orange-400');

}

function getTextElementValueByID(elementID)
{
    const element = document.getElementById(elementID);
    const elementValueText = element.innerText;
    const elementValue = parseInt(elementValueText);

    return elementValue;
}

function setTextElementValueByID(elementID, value)
{
  const element  = document.getElementById(elementID);
  element.innerText = value;
}




function removeBackgroundColor(elementID)
{
  const element = document.getElementById(elementID);
  elementID = element.classList.remove('bg-orange-400');
}

function getARandomAlphabet()
{

  // Create or, get an Alphabet
  const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
  const alphabets = alphabetString.split('');
  // console.log(alphabets);
  
  // generate a Random Number

  const randomNumber  = Math.random()*25;
  const index = Math.round(randomNumber);
  
  
  const alphabet = alphabets[index];
  // console.log(index,alphabet);
  return alphabet;



}
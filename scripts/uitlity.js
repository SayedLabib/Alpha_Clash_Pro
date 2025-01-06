function hideElementByID(elementID)
{
   const element = document.getElementById(elementID);
   element.classList.add('hidden');
}

function showElementByID(elementID)
{
  const element = document.getElementById(elementID);
  elementID = element.classList.remove('hidden');
}
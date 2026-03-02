const button = document.getElementById("search-btn")

button.addEventListener("click", async () => {
    try{
  const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
  if(!response.ok){
    console.error('response failed')
    return;
  }
  const data = await response.json()
  
  data.forEach( user=> {
    

    
  });


  }   
});
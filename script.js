const button = document.getElementById("search-btn")
const spinner = document.getElementById("loading-spinner")

button.addEventListener("click", async () => {
    try{
       const currentClass =spinner.getAttribute('class')
       currentClass.setAttribute()
  const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
  if(!response.ok){
    console.error('response failed')
    return;
  }
  const data = await response.json()
  
function displaycountry(country){
    document.getElementById('country-info').innerHTML = `
    <h2>${country.name.common}</h2>
    <p><strong>Capital:</strong> ${country.capital[0]}</p>
    <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
    <p><strong>Region:</strong> ${country.region}</p>
    <img src="${country.flags.svg}" alt="${country.name.common} flag">`

}
displaycountry(data) ;    
    }

catch (error) {
  console.error('either the fetch failed or ', error)
}
            
  });


   
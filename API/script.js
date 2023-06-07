// CONNECTING SEARCHBTN IN JS TO THE ID CALLED SEARCH-BTN IN CSS
// CONNECTING COUNTRYINP IN JS TO THE ID CALLED COUNTRY-INP IN CSS
let searchBtn = document.getElementById("search-btn");
let countryInp = document.getElementById("country-inp");
// LISTENS TO AN EVENT, IN THIS CASE CLICK ON THE SEARCH BUTTON
searchBtn.addEventListener("click", () => {
  let countryName = countryInp.value;
  let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
  console.log(finalURL);
  fetch(finalURL)
    .then((response) => response.json())
    .then((data) => {
      //   Data shown in the console:

        console.log(data[0]);
        console.log(data[0].capital[0]);
        console.log(data[0].flags.svg);
        console.log(data[0].name.common);
        console.log(data[0].continents[0]);
        console.log(Object.keys(data[0].currencies)[0]);
        console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
        console.log(
          Object.values(data[0].languages).toString().split(",").join(", ")
        );

      //   AFTER GETTING A RESPONSE FROM JSON WITH ALL THE DATA IT CHANGES THE RESULT CLASS IN HTML WITH THE FOLLOWING:
      result.innerHTML = `
        <img src="${data[0].flags.svg}" class="flag-img">
        <h1>${data[0].name.common}</h1>
    <div class="data">
        <div class="wrapper">
        <div class="data-wrapper">
            <h1>CAPITAL CITY:</h1>
            <span>${data[0].capital[0]}</span>
        </div>
    </div>
    <div class="wrapper">
        <div class="data-wrapper">
            <h1>REGION:</h1>
            <span>${data[0].continents[0]}</span>
        </div>
    </div>
    <div class="wrapper">
    <div class="data-wrapper">
        <h1>SUBREGION:</h1>
        <span>${data[0].subregion}</span>
    </div>
</div>
     <div class="wrapper">
        <div class="data-wrapper">
            <h1>Population:</h1>
            <span>${data[0].population}</span>
        </div>
    </div>
    <div class="wrapper">
        <div class="data-wrapper">
            <h1>CURRENCY:</h1>
            <span>${
              data[0].currencies[Object.keys(data[0].currencies)].name
            } - ${Object.keys(data[0].currencies)[0]}</span>
        </div>
    </div>
     <div class="wrapper">
        <div class="data-wrapper">
            <h1>SPOKEN LANGUAGES:</h1>
            <span>${Object.values(data[0].languages)
              .toString()
              .split(",")
              .join(", ")}</span>
        </div>
    </div>
    </div>
      `;
    })
    //   FOR POTENTIOL ERRORS:
    .catch(() => {
      if (countryName.length == 0) {
        result.innerHTML = `<h3>YOU HAVE TO PUT IN A COUNTRY NAME.</h3>`;
      } else {
        result.innerHTML = `<h3>COUNTRY NAME NOT VALID, TRY AGAIN.</h3>`;
      }
    });
});




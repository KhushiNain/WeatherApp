//Complete the Weather API Backend part using openweathermap api

// Progression 1: Create a function and fetch data using "fetch" from openweathermap api and display the data as given in reference image.


function getData(){
  let API_key="34349e5f55955d8dd1907bb970d873cf";
  let city_name="Jaipur";
  let api=`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_key}&units=metric`;
  fetch(api).then((res)=>
    res.json()
    ).then((data)=>{
    console.log(data)
// accessing the info 
    let cityName=data.name;
    let countryName=data.sys.country;
    let temp=data.main.temp;
    let mintemp=data.main.temp_max;
    let maxtemp=data.main.temp_min;
    let description=data.weather[0].description;
    let currDate= new Date();
    currDate=`${currDate}`.slice(0,15);
// creating element to store the info
    let inputBox=document.createElement("input");
    inputBox.setAttribute("type","text");
    inputBox.setAttribute("id","search-box");

    let locationBox=document.createElement("h3");
    let dateTag=document.createElement("p");
    let tempTag=document.createElement("h1");
    let desTag=document.createElement("h3");
    let minmax=document.createElement("p");
// storing the info inside the tag
    inputBox.setAttribute("placeholder",cityName);
    locationBox.innerText= `${cityName}, ${countryName}`;
    dateTag.innerText=currDate;
    tempTag.innerText=temp;
    desTag.innerText=description
    minmax.innerText=`${mintemp}/${maxtemp}`
// appending everything into webpage
document.body.append(inputBox,locationBox,dateTag,tempTag,desTag,minmax)
  }).catch((err)=>{ 
    console.log(err.message)})
}
getData()
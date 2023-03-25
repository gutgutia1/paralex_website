weather_tab=document.querySelector("[yourweather_tab]")
search_tab=document.querySelector("[searchweather_tab]")
search_bar_div=document.querySelector(".search_bar_div")
weather_info_div=document.querySelector(".weather_info_div")
grant_access_div=document.querySelector(".grant_access_div")
loading_snippet_div=document.querySelector(".loading_snippet_div")


current_tab=weather_tab
current_tab.classList.add("current-tab")
const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";
getSessionStorageInfo()

weather_tab.addEventListener("click",()=>{
    current_tab.classList.remove("current-tab")
    creatediv(weather_tab)
    current_tab=weather_tab
    current_tab.classList.add("current-tab")
    // creatediv(weather_tab)
})
search_tab.addEventListener("click",()=>{
    current_tab.classList.remove("current-tab")
    creatediv(search_tab)
    current_tab=search_tab
    current_tab.classList.add("current-tab")
    // creatediv(search_tab)
})

function creatediv(clickedtab){
    if(clickedtab!=current_tab){
        current_tab=clickedtab
        if(!search_bar_div.classList.contains("active")){
            // console.log("hi")
            search_bar_div.classList.add("active") 
            grant_access_div.classList.remove("active")
            weather_info_div.classList.remove("active")
            
        }
        else{
            search_bar_div.classList.remove("active")
            weather_info_div.classList.remove("active")
            getSessionStorageInfo()            
        }
    }
}

function getSessionStorageInfo(){
    const localCoordinates = sessionStorage.getItem("user-coordinates");
    // console.log(localCoordinates)
    if (!localCoordinates){
        // console.log("ji")
        grant_access_div.classList.add("active")
    }
    else{
        const coordinates = JSON.parse(localCoordinates);
        weatherinfor(coordinates)
    }
}

async function weatherinfor(cordinates){
    const {lat,lon}=cordinates
    grant_access_div.classList.remove("active")
    loading_snippet_div.classList.add("active")
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
        data= await response.json()
        loading_snippet_div.remove("active")
        renderweatherinfo(data)
    }
    catch(err){
        console.log("error in fetching",err)
    }

}

function renderweatherinfo(data){
    weather_info_div.classList.add("active")
    console.log("INSIDE RENDER")

    city_name=document.querySelector(".city_name")
    countryimg=document.querySelector(".countryimg")
    weather_desc=document.querySelector(".weather_desc")
    weather_desc_image=document.querySelector(".weather_desc_image")
    temp=document.querySelector(".temp")
    wind_speed=document.querySelector(".wind_speed")
    humidity=document.querySelector(".humidity")
    clouds=document.querySelector(".clouds")
    // console.log(data)
    city_name.innerText=data?.name
    countryimg.src=`https://flagcdn.com/144x108/${data?.sys?.country.toLowerCase()}.png`
    // console.log(`https://flagcdn.com/144x108/${data?.sys?.country.toLowerCase()}.png`)
    // console.log(data?.weather?.[0]?.description)
    weather_desc.innerText=data?.weather?.[0]?.description
    weather_desc_image.src = `http://openweathermap.org/img/w/${data?.weather?.[0]?.icon}.png`;
    temp.innerText = data?.main?.temp;
    wind_speed.innerText = data?.wind?.speed;
    humidity.innerText = data?.main?.humidity;
    clouds.innerText = data?.clouds?.all;

}

function getLocation() {
    if(navigator.geolocation) {
        // console.log("ho")
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {
        //HW - show an alert for no gelolocation support available
    }
}

function showPosition(position) {

    const userCoordinates = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
    }

    sessionStorage.setItem("user-coordinates", JSON.stringify(userCoordinates));
    // renderweatherinfo(userCoordinates);
    weatherinfor(userCoordinates)

}

grant_access_button=document.querySelector(".grant_access_button")
if (grant_access_button){
    grant_access_button.addEventListener("click", getLocation);
}

search_button=document.querySelector(".search_bar_div")
// console.log(search_button)
search_button.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log("search button clicked")
    search_input=document.querySelector(".search_input")
    city_name=search_input.value
    console.log("this is city name",city_name)
    if (city_name ===""){
        return;
    }
    else{
        weatherinforCity(city_name)
    }
})

async function weatherinforCity(cityname){
    loading_snippet_div.classList.add("active")
    try{
        console.log("inside city api")
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${API_KEY}&units=metric`)
        data= await response.json()
        loading_snippet_div.remove("active")
        renderweatherinfo(data)
    }
    catch(err){
        console.log("error in fetching",err)
    }

}


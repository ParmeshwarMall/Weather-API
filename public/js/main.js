//const async = require("hbs/lib/async");

const submitbtn=document.getElementById('submitbtn');
const city_name=document.getElementById("city_name");
const cityname=document.getElementById("cityname");
const temp_val=document.getElementById("temp_val");
const temp_status=document.getElementById("temp_status"); 
const middleLayer=document.querySelector(".middle_layer");

const getInfo=async(event)=>{
    event.preventDefault();
    let cityVal=cityname.value;
    if(cityVal==="")
    {
        city_name.innerText="Please enter the city name";
        middleLayer.style.visibility="hidden";
    }
    else
    {
       try{
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=770c5ee3713179996860e2dee7af9b09`;
        const response=await fetch(url);
        const data=await response.json();
        const arrData=[data];

        city_name.innerText=`${arrData[0].name},${arrData[0].sys.country}`;
        temp_val.innerText=arrData[0].main.temp;

         const tempMood=arrData[0].weather[0].main;

        //Condition for check sunny or cloud
        if(tempMood=="Clear"){
            temp_status.innerHTML="<i class='fas fa-sun' style='color:#eccc68;'></i>";
        }
        else if(tempMood=="Clouds"){
            temp_status.innerHTML="<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";
        }
        else if(tempMood=="Rain"){
            temp_status.innerHTML="<i class='fas fa-cloud-rain' style='color:#a4b0be;'></i>";
        }
        else{
            temp_status.innerHTML="<i class='fas fa-sun' style='color:#eccc68;'></i>";
        }

        middleLayer.style.visibility="visible";

       } catch{
        city_name.innerText="Please enter the correct city name";
        middleLayer.style.visibility="hidden";
       }
    }
}
submitbtn.addEventListener('click',getInfo);

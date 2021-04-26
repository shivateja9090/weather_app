const cityname=document.getElementById('cityname');
const submitBtn= document.getElementById('submitBtn');
const city_name= document.getElementById('city_name');
const temp= document.getElementById('temp');
const getinfo = async (event) =>
{
  event.preventDefault();
 let cityval=cityname.value; 
   if(cityval === ""){
city_name.innerText = `plz write the name before search`;
console.log(city_name.innerText);
   }else{
       try{
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=b14425a6554d189a2d7dc18a8e7d7263`;
   const response= await fetch(url);
   const data=await response.json();
   const arrdata=[data];
console.log(arrdata[0].main.temp);
temp.innerHTML= `${arrdata[0].main.temp}<sup>o</sup>C `;
       }
       catch{
           city_name.innerText=`plz enter the city name properly`;
           temp.innerHTML=`<span>0</span> <sup>o</sup>C`;
       }
   }
}
submitBtn.addEventListener('click',getinfo);
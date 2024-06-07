export const getApiData=async(city)=>{
     const api_key="ed03e0fb72ff950cd160ca44fe11f589"
     const base_url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`
     const response=await fetch(base_url)
     return response.json()
}
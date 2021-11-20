
const apiKey = 'c9a5062f17e3e62297238c89b47260b3'

const makeGetRequest = async() =>{
    let city_name = document.querySelector('.form-control').value
    console.log(city_name)
    document.querySelector('.form-control').value = ''
    let res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${apiKey}&units=imperial`);
    let weather = res.data;
    console.log(weather)
    return weather
};

const loadData = async() =>{
    let weatherData = await makeGetRequest();

    let city_name = weatherData.name;

    let name_list = city_name.split('')
    name_list.splice(0,1, city_name[0].toUpperCase())
    console.log(name_list)
    city_name = name_list.join('')




    let title_area = document.querySelector('.card-title');
    title_area.innerHTML = city_name;



    let Currently = document.getElementById('current');
    let Feels = document.getElementById('feels');
    let Forecast = document.getElementById('Forecast');
    let Humidity = document.getElementById('Humidity')
    let WindSpeed = document.getElementById('Windspeed')
    let High = document.getElementById('High');
    let Low = document.getElementById('Low');



        let feel= weatherData.main.feels_like;
        console.log(feel)   
        Feels.innerHTML='Feels Like:'
        let feels_element =  `<p>${feel}</p>`;
        Feels.insertAdjacentHTML('beforeend', feels_element)


        let current= weatherData.main.temp;
        console.log(current)
        Currently.innerHTML="current"   
        let curr_element = `<p>${current}</p>`;
        Currently.insertAdjacentHTML('beforeend', curr_element)

        let high_temp= weatherData.main.temp_max
        console.log(high_temp)   
        High.innerHTML='High'
        let high_element = `<p>${high_temp}</p>`;
        High.insertAdjacentHTML('beforeend', high_element)

        let low_temp= weatherData.main.temp_min
        console.log(low_temp) 
        Low.innerHTML= 'Low' 
        let low_element = `<p>${low_temp}</p>`;
        Low.insertAdjacentHTML('beforeend', low_element)
    

        let fore= weatherData.weather[0].description;
        console.log(fore)   
        Forecast.innerHTML="Skies:" 
        let fore_element = `<p>${fore}</p>`;
        Forecast.insertAdjacentHTML('beforeend', fore_element)
    
        let hum = weatherData.main.humidity;
        console.log(hum)
        Humidity.innerHTML='Humidity'
        let humid_element = `<p>${hum}</p>`;
        Humidity.insertAdjacentHTML('beforeend', humid_element)

        let wind = weatherData.wind.speed;
        console.log(wind)
        WindSpeed.innerHTML='Windspeed'
        let win_element = `<p>${wind}</p>`;
        WindSpeed.insertAdjacentHTML('beforeend', win_element)

} 
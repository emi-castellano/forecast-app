const apiKey = '196c9e25707aa971ca65dda7965cd2df';

export const getWeatherByCountry = (country) => {
    let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + country + '&units=metric&appid=' + apiKey;
    return fetch(url).then((res) => res.json());
}
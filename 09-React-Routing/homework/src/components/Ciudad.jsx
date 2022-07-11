import React from 'react'

const apiKey = '4ae2636d8dfbdc3044bede63951a019b'; 

function Ciudad({match}) {
const id = match.params.id;

const [city, setCity] = React.useState(undefined);

React.useEffect(() => {
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${apiKey}&units=metric`
    )
      .then(r => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCity(ciudad);
        } else {
          setCity(null);
        }
      });
}, [id]);

  return city === undefined ? ( 
  <h1>Cargando...</h1>
   ) : city === null ? ( 
   <h1>Ciudad no Encontrada Pikikaaaa</h1> 
   ) : (
    <div>
      <h2>{city.name}</h2>
      <div>
        <div>Temperatura: {city.temp}</div>
        <div>Clima: {city.weather}</div>
        <div>Viento: {city.wind}</div>
        <div>Nubosidad: {city.clouds}</div>
      </div>
    </div>
    );
}

export default Ciudad
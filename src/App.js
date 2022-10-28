import { useState, useEffect } from "react";
import axios from "axios";
import SearchInput from "./components/SearchInput";
import CurrentCard from "./components/CurrentCard";
import ForecastCard from "./components/ForecastCard";

function App() {
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async (cityName) => {
    const options = {
      method: "GET",
      url: `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${cityName}&days=3`,
      headers: {
        "X-RapidAPI-Key": "974ed41962msh1d60a3df392fcb6p16f858jsn4b85f384d9bd",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com"
      }
    };

    axios
      .request(options)
      .then((response) => {
        setWeatherData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  useEffect(() => {
    fetchWeatherData("los angeles");
  }, []);

  if (!weatherData) {
    console.log("no weather data");
    return null;
  }

  return (
    <div className="container">
      <div className="content">
        <SearchInput
          fetchWeatherData={fetchWeatherData}
          weatherData={weatherData}
        />
        <CurrentCard weatherData={weatherData} />
        <ForecastCard weatherData={weatherData} />
      </div>
    </div>
  );
}

export default App;

// import DummyData from "./components/DummyData";

// function App() {
//   return <DummyData />;
// }

// export default App;

import React, { useState, useEffect } from "react";
import Search from "../search";

const Weather = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  // 자동완성 만들기
  // 각 도시의 위도 경도와 함께
  const fetchWeatherData = async (param) => {
    setLoading(true);
    // api 요청 수정해야 함
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&lang=kr&appid=${
          import.meta.env.VITE_WEATHER_API_KEY
        }`
      );
      const data = await response.json();
      setWeatherData(data);

      console.log(data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeatherData("seoul");
  }, []);

  const handleSearch = () => {
    console.log(import.meta.env.VITE_WEATHER_API_KEY);
    fetchWeatherData(search);
  };

  const getCurrentDate = () => {
    return new Date().toLocaleDateString("ko-KR", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div>
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <div className="city-name">
            <h2>
              {weatherData?.name}, <span>{weatherData?.sys?.country}</span>
            </h2>{" "}
          </div>{" "}
          <div className="date">
            <span>{getCurrentDate()}</span>
          </div>
          <div className="temp">{`약 ${Math.floor((weatherData?.main?.temp- 273.15)*10)/10}`}℃</div>
          <p className="description">
            {weatherData && weatherData.weather[0]
              ? weatherData.weather[0].description
              : ""}
          </p>
          <div className="weather-info">
            <div className="column">
              <div>
                <p className="wind">{weatherData?.wind?.speed}</p>
                <p>풍속</p>
              </div>
            </div>
            <div className="column">
              <div>
                <p className="humidity">{weatherData?.main?.humidity}%</p>
                <p>습도</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;

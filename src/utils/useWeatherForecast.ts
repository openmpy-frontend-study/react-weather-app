import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import openWeather from "./openWeather";

export interface IDay {
  date: string;
  forecast: { [x: string]: any }[];
}

const getWeatherForecast = (city: string) =>
  openWeather.getThreeHourForecastByCityName({
    cityName: city,
  });

const useWeatherForecast = (city: string) => {
  const { data, ...rest } = useQuery(["weather-forecast", city], () =>
    getWeatherForecast(city)
  );

  const days = useMemo(() => {
    const days: Record<string, IDay> = {};

    data?.list.forEach((forecast) => {
      const date = forecast.dt_txt.split(" ")[0];

      let day = days[date];
      if (!day) {
        day = {
          date,
          forecast: [],
        };
        days[date] = day;
      }
      day.forecast.push(forecast);
    });
    return Object.values(days);
  }, [data]);
  return { ...rest, data, days };
};

export default useWeatherForecast;

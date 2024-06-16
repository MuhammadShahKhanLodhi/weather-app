import React from 'react'
import { FiSunrise, FiSunset } from 'react-icons/fi'

export default function Forecast({ forecastData, cOrF }) {
  return (
    <div className='text-sm sm:w-fit w-full h-fit max-h-[570px] p-8 bg-primary/50 rounded-xl min-w-52 xl:scale-100 scale-75 md:m-0 -my-10'>
        {console.log(forecastData)}
        <div className='flex flex-col justify-center items-center'>
            <p className='text-lg'>{forecastData.date}</p>
            <img src={forecastData.day.condition.icon} />
            <p>{forecastData.day.condition.text}</p>
            <p>H: {forecastData.day.maxtemp_c}°C</p><p>L: {forecastData.day.mintemp_c}°C</p>
        </div>
        <div className='flex flex-col justify-center items-start mt-6 border-2 border-white p-3 gap-3'>
            <p>Chance of precipitation: {forecastData.day.daily_chance_of_rain}%</p>
            <p>Avg Visibility: {forecastData.day.avgvis_km}km</p>
            <p>UV Index: {forecastData.day.uv}</p>
            <p>Max Wind Speed: {forecastData.day.maxwind_kph}kph</p>
            <div className='flex justify-center items-center gap-5'>
                <div className='flex justify-center items-center gap-2'>
                    <FiSunrise className='scale-150' />
                    <p>{forecastData.astro.sunrise}</p>
                </div>
                <div className='flex justify-center items-center gap-2'>
                    <FiSunset className='scale-150' />
                    <p>{forecastData.astro.sunset}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

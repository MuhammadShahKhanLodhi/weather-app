import React, { useState } from 'react'
import Forecast from './Forecast'

export default function Weather({ currentData, forecastData, location }) {

  return (
    <main className='w-screen min-h-screen h-fit bg-sky-600 flex justify-center items-center'>
        <div className='w-screen min-h-fit sm:p-7 bg-black/20 flex sm:flex-row flex-col justify-center items-center sm:gap-7 text-white text-base xl:scale-100 scale-75'>
            <div className='md:w-1/4 sm:w-1/2 w-full sm:h-full h-fit bg-primary flex flex-col justify-center items-center p-4 xl:scale-100 md:scale-90 scale-100'>
                <div className='flex flex-col justify-start items-center gap-2 mb-12'>
                    <h1 className='text-3xl mb-4'>{location}</h1>
                    <img src={currentData.condition.icon} className='scale-150 mb-8' />
                    <p className='text-2xl'>{currentData.condition.text}</p>
                    <p>Temperature: {currentData.temp_c}°C</p>
                    <p>Feels Like: {currentData.feelslike_c}°C</p>
                </div>
                <div className='border-2 border-white p-7 flex flex-col justify-center items-start gap-4'>
                    <p>Heat Index: {currentData.heatindex_c}°C</p>
                    <p>UV Index: {currentData.uv}</p>
                    <p>Wind Speed: {currentData.wind_kph}kph / {currentData.wind_mph}mph</p>
                    <p>Wind Direction: {currentData.wind_degree}°</p>
                    <p>Humidity: {currentData.humidity}%</p>
                    <p>Cloud Coverage: {currentData.cloud}%</p>
                </div>
            </div>
            <div className='md:w-3/4 sm:w-1/2 w-full min-h-[630px] h-fit bg-secondary flex lg:flex-row flex-col lg:justify-around justify-center items-center'>
                <Forecast forecastData={forecastData[0]} />
                <Forecast forecastData={forecastData[1]} />
                <Forecast forecastData={forecastData[2]} />
            </div>
        </div>
    </main>
  )
}

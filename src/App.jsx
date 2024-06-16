import React, { useState } from 'react'
import Weather from './Weather'
import { FaSearch } from 'react-icons/fa'
import APIkey from '../APIkey'


export default function App() {

  const [loading, setLoading] = useState(true)
  const [currentData, setCurrentData] = useState()
  const [forecastData, setForecastData] = useState([])
  const [location, setLocation] = useState("")


  const runAPI = async (location) => {
    let res1 = await fetch(`http://api.weatherapi.com/v1/current.json?key=${APIkey}&q=${location}&aqi=no`)
    let data1 = await res1.json()
    let res2 = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${APIkey}&q=${location}&days=3&aqi=no&alerts=no`)
    let data2 = await res2.json()
    if(res1.status !== 200 && res2.status !== 200){
      alert("Please Enter Valid City Name")
    } else {
      setCurrentData(data1.current)
      setForecastData(data2.forecast.forecastday)
      setTimeout(setLoading(false), 300)
    }
  }

  return (
    <>
    {
      loading === true ? 
      <form onSubmit={e => e.preventDefault()} className='w-screen h-screen bg-primary flex flex-col justify-center items-center'>
          <h1 className='text-white sm:text-5xl text-2xl'>Weather App</h1>
          <div className='flex justify-center items-center mt-32'>
              <button onClick={() => runAPI(location)}><FaSearch className='scale-150 text-white sm:mr-8 mr-4 hover:text-white/70' /></button>
              <input type='text' placeholder='Enter City Name' value={location} onChange={e => setLocation(e.target.value)} className='p-2 pl-5 rounded-full sm:w-96 w-56' />
          </div>
      </form>
      :
      <Weather forecastData={forecastData} currentData={currentData} location={location} />
    }
    </>
  )
}
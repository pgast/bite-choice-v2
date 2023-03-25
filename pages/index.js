import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { useState, useEffect } from 'react'

import MainView from './views/MainView';


export default function Home() {
  const [fetchSuccess, setFetchSuccess] = useState(false)
  const [loadingLocation, setLoadingLocation] = useState(true)


  const [location, setLocation] = useState("")
  const [fetchedLocation, setFetchedLocation] = useState("")
  const [coordinates, setCoordinates] = useState("")

  const fetchRandomData = async () => {
    const response = await fetch(`/api/getRandom/${location}`);
    // INTERNAL SERVER ERROR CATCHER
    if(response.status === 500) return 500;
    const businesses = await response.json();
    return businesses.businesses;
  };


  const fetchCustomSearch = async () => {
    const sortOptions = ['best_match', 'rating', 'review_count'];

    const sort_by = sortOptions[Math.floor(Math.random() * Math.floor(3))];
    const term = "tacos"
    const location = "navojoa"

    let fetchUrl = `/api/search/${location}/${sort_by}/${term}`
    const response = await fetch(fetchUrl);
  }

  const fetchCoordinates = () => {
    const successCallback = (position) => {
      setCoordinates(position.coords);
      setFetchSuccess(true)
      setLoadingLocation(false)
    };
    
    const errorCallback = (error) => {
      console.log(error);
      setLoadingLocation(false)
    };
    
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  }

  useEffect(() => {
    fetchCoordinates()
  }, [])

  return (
    <>
      <Head>
        <title>BiteChoice</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <MainView
          coordinates={coordinates}
          fetchSuccess={fetchSuccess}
          isLoadingLocation={loadingLocation}
        />
        {/* <input type='text' value={location} onChange={(e) => setLocation(e.target.value)}/>
        <button onClick={fetchRandomData}>
          test random data
        </button>

        <hr />
        <h2>Fetched location: {fetchedLocation}</h2>
        <h3>Fetched Coordinates: {coordinates.latitude} {coordinates.longitude}</h3>
        <button onClick={fetchCustomSearch}>TEST SEARCH DATA</button> */}
      </main>
    </>
  )
}

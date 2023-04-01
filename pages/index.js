import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { useState, useEffect } from 'react'

import MainView from './views/mainView';

export default function Home() {
  const [coordinates, setCoordinates] = useState("")
  const [fetchSuccess, setFetchSuccess] = useState(false)
  const [loadingLocation, setLoadingLocation] = useState(true)

  const getCoords = async () => {
    const pos = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });

    setFetchSuccess(true)
    setLoadingLocation(false)
    
    setCoordinates({
      long: pos.coords.longitude,
      lat: pos.coords.latitude,
    })
  };

  useEffect(() => {
    getCoords()
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
      </main>
    </>
  )
}

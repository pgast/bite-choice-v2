import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'

export default function Home() {
  const [location, setLocation] = useState("")

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

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <input type='text' value={location} onChange={(e) => setLocation(e.target.value)}/>
        <button onClick={fetchRandomData}>
          test random data
        </button>

        <hr />
        <button onClick={fetchCustomSearch}>TEST SEARCH DATA</button>
      </main>
    </>
  )
}

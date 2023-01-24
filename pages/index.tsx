import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { API_TOKENS } from '../api'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Posts from '../components/Posts'

const Home: NextPage = () => {
  const [posts, setPosts] = useState({});
  useEffect(() => {
    (async () => {
      const res = await fetch('http://localhost:1337/api/blogs-plural', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${API_TOKENS.BACKEND_TOKEN}`
        }
      });
      const postsRes = await res.json();
      setPosts(postsRes.data);
    })();
  },[])
  return (
    <div className='max-w-7xl mx-auto'>
      <Head>
        <title>Medium Blog 2.0</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <Header/>
      <Banner />
      <Posts posts={posts}/>
    </div>
  )
}

export default Home

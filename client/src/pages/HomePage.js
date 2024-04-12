import React from 'react'
import Layout from '../components/layout/Layout.js'
import { useAuth } from '../context/auth.js'
const HomePage = () => {
  const [auth]=useAuth()
  return (
   <Layout title={'home-page'}>
  <h1>home page </h1>
  <pre>{JSON.stringify(auth,null,4)}</pre>
</Layout>

  )
}

export default HomePage;

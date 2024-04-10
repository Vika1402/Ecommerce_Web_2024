import React from 'react'
import Layout from '../components/layout/Layout.js'
import { useAuth } from '../context/auth.js'
const HomePage = () => {
  const [auth,setAuth]=useAuth()
  return (
   <Layout title="{&quot;Home-TechBazar&quot;}">
  <h1>home page </h1>
  <pre>{JSON.stringify(auth,null,4)}</pre>
</Layout>

  )
}

export default HomePage;

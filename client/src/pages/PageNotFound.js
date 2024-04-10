import React from 'react'
import Layout from '../components/layout/Layout';
import { Link } from 'react-router-dom';
const PageNotFound = () => {
  return (
    <Layout>
     <div className='pagenotfound'>
     <h1>
      404
     </h1>
     <p>
      Opps ! Page Not Found 
     </p>
     <Link to="/"> <button type="button" className="btn btn-outline-success">Go Back</button></Link>
    

     </div>
    </Layout>
  )
}

export default PageNotFound;

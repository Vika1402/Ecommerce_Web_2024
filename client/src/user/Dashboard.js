import React from 'react'
import { useAuth } from '../context/auth';
import UserMenu from '../components/layout/UserMenu';
import Layout from '../components/layout/Layout';
const AdminDashboard = () => {
  const [auth]=useAuth()
  return (
    <Layout Dashboard-user>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu/>
          </div>
          <div className="col-md-9">
          <div className="card">
            <h3>{auth?.user?.name}</h3>
            <h3>{auth?.user?.email}</h3>
            <h3>{auth?.user?.phone}</h3>
          </div>
          
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AdminDashboard;

import Layout from '../../components/layout/Layout.js';
import { useState } from "react";
import toast from 'react-hot-toast';
import axios from "axios";
import { useNavigate,useLocation } from "react-router-dom";
import { useAuth } from '../../context/auth.js';
const Login = () => {
  const [auth,setAuth]=useAuth()
  const location =useLocation()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `/api/v1/auth/login`,
        {  email, password }
      );
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user:res.data.user,
          token:res.data.token
        })
        localStorage.setItem('auth',JSON.stringify(res.data))
        navigate( location.state || "/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong ");
    }
  };

  return (
    <Layout title={"Login-Page"}>
      <div className="register">
        <h3 className="r-h3">LOGIN - HERE</h3>
        <br />
        <form
          className="row g-3 login-form"
          novalidate
          onSubmit={handleSubmit}
        >
         
        
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">
            Enter Your Email
            </label>
            <input    required
              type="email"
              className="form-control"
              id="inputEmail4"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-label">
              Enter Your Password
            </label>
            <input    required
              type="password"
              value={password}
              className="form-control"
              id="inputPassword4"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <div className="col-12 r-btn-class">
            <button type="submit" className="btn btn-primary r-btn ">
              Login
            </button>
          </div>
          <div className="col-12 r-btn-class">
            <button type="submit" className="btn btn-warning r-btn " onClick={()=>{
              navigate('/forgot-password')
            }}>
              Forgot Password
            </button>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default Login;

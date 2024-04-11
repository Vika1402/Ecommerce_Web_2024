import React from 'react'
import Layout from '../../components/layout/Layout'
import { useState } from "react";
import toast from 'react-hot-toast';
import axios from "axios";
import { useNavigate} from "react-router-dom";
const ForgotPassword = () => {

  const [email, setEmail] = useState("");
  const[answer,setAnswer]=useState("")
  const [newPassword, setNewPassword] = useState("");
  
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `/api/v1/auth/forgot-password`,
        {  email, newPassword,answer}
      );
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate( "/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong ");
    }
  };
  return (
    <Layout title={"forgot-password"}>
      <h1>Forgot password</h1>
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
            <label htmlFor="inputAnswer" className="form-label">
           Answer
            </label>
            <input    required
              type="answer"
              className="form-control"
              id="inputEmail4"
              placeholder="Enter your Secret Answer"
              value={answer}
              onChange={(e) => {
                setAnswer(e.target.value);
              }}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-label">
              Enter Your Password
            </label>
            <input    required
              type="password"
              value={newPassword}
              className="form-control"
              id="inputPassword4"
              placeholder="New Password"
              onChange={(e) => {
                setNewPassword(e.target.value);
              }}
            />
          </div>

          <div className="col-12 r-btn-class">
            <button type="submit" className="btn btn-success r-btn ">
              RESET
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

export default ForgotPassword;

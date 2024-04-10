import { useState } from "react";
import Layout from "../../components/layout/Layout";
import toast from 'react-hot-toast';
import axios from "axios";
import { useNavigate } from "react-router-dom";

import '../../styles/AuthStyle.css'
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate()

  // form function

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `/api/v1/auth/register`,
        { name, email, password, phone, address, role }
      );
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong ");
    }
  };

  return (
    <Layout title={"Resister-Page"}>
      <div className="register">
        <h3 className="r-h3">Registration</h3>
        <br />
        <form
          className="row g-3 register-form"
          novalidate
          onSubmit={handleSubmit}
        >
          <div className="col-12">
            <label htmlFor="inputName" className="form-label">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="form-control"
              id="inputName"
              placeholder="Name"
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">
              Email
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
              Password
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

          <div className="col-md-6">
            <label htmlFor="inputPhone" className="form-label">
              Phone No.
            </label>
            <input    required
              type="number"
              value={phone}
              className="form-control"
              id="inputPhone"
              placeholder="Phone number "
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="inputCity" className="form-label">
              Role
            </label>
            <input    required
              type="number"
              value={role}
              className="form-control"
              id="inputCity"
              placeholder="Use 1 for Admin"
              onChange={(e) => {
                setRole(e.target.value);
              }}
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">
              Address
            </label>
            <input    required
              type="text"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              className="form-control"
              id="inputAddress"
              placeholder="mujahan raipur "
            />
          </div>

          {/* <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
              />
              <label className="form-check-label" htmlFor="gridCheck">
                Check me out
              </label>
            </div>
          </div> */}
          <div className="col-12 r-btn-class">
            <button type="submit" className="btn btn-primary r-btn ">
              Sign in
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Register;

import React from 'react'
import Layout from '../components/layout/Layout'
import contact from '../Images/contactImage.png'
import { FaFacebook } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
const ContactPage = () => {
  return (
    <Layout>
     <div className="main">

      <div className="left">
      <img src={contact} alt="" />

      </div>
      <div className="right">
      <p>
      <div className="contacts">
      <strong >Contact Us</strong>
      </div>
 
  <br />
  We value your feedback and inquiries. Please don't hesitate to reach out to us using the information provided below:
  <br /><br />
  <strong>Address:</strong><br />
  TechBazar Market Hub  <br />
  Mujgahan 2024<br />
  City- Raipur , State- CG ,492015<br />
  India
  <br /><br />
  <strong>Phone Number:</strong><br />
  9999999999
  <br /><br />
  <strong>Email:</strong><br />
  <a href="mailto:your@email.com">vikas.kumar123@ssipmt.com</a>
  <br /><br />
  <strong>Customer Support Hours:</strong><br />
  Our customer support hours here:- Monday to Friday, 9:00 AM to 5:00 PM (GMT)
  <br /><br />
  <strong>Social Media:</strong><br />
  Follow us on social media for updates and announcements:<br />
  <FaFacebook  style={{color:"blue"}}/>-Facebbook: <a ></a><br />
  <FaTwitter style={{color:"darkblue"}}  />- Twitter: <a ></a><br />
  <FaInstagram style={{color:"red"}} />- Instagram: <a ></a><br />
  <FaLinkedin style={{color:"blue"}} />- LinkedIn: <a ></a>
  <br /><br />
  <strong>Online Contact Form:</strong><br />
  Alternatively, you can fill out our online contact form on our website <Link to="/contact">click here </Link> for any inquiries or assistance needed.
  <br /><br />
  We look forward to hearing from you!
</p>


      </div>
     </div>


    </Layout>
  )
}

export default ContactPage

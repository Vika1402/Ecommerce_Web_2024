import React from 'react'
import Layout from '../components/layout/Layout'
import Policy from '../Images/policy.png'
import { Link } from 'react-router-dom'
const policy = () => {
  return (
    <Layout title={`policy`}>
      <div className="policy-main">
        <div className="policy-left">
          <img src={Policy} alt="" />
        </div>
        <div className="policy-right">
        <div className="about">
          <strong>Policy</strong>
          </div>
        <ul>
  <li><strong>Information Collection:</strong>
    <ul>
      <li>We collect personal information such as name, email address, postal address, and payment details when you make a purchase or register an account.</li>
      <li>We may also gather non-personal information like browser type, IP address, and device identifiers for analytics and security purposes.</li>
    </ul>
  </li>

  <li><strong>Use of Information:</strong>
    <ul>
      <li>We use your personal information to process orders, provide customer support, and personalize your shopping experience.</li>
      <li>Non-personal information helps us analyze website traffic, improve our services, and prevent fraud.</li>
    </ul>
  </li>

  <li><strong>Data Security:</strong>
    <ul>
      <li>We employ industry-standard security measures to protect your information from unauthorized access, alteration, or disclosure.</li>
      <li>We use encryption, secure payment gateways, and regularly update our systems to ensure data security.</li>
    </ul>
  </li>

  <li><strong>Cookies:</strong>
    <ul>
      <li>We use cookies to enhance your browsing experience and provide personalized content.</li>
      <li>You can choose to disable cookies in your browser settings, but this may affect certain website features.</li>
    </ul>
  </li>

  <li><strong>Third-Party Disclosure:</strong>
    <ul>
      <li>We do not sell, trade, or transfer your personal information to third parties without your consent, except for trusted service providers who assist us in operating our website and servicing you.</li>
    </ul>
  </li>

  <li><strong>Policy Changes:</strong>
    <ul>
      <li>We may update our privacy policy from time to time. Any changes will be posted on this page, and your continued use of our website constitutes acceptance of the revised policy.</li>
    </ul>
  </li>

  <li><strong>Contact Us:</strong>
    <ul>
      <li>If you have any questions or concerns regarding our privacy practices, please contact us at <Link to="/contact">click here </Link>.</li>
     
    </ul>
  </li>
</ul>

        </div>
      </div>
    </Layout>
  )
}

export default policy;

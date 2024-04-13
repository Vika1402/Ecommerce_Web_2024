import { Routes, Route } from "react-router-dom";
import About from "./pages/About.js"
import HomePage from './pages/HomePage.js'
import Contact from './pages/ContactPage.js'
import Policy from './pages/Policy.js'
import PageNotFound from './pages/PageNotFound.js'
import Register from "./pages/Auth/Register.js";
import Login from './pages/Auth/Login.js';
import Dashboard from "./user/Dashboard.js";
import PrivateRoute from "./components/Routes/Private.js"
import ForgotPassword from './pages/Auth/ForgotPassword.js';
import AdminRoute from "./components/Routes/AdminRoute.js";
import AdminDashboard from "./pages/Admin/AdminDashboard.js";
import CreateCategory from "./pages/Admin/CreateCategory.js";
import CreateProduct from "./pages/Admin/CreateProduct.js";
import User from "./pages/Admin/Users.js";
import Orders from "./user/Orders.js";
import Profile from "./user/Profile.js";
import Products from "./pages/Admin/Products.js";
import UpdateProduct from "./pages/Admin/UpdateProduct.js";
import Search from "./pages/Search.js";
import ProductDetails from "./pages/ProductDetails.js";
import Categories from "./pages/Categories.js";
import CategoryProduct from "./pages/CategoryProduct.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/category/:slug" element={<CategoryProduct />} />
        <Route path="/product/:slug" element={<ProductDetails/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/dashboard" element={<PrivateRoute/>}>

        <Route path="user" element={<Dashboard />} />
        <Route path="user/orders" element={<Orders/>} />
        <Route path="user/profile" element={<Profile/>} />


        </Route>
        <Route path="/dashboard" element={<AdminRoute/>}>

          <Route path="admin" element={<AdminDashboard/>}/>
          <Route path="admin/create-product" element={<CreateProduct/>}/>
          <Route path="admin/product/:slug" element={<UpdateProduct/>}/>
          <Route path="admin/create-category" element={<CreateCategory/>}/>
          <Route path="admin/users" element={<User/>}/>
          <Route path="admin/products" element={<Products/>}/>

        </Route>
       
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/forgot-password" element={<ForgotPassword/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/*" element={<PageNotFound/>} />

      </Routes>
    </>
  );
}

export default App;

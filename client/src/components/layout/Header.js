import React from "react";
import { NavLink, Link } from "react-router-dom";
import { FaShopify } from "react-icons/fa6";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaUserCircle } from "react-icons/fa";
import favicon from "../layout/favicon.png";
import SearchInput from "../Form/SearchInput";
import useCategory from "../../hooks/useCategory";
import { useCart } from "../../context/cart";
import { Badge } from "antd";
import './Header.css'
function Header() {
  const [auth, setAuth] = useAuth();
  const [cart] = useCart();
  const categories = useCategory();
  const handleLogOut = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout successfully ! ");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse nav-item" id="navbarTogglerDemo01">
            <Link to="/" className="navbar-brand  ">
              <img style={{ width: "50px" }} src={favicon} alt="" />
              TechBazar
            </Link>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <SearchInput />
              <li className="nav-item">
                <NavLink to="/" className="nav-link ">
                  Home
                </NavLink>
              </li>

              <NavDropdown title="Category" id="basic-nav-dropdown">
                <li>
                  <NavLink to={`/categories`}>All Categories</NavLink>
                </li>
                {categories?.map((c) => (
                  <NavDropdown.Item href="#action/3.1">
                    <NavLink to={`/category/${c.slug}`}>{c.name}</NavLink>
                  </NavDropdown.Item>
                ))}
              </NavDropdown>

              
              {!auth.user ? (
                <>
                  <li className="nav-item">
                    <NavLink to="/register" className="nav-link ">
                      Register
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/login" className="nav-link ">
                      Login
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <NavDropdown
                    title={auth?.user?.name}
                    id="navbarScrollingDropdown"
                  >
                    <NavDropdown.Item href="#action3">
                      <NavLink
                        to={`/dashboard/${
                          auth?.user?.role === 1 ? "admin" : "user"
                        }`}
                        className="dropdown-item"
                      >
                        Dashboard
                      </NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      <NavLink
                        onClick={handleLogOut}
                        to="/login"
                        className="nav-link "
                      >
                        LogOut
                      </NavLink>
                    </NavDropdown.Item>

                    <NavDropdown.Item href="#action5">
                      <FaUserCircle />
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              )}
              <li className="nav-item">
                <Badge count={cart?.length}>
                  <NavLink to="/cart" className="nav-link ">
                    Cart {cart?.length}
                  </NavLink>
                </Badge>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;

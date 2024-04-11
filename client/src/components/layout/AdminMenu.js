import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { NavLink } from "react-router-dom";
const AdminMenu = () => {
  return (
    <>
      <div className="text-center">
      <h4>Admin Pannel</h4>
        <ListGroup>
          <ListGroup.Item>
            <NavLink to="/dashboard/admin/create-category ">Create Categories </NavLink>
          </ListGroup.Item>
          <ListGroup.Item>
            <NavLink to="/dashboard/admin/create-product ">Create Product </NavLink>
          </ListGroup.Item>
          <ListGroup.Item>
            <NavLink to="/dashboard/admin/users  ">Users </NavLink>
          </ListGroup.Item>
        </ListGroup>
      </div>
    </>
  );
};

export default AdminMenu;

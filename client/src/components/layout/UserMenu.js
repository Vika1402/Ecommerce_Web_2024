import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { NavLink } from "react-router-dom";

const UserMenu = () => {
  return (
    <>
     
        <h4>User Pannel</h4>
        <ListGroup>
          <ListGroup.Item action href="#link1">
            <NavLink to="/dashboard/user/profile ">User profile</NavLink>
          </ListGroup.Item>
          <ListGroup.Item action href="#link2">
            <NavLink to="/dashboard/user/orders ">Orders </NavLink>
          </ListGroup.Item>
        </ListGroup>
      
    </>
  );
};

export default UserMenu;

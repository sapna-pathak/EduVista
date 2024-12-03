import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, Button } from "@mui/material";
import { Link, Outlet } from 'react-router-dom';
import '../Admin/AdminPortal.css';
import img from '../assets/hide.webp';

export default function Student() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
      if (
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift")
      ) {
        return;
      }
      setIsOpen(open);
    };
  
    return (
      <div className='box row'>
        <div className='box1 col-3'>
        {/* Button to open the drawer */}
        <Button onClick={toggleDrawer(true)}><img src={img} style={{height:"50px", width:"50px"}}></img></Button>
        {/* Drawer Component */}
        <Drawer anchor="left" open={isOpen} onClose={toggleDrawer(false)}>
          <div
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
            style={{ width: 250 }}
          >
            <List>
         <ListItem button component={Link} to="/">
           <ListItemText primary="Dashboard" />
         </ListItem>
         <ListItem button component={Link} to="/subjects">
           <ListItemText primary="Subjects" />
         </ListItem>
         <ListItem button component={Link} to="/assignments">
           <ListItemText primary="Assignments" />
         </ListItem>
         <ListItem button component={Link} to="/PYQ">
           <ListItemText primary="PYQ" />
         </ListItem>
       </List>
          </div>
        </Drawer>
        </div>
        <div className='box2 col-9'>
          <h1 className='mt-2 fs-1'>STUDENT PROFILE</h1>
        </div>
      </div>
    );
  
  
}

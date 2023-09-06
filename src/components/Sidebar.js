// src/components/Sidebar.js
import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';

const Sidebar = () => {
  return (
    <Drawer variant="permanent">
      <List>
        <ListItem button>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Users" />
        </ListItem>
        {/* Add more list items */}
      </List>
    </Drawer>
  );
};

export default Sidebar;

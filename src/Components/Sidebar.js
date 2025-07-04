import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import truck from '../img/truck.svg';
import globe from '../img/globe.svg';
import officeBuilding from '../img/office-building.svg';
import presentationChartBar from '../img/presentation-chart-bar.svg';
import userGroup from '../img/user-group.svg';

export default function Sidebar({ drawerWidth }) {
  const navItems = [
    { text: 'Facility Monitoring', image: officeBuilding },
    { text: 'Cold Chain Monitoring', image: truck },
    { text: 'ESG/ SDG', image: userGroup },
    { text: 'Carbon Credits', image: globe },
    { text: 'Facility Scoring', image: presentationChartBar },
  ];

  return (
    <Drawer
      className='main-sidebar'
      variant='permanent'
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}>
      <Typography variant='h6' noWrap className='logo-text'>
        <span className='logo-text-span'>Ethyx</span>
        <span className='logo-text-mobile'>E</span>
      </Typography>

      <List>
        {navItems.map((item, index) => (
          <ListItem button key={index}>
            <ListItemIcon>
              <img
                src={item.image}
                alt={item.text}
                style={{ width: 24, height: 24 }}
              />
            </ListItemIcon>

            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

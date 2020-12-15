import React from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import sidebarBg from '../../assets/bg1.jpg';
import './index.scss';

const Sidebar = (props) => (
  <ProSidebar image={props.showBackground ? sidebarBg : false}>
    <Menu iconShape='square'>
      <MenuItem>Dashboard</MenuItem>
      <SubMenu title='Components'>
        <MenuItem>Component 1</MenuItem>
        <MenuItem>Component 2</MenuItem>
      </SubMenu>
    </Menu>
  </ProSidebar>
);

export default Sidebar;

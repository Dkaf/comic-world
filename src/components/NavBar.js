import React from 'react';
import { NavLink } from 'react-router-dom';
import NavItem from './NavItem';
import { Menu } from 'semantic-ui-react';

const items = [
  {key:"home", active:true,name:"Home"},
  {key:"events", name:"Events"},
  {key:"news", name:"What's New"},
  {key:"contact", name:"Contact"}
];

const NavBar = () => (
  <Menu className="nav-bar">
    <Menu.Item href="/">Home</Menu.Item>
    <Menu.Item href="/events">Events</Menu.Item>
    <Menu.Item href="/news">What's New</Menu.Item>
    <Menu.Item href="/articles">Articles</Menu.Item>
    <Menu.Item href="/contact">Contact</Menu.Item>
  </Menu>
);

export default NavBar;
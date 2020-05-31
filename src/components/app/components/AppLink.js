import React from 'react';
import { NavLink } from 'react-router-dom';

const AppLink = ({ to, children }) => <NavLink to={to}>{children}</NavLink>;

export default AppLink;

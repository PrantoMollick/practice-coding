import React, { useState }  from 'react';


import { NavLink } from 'react-router-dom';

import ReorderIcon from '@mui/icons-material/Reorder';

import classes from './MainNavigation.module.css';

import logo from '../../assets/logo.png'


function MainNavigation() {
  const [navigation, setNavigation] = useState(false);

  const handBugerMenuHandler = () => { 
    setNavigation(!navigation);
  }

  return (
    <header className={classes.navbar}>
      <div className={`${classes.leftSide} ${navigation ? classes.open : classes.close}`}>
        <img src={logo} alt="logo" />
        <nav className={classes.hiddenLinks}>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/'>Menu</NavLink>
          <NavLink to='/'>About</NavLink>
          <NavLink to='/'>Contact</NavLink>
        </nav>
      </div>
      <nav className={classes.rightSide}>
       <NavLink to='/'>Home</NavLink>
       <NavLink to='/'>Menu</NavLink>
       <NavLink to='/'>About</NavLink>
       <NavLink to='/'>Contact</NavLink>
       <button onClick={handBugerMenuHandler}>
         <ReorderIcon />
       </button>
      </nav>
    </header>
  );
}

export default MainNavigation;

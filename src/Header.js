import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';

export default function Header() {
    const displayDesktop = () => {
      return <Toolbar className='Header'>Welcome to your link shortener tool !</Toolbar>;
    };
    
    return (
      <header>
        <AppBar>{displayDesktop()}</AppBar>
      </header>
    );
  }
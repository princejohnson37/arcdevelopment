import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import { useScrollTrigger } from '@mui/material';

function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
    // the number 4 is the elevation of navbar when it triggers (scrolled) otherwise to no elevation, change that to increase/decreaseeleveation
  }

function Header(props) {
  return (
    <ElevationScroll {...props}>
    <AppBar>
        <Toolbar>Header</Toolbar>
    </AppBar>
    </ElevationScroll>
  )
}

export default Header
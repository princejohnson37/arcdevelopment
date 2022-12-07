import React from "react";
import {AppBar, Toolbar, Typography} from "@mui/material";
import {useScrollTrigger} from "@mui/material";
import theme from "./customTheme";
import {styled} from "@mui/system";

import './Header.css';
import logo from "../../assets/logo.svg";
import customTheme from "./customTheme";
import useClasses from "../../hooks/useClasses";

function ElevationScroll(props) {
  const {children, window} = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window
      ? window()
      : undefined
  });

  return React.cloneElement(children, {
    elevation: trigger
      ? 4
      : 0
  });
  // the number 4 is the elevation of navbar when it triggers (scrolled) otherwise to no elevation, change that to increase/decreaseeleveation
}
const styles = theme => ( {
  toolbarMargin:200
});

//   (theme)=>({
//   toolbarMargin: {
//     ...theme.mixins.toolbar,
//   }
// }
// ))
// )

function Header(props) {
  const classes = useClasses(styles);
  return (<React.Fragment>
    <ElevationScroll {...props}>
      <AppBar position="fixed">
        <Toolbar disableGutters>
          <img className="header-logo" alt="company logo" src={logo}/>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  </React.Fragment>);
}

export default Header;

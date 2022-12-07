import React, { useState } from "react";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { useScrollTrigger } from "@mui/material";
import theme from "./customTheme";
import { styled } from "@mui/system";
import { Tabs } from "@mui/material";
import { Tab } from "@mui/material";

import logo from "../../assets/logo.svg";

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

const Div = styled(`div`)(({ theme }) => ({
  ...theme.mixins.toolbar,
  marginBottom: "3em",
}));

const Img = styled("img")``;

const StyledTab = styled(Tab)(({ theme }) => ({
  ...theme.typography.tab,
  minWidth: 10,
  marginLeft: "25px",
}));

const StyledBtn = styled(Button)(({ theme }) => ({
  ...theme.typography.estimate,
  borderRadius: "50px",
  marginLeft: "50px",
  marginRight: "25px",
  height: "45px",
}));

function Header(props) {
  const [value,setValue] = useState(0);
  const handleChange = (e, value) => {
    setValue(value);
  }
  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar disableGutters>
            <Img style={{ height: "7em" }} src={logo} alt="company logo" />
            <Tabs sx={{ marginLeft: "auto", fontSize: "3rem" }} value={value} onChange={handleChange} indicatorColor="secondary">
              <StyledTab value={0} label="Home" />
              <StyledTab value={1} label="Services" />
              <StyledTab value={2} label="The Revolution" />
              <StyledTab value={3} label="About Us" />
              <StyledTab value={4} label="Contact Us" />
            </Tabs>
            <StyledBtn variant="contained" color="secondary">
              Free Estimate
            </StyledBtn>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Div />
    </React.Fragment>
  );
}

export default Header;

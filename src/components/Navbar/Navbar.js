import {
  AppBar,
  Box,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import image from "../../images/Ellipse 4@1X.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleClick = () => setIsOpen(!isOpen);

  return (
    <div>
      {/* <!-- mobile menu bar --> */}
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ bgcolor: "white", color: "black" }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 0 }}
            >
              <Stack direction="row" spacing={2}>
                <img src={image} alt="" srcSet="" />
                <img src={image} alt="" srcSet="" />
                <img src={image} alt="" srcSet="" />
              </Stack>
            </IconButton>
            <Typography component="p" sx={{ flexGrow: 1, fontWeight: "bold" }}>
              WANT TO DISCUSS YOUR PROJECT IN DETAIL?{" "}
              <Typography variant="span" sx={{ color: "#1390B9" }}>
                SCHEDULE A CALL
              </Typography>
            </Typography>
            <Button color="inherit">
              <Stack direction="row" spacing={2}>
                <img src={image} alt="" srcSet="" />
                <img src={image} alt="" srcSet="" />
                <img src={image} alt="" srcSet="" />
              </Stack>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>

      <Outlet />
    </div>
  );
};

export default Navbar;

import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-scroll";
// import AccountCircle from "@material-ui/icons/AccountCircle";
// import MailIcon from "@material-ui/icons/Mail";
// import NotificationsIcon from "@material-ui/icons/Notifications";
import MenuIcon from "@material-ui/icons/Menu";
import {
  Container,
  AppBar,
  Toolbar,
  IconButton,
  // Badge,
  // MenuItem,
  Menu,
} from "@material-ui/core";

import img from "../../assets/images/logo.png";
import { LogoBox, HeaderBox, NavContainer } from "./HeaderElements";
// import { NavLink } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  mobLink: {
    [theme.breakpoints.down("md")]: {
      "& .MuiPaper-rounded": {
        left: "0 !important",
        right: "0 !important",
        top: "62px !important",
        background: "rgba(0,0,0,0.9)",
        maxWidth: "100%",

        "& ul": {
          padding: "0px",
          display: "flex",
          flexDirection: "column",
          "& a": {
            padding: "10px",
            color: "#fff",
            "&:hover": {
              background: "red",
              color: "#fff",
            },
          },
        },
      },
    },
  },
}));

function Header() {
  const classes = useStyles();
  // const [
  //    anchorEl,
  //    setAnchorEl,
  // ] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  // const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  // const handleProfileMenuOpen = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  // const handleMenuClose = () => {
  //   setAnchorEl(null);
  //   handleMobileMenuClose();
  // };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  // const menuId = "primary-search-account-menu";
  // const renderMenu = (
  //   <Menu
  //     anchorEl={anchorEl}
  //     anchorOrigin={{ vertical: "top", horizontal: "right" }}
  //     id={menuId}
  //     keepMounted
  //     transformOrigin={{ vertical: "top", horizontal: "right" }}
  //     open={isMenuOpen}
  //     onClose={handleMenuClose}
  //   >
  //     <MenuItem onClick={handleMenuClose}>Login</MenuItem>
  //     <MenuItem onClick={handleMenuClose}>Register</MenuItem>
  //     <MenuItem onClick={handleMenuClose}>Account</MenuItem>
  //     <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
  //   </Menu>
  // );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      className={classes.mobLink}
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <Link
        activeClass="active"
        to="food"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Browse Food
      </Link>
      <Link
        activeClass="active"
        to="app"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Download App
      </Link>
      <Link
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        About Us
      </Link>
    </Menu>
  );
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 200);
    });
  }, []);
  return (
    <HeaderBox>
      <AppBar
        position="static"
        className={scroll ? "main-header scrolled" : "main-header"}
      >
        <Container>
          <Toolbar>
            <LogoBox>
              <img src={img} alt="logo" />
            </LogoBox>
            <div className={classes.sectionDesktop}>
              <NavContainer>
                <Link
                  activeClass="active"
                  to="food"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Browse Food
                </Link>
                <Link
                  activeClass="active"
                  to="app"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Download App
                </Link>
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  About Us
                </Link>
              </NavContainer>

              {/* <IconButton
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton> */}
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
      {renderMobileMenu}
      {/* {renderMenu} */}
    </HeaderBox>
  );
}

export default Header;

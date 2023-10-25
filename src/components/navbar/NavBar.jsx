
import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { NavLink, Link } from "react-router-dom";
import './navbar.css';
import CloseIcon from "@mui/icons-material/Close";
import logo from './../../assets/images/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg';
const drawerWidth = 200;
const navItems = [
  { label: "Home", path: "/" },
  { label: "Pages", path: "/page" },
  { label: "Movies", path: "/movie" },
  { label: "TV Shows", path: "/tv" },
  { label: "Celebs", path: "/celebs" },

];
const Navbar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleNavbar = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const nav = (
    
    <Box onClick={handleNavbar} sx={{ textAlign: "center" }}>
      <Typography className="nav_cross_per" variant="h6" sx={{ my: 2 }}>
        <CloseIcon className="nav_cross" />
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <NavLink key={item.label} className="nav-links" to={item.path}>
                {item.label}
              </NavLink>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <div className="container">
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar component="nav">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleNavbar}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
            >
              <figure className="nav_logo">
                <Link to="/">
                  <img src={logo} alt="" />
                </Link>
              </figure>
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <NavLink key={item.label} className="nav-links" to={item.path}>
                  {item.label}
                </NavLink>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleNavbar}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {nav}
          </Drawer>
        </nav>
      </Box>
    </div>
  );
}
Navbar.propTypes = {
  window: PropTypes.func,
};
export default Navbar;

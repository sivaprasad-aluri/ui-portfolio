"use client";
import React from "react";
import {
  AppBar,
  Button,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  IconButton,
  Box,
  Toolbar,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SummarizeIcon from "@mui/icons-material/Summarize";
import ContactMailIcon from "@mui/icons-material/ContactMail";

const Header = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{
            height: { sm: "100vh" },
          }}
        >
          <Toolbar>
            <Typography
              variant="h4"
              component="div"
              sx={{
                flexGrow: 1,
                textAlign: {
                  sm: "center",
                },
                py: {
                  sm: 3,
                },
              }}
            >
              Siva
            </Typography>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2, display: { sm: "none" } }}
              onClick={toggleDrawer(!open)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
          <Divider sx={{ borderColor: "#ffffff99" }} />
          <Box
            sx={{
              my: {
                sm: 4,
              },
              display: {
                xs: "none",
                sm: "block",
              },
            }}
          >
            <List>
              {["About", "Resume", "Portfolio", "Contact"].map(
                (text, index) => (
                  <ListItem key={text} disablePadding>
                    <ListItemButton>
                      <ListItemIcon
                        sx={{
                          "&.MuiListItemIcon-root": {
                            color: "#fff",
                          },
                          textAlign: {
                            md: "center",
                          },
                        }}
                      >
                        {text === "About" && <AccountBoxIcon />}
                        {text === "Resume" && <SummarizeIcon />}
                        {text === "Portfolio" && <BusinessCenterIcon />}
                        {text === "Contact" && <ContactMailIcon />}
                      </ListItemIcon>
                      <ListItemText
                        primary={text}
                        sx={{
                          display: {
                            sm: "none",
                            md: "block",
                          },
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                )
              )}
            </List>
          </Box>
        </AppBar>
      </Box>
      <Drawer
        open={open}
        onClose={toggleDrawer(!open)}
        sx={{ background: "primary" }}
      >
        <List>
          {["About", "Resume", "Portfolio", "Contact"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText primary={text} />
                <ListItemIcon
                  sx={{
                    "&.MuiListItemIcon-root": {
                      color: "#fff",
                    },
                  }}
                >
                  {text === "About" && <AccountBoxIcon />}
                  {text === "Resume" && <SummarizeIcon />}
                  {text === "Portfolio" && <BusinessCenterIcon />}
                  {text === "Contact" && <ContactMailIcon />}
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Header;

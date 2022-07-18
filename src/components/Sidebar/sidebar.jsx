import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ExpandLess, ExpandMore, Menu } from "@mui/icons-material";
import {
  Collapse,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Divider,
} from "@mui/material";
import { Space } from "../space";
import data from "../../data/sidebar.json";

export const Sidebar = () => {
  const navigate = useNavigate();

  const [dropdown, setDropdown] = useState(false);
  const [open, setOpen] = useState(false);

  const arr = data.pages;

  return (
    <>
      <AppBar position="fixed" color="primary" sx={{ zIndex: "3" }}>
        <Toolbar>
          <IconButton sx={{ mr: 2 }} onClick={() => setOpen(!open)}>
            <Menu />
          </IconButton>
          <Typography variant="h6">Vintage Club</Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          position: "relative",
          width: "200px",
          zIndex: "1",
          "& .MuiDrawer-paper": {
            width: "200px",
          },
        }}
        open={open}
        variant="persistent"
        anchor="left"
      >
        <Space />
        <List>
          <ListItemButton onClick={() => setDropdown(!dropdown)}>
            <ListItemText primary="Products" />
            {dropdown ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={dropdown} timeout="auto" unmountOnExit>
            <List disablePadding>
              {arr &&
                arr.map((e) => {
                  return (
                    <ListItemButton
                      key={e.id}
                      sx={{ pl: 4 }}
                      onClick={() => navigate(e.link)}
                    >
                      <ListItemText primary={e.name} />
                    </ListItemButton>
                  );
                })}
              <Divider />
            </List>
          </Collapse>
          <ListItemButton onClick={() => navigate("/not-have")}>
            <ListItemText primary="Don't Have It" />
          </ListItemButton>
        </List>
      </Drawer>
    </>
  );
};

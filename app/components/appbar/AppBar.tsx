import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LoginIcon from "@mui/icons-material/Login";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ height: "60px", background: "#282828" }}>
        <Toolbar>
          <div style={{ flexGrow: 1.4 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Golden Perfume
          </Typography>
          <Button color="inherit">
            Cart <ShoppingCartIcon />
          </Button>
          <Button color="inherit">
            Favorites
            <FavoriteIcon />
          </Button>
          <Button color="inherit">
            Login
            <LoginIcon />
          </Button>
          English | Dutch
        </Toolbar>
      </AppBar>
    </Box>
  );
}

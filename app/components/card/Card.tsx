import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function ImgMediaCard() {
  return (
    <Card sx={{ maxWidth: 345, border: "none", boxShadow: "none" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        src="https://img-cdn.heureka.group/v1/a363fc86-c85f-4d35-9bb0-4617ca76f283.jpg?width=350&height=350"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          className="flex items-center justify-center"
        >
          Jean Paul G.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Jean Paul Lizards are a widespread group of squamate reptiles, with
          over 6,000 species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions className="flex items-center justify-center">
        <Button size="small">
          <ShoppingCartIcon />
        </Button>
        <Button size="small">
          <FavoriteIcon />
        </Button>
      </CardActions>
    </Card>
  );
}

import { Button, Card, CardContent, styled, Typography } from "@mui/material";
import React from "react";
import Image from "../../assets/trophy.png";
const TringleImage = styled("img")({
  right: 0,
  bottom: 0,
  height: 170,
  position: "absolute",
});
const TrophyImg = styled("img")({
  right: 36,
  bottom: 20,
  height: 98,
  position: "absolute",
});
const Acheivment = () => {
  return (
    <div>
      <Card sx={{ position: "relative" }}>
        <CardContent>
          <Typography variant="h6" sx={{ letterSpacing: ".25px" }}>
            Shop with Haris
          </Typography>
          <Typography variant="body2">Congratulations 🥳</Typography>
          <Typography variant="h5" sx={{ my: 3.1 }}>
            420.8k
          </Typography>
          <Button size="small" variant="contained">
            View Sales
          </Button>
          <TringleImage></TringleImage>
          <TrophyImg src={Image}></TrophyImg>
        </CardContent>
      </Card>
    </div>
  );
};

export default Acheivment;

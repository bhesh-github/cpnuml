import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ActionAreaCard({
  thumbnail = "",
  title = "",
  desc = "",
  sendId = "",
}) {
  const navigate = useNavigate();
  return (
    <>
      <Card
        // sx={{ maxWidth: 345 }}
        className="news-card"
        onClick={() => {
          setTimeout(() => {
            navigate("/news-detail");
          }, 100);
        }}
      >
        <CardActionArea>
          <CardMedia
            className="card-image"
            component="img"
            height="140"
            image={thumbnail && thumbnail}
            alt=""
          />
          <CardContent className="text-section">
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="title"
            >
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary" className="desc">
              {desc}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}

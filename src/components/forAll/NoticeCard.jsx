import * as React from "react";
// import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
// import PlayArrowIcon from "@mui/icons-material/PlayArrow";
// import SkipNextIcon from "@mui/icons-material/SkipNext";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function MediaControlCard({ title = "", thumbnail = "" }) {
  const navigate = useNavigate();

  return (
    <>
      <CardActionArea
        onClick={() => {
          setTimeout(() => {
            navigate("/notice-detail");
          }, 200);
        }}
      >
        <Card sx={{ display: "flex" }} className="notice-card">
          <Box
            sx={{ display: "flex", flexDirection: "column" }}
            className="content"
          >
            <img src={thumbnail} alt="" className="card-img" />
            <div className="text-area">
              <div className="title">{title}</div>
            </div>
          </Box>
        </Card>
      </CardActionArea>
    </>
  );
}

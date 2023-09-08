import React from "react";
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";

const Archive = ({ archives }) => {

  return (
    <>
      <div className="archive-page">
        <div className="contents">
          <div className="heading-wrapper">
            <div className="title">Archive</div>
          </div>
          <div className="archive-wrapper">
            {archives &&
              archives.map((_, idx) => {
                return (
                  <CardActionArea
                    key={idx}
                  >
                    <Card
                      sx={{ display: "flex" }}
                      className="square-notice-card"
                    >
                    </Card>
                  </CardActionArea>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Archive;

Archive.defaultProps = {
  archives: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
};

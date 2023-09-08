import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
// import SearchIcon from "@mui/icons-material/Search";
import companyLogo from "../../../images/forAll/companyLogo.png";
import ProgressIndicator from "../../forAll/ProgressIndicator";

import { useNavigate } from "react-router-dom";
//
import AccountMenu from "../../forAll/accountMenu/AccountMenu";
//
// import { NavLink } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
// import { BsGlobe2 } from "react-icons/bs";
// import nepalFlag from "../../../images/forAll/nepal-flag.png";
import { MdMail, MdTimeline } from "react-icons/md";
import { ImNewspaper } from "react-icons/im";
import { GrNotes, GrGallery } from "react-icons/gr";
import { PiArchiveBox } from "react-icons/pi";
import { IoHomeOutline } from "react-icons/io5";
import { GoVideo } from "react-icons/go";
import topBorder from "../../../images/forAll/topborder.jpg";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

// const SearchIconWrapper = styled("div")(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: "100%",
//   position: "absolute",
//   pointerEvents: "none",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// }));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function SearchAppBar({ navItems }) {
  const [searchInput, setSearchInput] = React.useState("");
  const [isSearching, setIsSearching] = React.useState(false);

  const handleSearch = () => {
    if (searchInput !== "") {
      setIsSearching(true);
      setTimeout(() => {
        setIsSearching(false);
        searchInput !== "" && setSearchInput("");
      }, 2000);
    }
  };
  
  isSearching
    ? (document.body.style.overflowY = "hidden")
    : (document.body.style.overflowY = "scroll");

  const navigate = useNavigate();
  const navIcons = {
    home: <IoHomeOutline className="nav-icon" />,
    timeline: <MdTimeline className="nav-icon" />,
    news: <ImNewspaper className="nav-icon" />,
    notice: <GrNotes className="nav-icon" />,
    archive: <PiArchiveBox className="nav-icon" />,
    gallery: <GrGallery className="nav-icon" />,
    videos: <GoVideo className="nav-icon" />,
  };

  return (
    <>
      {isSearching && (
        <div className="spinner-wrapper">
          <ProgressIndicator sentColor="#e10101" className="spinner" />
        </div>
      )}
      <div className="header">
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" className="items-container">
            <div className="top-border">
              <img src={topBorder} alt="" className="top-border" />
            </div>
            <Toolbar className="nav-wrapper">
              <div className="left">
                <img
                  src={companyLogo}
                  alt=""
                  className="company-logo"
                  onClick={() => {
                    navigate("/");
                  }}
                />
                <div
                  className="company-name"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  केन्द्रीय बिभागहरु
                </div>
              </div>
              <div className="divider"></div>
              <div className="right">
                <Search className="search-bar">
                  <AiOutlineSearch
                    className="search-icon"
                    onClick={handleSearch}
                  />
                  <StyledInputBase
                    placeholder="Search here..."
                    value={searchInput}
                    onChange={(e) => {
                      setSearchInput(e.target.value);
                    }}
                    inputProps={{ "aria-label": "search" }}
                  />
                </Search>
                <div className="mail-wrapper">
                  <MdMail className="mail-icon" />
                </div>
                <AccountMenu />
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  sx={{ mr: 2 }}
                  className="toggle-icon-wrapper"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasRight"
                  aria-controls="offcanvasRight"
                >
                  <RxHamburgerMenu className="toggle-icon" />
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>
        </Box>
      </div>
      {/* -------------------------------------------------- */}

      <div
        className="offcanvas offcanvas-end sidebar"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <div className="company-title-wrapper">
            <img src={companyLogo} className="company-logo" alt="" />
            <h5
              className="offcanvas-title company-name"
              id="offcanvasRightLabel"
            >
              केन्द्रीय बिभागहरु
            </h5>
          </div>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <hr className="hr hr-line" />
        <div className="offcanvas-body items-wrapper">
          {navItems &&
            navItems.map((item) => {
              const {
                id = "",
                text = "",
                linkType = "",
                navigateLink = "",
              } = item;
              const curIcon = navIcons[linkType];
              return (
                <div
                  data-bs-dismiss="offcanvas"
                  className="nav-item"
                  key={id}
                  onClick={() => {
                    navigate(`${navigateLink}`);
                  }}
                >
                  <span>{curIcon}</span>
                  <span className="text">{text}</span>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

SearchAppBar.defaultProps = {
  navItems: [
    {
      id: 0,
      text: "Home",
      linkType: "home",
      navigateLink: "/",
    },
    {
      id: 1,
      text: "Timeline",
      linkType: "timeline",
      navigateLink: "timeline",
    },
    {
      id: 2,
      text: "News",
      linkType: "news",
      navigateLink: "news",
    },
    {
      id: 3,
      text: "Notice",
      linkType: "notice",
      navigateLink: "notice",
    },
    {
      id: 4,
      text: "Archive",
      linkType: "archive",
      navigateLink: "archive",
    },
    {
      id: 5,
      text: "Gallery",
      linkType: "gallery",
      navigateLink: "gallery",
    },
    {
      id: 6,
      text: "Videos",
      linkType: "videos",
      navigateLink: "videos",
    },
  ],
};

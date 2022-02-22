import React from "react";
import banner from "../img/bg-desktop-light.jpg";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  header: {
    width: "100%",
    height: "40vh",
    backgroundImage: `url(${banner})`,
    backgroundSize: "cover",
    backgroundPosition: "bottom",
    position: "relative",
  },
});

const Header = () => {
  const classes = useStyle();
  return <div className={classes.header}></div>;
};

export default Header;

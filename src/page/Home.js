import React, { Component, Fragment } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import NavigationBar from "../components/NavigationBar";
import Sidebar from "../components/Sidebar";
// import Navbar from "../components/Navbar";
import CheckBox from "../components/atoms/CheckBox";
import Navbar from "../organism/Navbar";

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        {/* <NavigationBar /> */}
        {/* <Sidebar /> */}
        <Navbar />
        {/* <CheckBox /> */}
      </Fragment>
    );
  }
}

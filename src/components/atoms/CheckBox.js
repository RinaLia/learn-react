import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import InputBase from "@material-ui/core/InputBase";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function IconButtons() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <IconButton>
        <CheckBoxOutlineBlankIcon />
        <Typography>Remember me</Typography>
      </IconButton>
    </div>
  );
}

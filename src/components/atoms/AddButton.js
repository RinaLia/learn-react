import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import AddCircleTwoToneIcon from "@material-ui/icons/AddCircleOutlineTwoTone";

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
      <IconButton aria-label="add">
        <AddCircleTwoToneIcon />
      </IconButton>
    </div>
  );
}

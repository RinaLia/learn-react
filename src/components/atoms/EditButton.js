import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import EditTwoToneIcon from "@material-ui/icons/EditTwoTone";
// import AddCircleIcon from "@material-ui/core/icons/AddCircle";

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
      <IconButton aria-label="edit">
        <EditTwoToneIcon />
      </IconButton>
    </div>
  );
}

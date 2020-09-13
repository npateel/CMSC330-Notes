import React from "react";
import { Link } from "gatsby-theme-material-ui";
import { Typography, makeStyles, fade } from "@material-ui/core";

const navLinkStyles = makeStyles(theme => {
  console.log(theme);

  return {
    root: {
      alignSelf: "stretch",
      alignItems: "center",
      padding: 0,
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "flex",
        flexGrow: 1,
      },
    },
    item: {
      color: theme.palette.common.white,
    },
  };
});

const linkStyles = makeStyles(theme => ({
  root: {
    display: "none",
    height: "100%",
    color: theme.palette.common.white,
    alignItems: "center",
    minWidth: theme.spacing(13),
    width: "100%",
    justifyContent: "center",
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
      textDecoration: "none",
      borderBottom: "5px solid " + fade(theme.palette.common.white, 0.95),
    },
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      width: "auto",
    },
  },
}));

function ListItem(props) {
  const { text, to } = props;
  const classes = linkStyles();
  return (
    <Link to={to} variant="h5" className={classes.root}>
      {text}
    </Link>
  );
}

export default function NavLinks(props) {
  const { linkdata } = props;
  const classes = navLinkStyles();
  const links = linkdata.map(({ text, to, dropdown }, index) => {
    return (
      <ListItem
        text={text}
        to={to}
        dropdown={dropdown}
        key={index}
        className={classes.item}
      >
        Hello
      </ListItem>
    );
  });
  return <div className={classes.root}>{links}</div>;
}

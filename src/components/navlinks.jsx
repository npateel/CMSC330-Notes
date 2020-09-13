import React from "react";
import { Link } from "gatsby-theme-material-ui";
import { Typography, makeStyles, fade } from "@material-ui/core";

const navLinkStyles = makeStyles(theme => ({
  root: {
    flexGrow: 4,
    display: "flex",
    flexDirection: "row-reverse",
  },
  item: {
    color: theme.palette.common.white,
  },
}));

const linkStyles = makeStyles(theme => ({
  root: {
    display: "none",
    color: theme.palette.common.white,
    marginRight: theme.spacing(2),
    "& a:visited": {
      color: theme.palette.common.white,
    },
    [theme.breakpoints.up("sm")]: {
      display: "inline-block",
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

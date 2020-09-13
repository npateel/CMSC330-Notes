import React from "react";
import { Container, AppBar, Toolbar, InputBase } from "@material-ui/core";
import { makeStyles, fade } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import { Link, IconButton } from "gatsby-theme-material-ui";

import NavLinks from "../components/navlinks.jsx";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
      width: "0px",
    },
  },
  title: {
    color: theme.palette.common.white,
    "&:hover": {
      textDecoration: "none",
    },
    marginRight: theme.spacing(7.5),
    display: "none",
    [theme.breakpoints.up("lg")]: {
      display: "block",
    },
  },
  searchContainer: {
    marginLeft: theme.spacing(1),
    width: "100%",
    [theme.breakpoints.up("lg")]: {
      width: "284px",
    },
  },

  search: {
    float: "right",
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "fit-content",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 5, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(5)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("lg")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function Navbar(props) {
  const { children } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-la
            >
              <MenuIcon />
            </IconButton>
            <Link variant="h5" to="/" className={classes.title}>
              CMSC 330
            </Link>

            <NavLinks
              linkdata={[
                { text: "Test 1", to: "/test1", dropdown: "ruby" },
                { text: "Test 2", to: "/test2", dropdown: "ocaml" },
                { text: "Test 3", to: "/test3", dropdown: "rust" },
              ]}
            />
            <div className={classes.searchContainer}>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search..."
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ "aria-label": "search" }}
                />
              </div>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
      {children}
    </div>
  );
}

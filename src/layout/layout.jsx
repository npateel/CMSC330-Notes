import React from "react";
import Navbar from "./navbar.jsx";
export default function Layout(props) {
  const { children } = props;
  return <Navbar>{children}</Navbar>;
}

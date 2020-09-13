import React from "react";
import { Container, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Layout from "../layout/layout";

const useStyles = makeStyles(theme => ({
  root: {
    "& h1": {
      ...theme.typography.h2,
    },
    "& p": {
      ...theme.typography.p,
    },
  },
}));

export default function Test1() {
  const styles = useStyles();
  return (
    <Layout>
      <Container maxWidth="lg" className={styles.root}>
        <h1>Week 1</h1>
        <p>This is a test in our markdown abiliteis</p>
      </Container>
    </Layout>
  );
}

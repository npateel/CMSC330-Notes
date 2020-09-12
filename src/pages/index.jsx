import React from "react";
import { Button, Container, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Layout from "../layout/layout";

export default function Home() {
  return (
    <Layout>
      <Paper elevation={1}>
        <Container maxWidth="lg">
          <Typography variant="h1">CMSC330</Typography>
          <Typography variant="body1">
            Pellentesque dapibus suscipit ligula. Donec posuere augue in quam.
            Etiam vel tortor sodales tellus ultricies commodo. Suspendisse
            potenti. Aenean in sem ac leo mollis blandit. Donec neque quam,
            dignissim in, mollis nec, sagittis eu, wisi. Phasellus lacus. Etiam
            laoreet quam sed arcu. Phasellus at dui in ligula mollis ultricies.
            Integer placerat tristique nisl. Praesent augue. Fusce commodo.
            Vestibulum convallis, lorem a tempus semper, dui dui euismod elit,
            vitae placerat urna tortor vitae lacus. Nullam libero mauris,
            consequat quis, varius et, dictum id, arcu. Mauris mollis tincidunt
            felis. Aliquam feugiat tellus ut neque. Nulla facilisis, risus a
            rhoncus fermentum, tellus tellus lacinia purus, et dictum nunc justo
            sit amet elit.
          </Typography>
        </Container>
      </Paper>
      <Container maxWidth="lg">
        <Typography variant="h3">Add Components under here!</Typography>
      </Container>
    </Layout>
  );
}

import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import Form from "./components/Form/Form.component";
import Posts from './components/Posts/Posts.component';

import memories from './images/memories.png';

import useStyles from './styles';

export const App = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <AppBar className={ classes.appBar } position="static" color="inherit">
        <Typography className={ classes.heading } variant="h2">Memories</Typography>
        <img className={ classes.image} src={ memories } alt="memories" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justifyContent="space-between" alignItems="stretch" spacing={4}>
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
import { Box, Container, Grid, Typography } from "@mui/material";
import { memo } from "react";
import Header from "./components/Header";
const Home = () => {
  return (
    <Container maxWidth="xl" disableGutters>
      <Box>
        <Grid container>
          <Grid item xs={12} sm={2}>
            <Header />
          </Grid>
          <Grid item xs={12} sm={10}>
            <Typography variant="h2"> Hello</Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default memo(Home);

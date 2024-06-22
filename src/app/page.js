import { Box, Container, Typography } from "@mui/material";
import { memo } from "react";
import ValueType from "./components/valueType/ValueType";
const Home = () => {
  return (
    <Container maxWidth="xl" disableGutters>
      <Box>
        <Typography variant="h2" my={2}>
          Hello World!
        </Typography>
        <ValueType></ValueType>
      </Box>
    </Container>
  );
};

export default memo(Home);

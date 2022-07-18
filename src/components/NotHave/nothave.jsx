import { Container, Typography } from "@mui/material";
import { Sidebar } from "../Sidebar/sidebar";
import { Space } from "../space";

export const NotHave = () => {
  return (
    <>
      <Sidebar />
      <Space />
      <Container maxWidth="xl">
        <Typography>Not Have</Typography>
      </Container>
    </>
  );
};

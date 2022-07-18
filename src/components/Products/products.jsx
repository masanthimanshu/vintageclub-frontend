import { useParams } from "react-router-dom";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@mui/material";
import { Sidebar } from "../Sidebar/sidebar";
import { Space } from "../space";
import { useEffect } from "react";
import data from "../../data/teddy.json";

export const Products = () => {
  const { type } = useParams();

  useEffect(() => {
    console.log(`CallBack Executed For ${type}`);
  }, [{ type }]);

  return (
    <>
      <Sidebar />
      <Space />
      <Container maxWidth="xl">
        <Typography align="center" sx={{ textTransform: "Capitalize" }}>
          Category : {type}
        </Typography>
        <Grid container spacing={2}>
          {data &&
            data.map((e) => {
              return (
                <Grid item lg={3} xs={12} key={e._id}>
                  <Card>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="150"
                        image={e.img}
                        alt="Product Image"
                        sx={{ backgroundSize: "contain" }}
                      />
                      <CardContent>
                        <Typography>{e.name}</Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              );
            })}
        </Grid>
      </Container>
    </>
  );
};

import React from "react";
import axios from 'axios';
import { useQuery } from 'react-query';
import { 
  Grid,
  Box,
  Typography,
  Alert } from "@mui/material";

import "./style.css";


const Categories = () => {
  const { data: categories, isLoading: isBrandLoading, error } = useQuery(
    `categories`,
    () => axios.get("http://localhost:5000/categories"),
  );

  return (
    <Box width={"100%"} component="article">
      <Grid container spacing={5}>
        {error && <Alert severity="error">{error}</Alert>}
        {!isBrandLoading ? categories?.data.map(({id, img, name, description}) => (
          <Grid item  sm={6} md={4} lg={3} key={id} alignItems="stretch">
            <Box sx={{height: "100%", borderRadius: "0.375rem", boxShadow: "0 0 15px 1px #a5a5a575"}}>
              <Box sx={{width: "100%", height: "10rem"}}>
                <img src={img} alt={name} style={{width: "100%", height: "100%", objectFit: "contain"}} />
              </Box>
              <Box sx={{p: "1rem"}}>
                <Typography component="h2" sx={{fontSize: "2rem", fontWeight: "bold", color: "#353535"}}>{name}</Typography>
                <Typography component="body" sx={{fontSize: "1.25rem", color: "#454545"}}>{description}</Typography>
              </Box>
            </Box>
          </Grid>
        )) : "Loading..."}
      </Grid>
    </Box>
  );
};

export { Categories };

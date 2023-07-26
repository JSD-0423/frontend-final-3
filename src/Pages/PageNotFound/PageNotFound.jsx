import React from "react";
import { Box, Typography,Link } from '@mui/material'
import "./style.css";

function PageNotFound() {
  
  return (
    <Box width="100%" sx={{display: "flex", flexDirection: "column", alignItems: "center", py: "5rem"}}>
      <Typography variant="h2" color="primary" sx={{pb: "2rem", fontWeight: "bold"}}>
        Oops!
      </Typography>
      <Typography variant="h3" color="primary" sx={{pb: "2rem", fontWeight: "bold"}}>
        Page Not Found!
      </Typography>
      <Link className="link" href="/" underline="none">
        <Typography variant="body1" color="ActiveBorder" sx={{pb: "2rem", fontWeight: "bold"}}>
          Go Home Page
        </Typography>
      </Link>
    </Box>
  );
}

export default PageNotFound;

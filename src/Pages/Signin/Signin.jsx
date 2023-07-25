import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { Box, Typography, Alert } from '@mui/material'

import SigninForm from "../../Components/SigninForm";

const TITLE = "Signin";

function Signin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onFinish = async (userData) => {
    console.log(userData);
    try {
      setLoading(true);
      setError("");
      const res = await Axios.post("http://localhost:5000/users/login", userData, {withCredentials: true});
      // const res = await Axios.post("https://store-osn9.onrender.com/users/login", userData);
      // document.cookie = `accessToken=${res.data.accessToken}`
      setLoading(false);
      navigate("/", {
        state: {
          userData: { ...res?.data?.data },
        },
      });
    } catch (err) {
      console.log(err);
      const e = err.toJSON();
      console.log(e);
      setError(e.message);
      setLoading(false);
    }
  };
  console.log(error);
  return (
    <Box width="100%" sx={{display: "flex", flexDirection: "column", alignItems: "center", py: "5rem"}}>
      {error && <Alert severity="error">{error}</Alert>}
      <Typography variant="h2" color="primary" sx={{pb: "2rem", fontWeight: "bold"}}>
        {TITLE}
      </Typography>
      <SigninForm onFinish={onFinish} isLoading={loading} />
    </Box>
  );
}

export default Signin;

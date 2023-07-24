import React, {
} from "react";
import PropTypes from 'prop-types';
import { useFormik } from "formik";
import * as Yup from "yup";
import {TextField, Button, CircularProgress} from "@mui/material";

import styles from "./style.module.css";

const SigninForm = ({
  onFinish,
  isLoading,
}) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    initialErrors: {
      email: "This field is required",
      password: "This field is required",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("This field is required"),
      password: Yup.string().required("This field is required"),
    }),
    onSubmit: (values) => {
      onFinish(values);
    },
  });

  const handleClick = () => {
    formik.handleSubmit();
  };

  const handleBlur = (
    event
  ) => {
    formik.handleBlur(event);
  };

  const handleChange = (event) => {
    formik.handleChange(event);
  };
  return (
    <form className={`${styles.form}`} onSubmit={formik.handleSubmit}>
      <TextField
        type="email"
        name="email"
        id="email"
        value={formik.values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        label="Email"
        variant="filled"
        size="small"
        fullWidth
        sx={{my: "0.25rem"}}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={
          formik.touched.email && Boolean(formik.errors.email) ? (
            <span>{formik.errors.email}</span>
          ) : null
        }
      />
      <TextField
        type="password"
        name="password"
        id="password"
        value={formik.values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        label="Password"
        variant="filled"
        size="small"
        fullWidth
        sx={{my: "0.25rem"}}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={
          formik.touched.password && Boolean(formik.errors.password) ? (
            <span>{formik.errors.password}</span>
          ) : null
        }
      />
      <Button
        variant="contained"
        size="large"
        fullWidth
        sx={{ mt: 4, height: 55 }}
        disableElevation
        onClick={handleClick}
        disabled={Object.keys(formik.errors).length > 0}
      >
        {isLoading ? (
          <CircularProgress
            sx={{
              color: "#F5F5F5",
            }}
          />
        ) : (
          "Next"
        )}
      </Button>
    </form>
  );
};

SigninForm.propTypes = {
  onFinish: PropTypes.func.isRequired,
  isLoading: PropTypes.Boolean,
  className: PropTypes.string
}

export default SigninForm;

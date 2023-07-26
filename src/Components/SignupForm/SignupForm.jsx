import React, {
  useEffect,
  useState,
} from "react";
import PropTypes from 'prop-types';
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Button, CircularProgress, Box } from "@mui/material";

import styles from "./style.module.css";

const SignupForm = ({ onFinish, isLoading, }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const formik = useFormik({
    initialValues: {
      firstName,
      lastName,
      email: "",
      password: "",
    },
    initialErrors: {
      email: "This field is required",
      firstName: "This field is required",
      lastName: "This field is required",
      password: "This field is required",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("This field is required"),
      lastName: Yup.string().required("This field is required"),
      email: Yup.string()
        .email("Invalid email address")
        .matches(/^([a-z])[a-zA-Z\d.\-_]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, {
          message: "Valid email must start with small letter",
        })
        .required("This field is required"),
      password: Yup.string()
      .required("This field is required"),
        // .matches(
        //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
        //   "Oops! You need a password longer than 8 characters with numbers and letters."
        // )
        // .min(8, "Password must be at least 8 characters")
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
    if (event.target.name === "firstName") {
      setFirstName(event.target.value);
    }

    if (event.target.name === "lastName") {
      setLastName(event.target.value);
    }

    // check if the first letter is capitalize or not
    if (firstName) {
      if (!firstName[0].match(/[A-Z]/)) {
        setFirstName(
          (prevValue) =>
            prevValue["substring"](0, 1)["toUpperCase"]() +
            prevValue["substring"](1)
        );
      }
    }

    // check if the first letter is capitalize or not
    if (lastName) {
      if (!lastName[0].match(/[A-Z]/)) {
        setLastName(
          (prevValue) =>
            prevValue["substring"](0, 1)["toUpperCase"]() +
            prevValue["substring"](1)
        );
      }
    }
  };

  useEffect(() => {
    setFirstName(firstName);
    setLastName(lastName);
  }, [firstName, lastName]);

  return (
    <form className={`${styles.form}`} onSubmit={formik.handleSubmit}>
      <Box sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        columnGap: "10px",
        my: '0.25rem'
      }}>
        <TextField
          type="text"
          name="firstName"
          id="firstName"
          value={firstName}
          onChange={handleChange}
          onBlur={handleBlur}
          label="First name"
          variant="filled"
          size="small"
          sx={{
            width: 0.48,
          }}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={
            formik.touched.firstName && Boolean(formik.errors.firstName) ? (
              <span>{formik.errors.firstName}</span>
            ) : null
          }
        />
        <TextField
          type="text"
          name="lastName"
          id="lastName"
          onChange={handleChange}
          onBlur={handleBlur}
          value={lastName}
          label="Last name"
          variant="filled"
          size="small"
          sx={{
            width: 0.48,
          }}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={
            formik.touched.lastName && Boolean(formik.errors.lastName) ? (
              <span>{formik.errors.lastName}</span>
            ) : null
          }
        />
      </Box>
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
        sx={{ my: "0.25rem" }}
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
        sx={{ my: "0.25rem" }}
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
              color: "primary.main",
            }}
          />
        ) : (
          "Next"
        )}
      </Button>
    </form>
  );
};

SignupForm.propTypes = {
  onFinish: PropTypes.func,
  isLoading: PropTypes.Boolean,
  className: PropTypes.string
}

export default SignupForm;

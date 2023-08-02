import React, {
  useEffect,
  useState,
} from "react";
import axios from 'axios';
import { useQuery } from 'react-query';
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Button, CircularProgress, Box, MenuItem, Select, FormControl, InputLabel } from "@mui/material";

const ProductForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const { data: brands, isLoading: isBrandLoading } = useQuery(
    `brands`,
    () => axios.get("http://localhost:5000/brands"),
  );


  const { data: categories, isLoading: isCategoryLoading } = useQuery(
    `categories`,
    () => axios.get("http://localhost:5000/categories"),
  );

  !isBrandLoading && console.log(brands);
  !isCategoryLoading && console.log(categories);

  const formik = useFormik({
    initialValues: {
      title: "",
      subTitle: "",
      description: "",
      price: 0,
      quantity: 0,
      discount: 0,
      brandId: 0,
      catgeoryId: 0,
    },
    initialErrors: {
      title: "This field is required",
      subTitle: "This field is required",
      price: "This field is required",
      quantity: "This field is required",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("This field is required"),
      subTitle: Yup.string().required("This field is required"),
    }),
    onSubmit: (values) => {
      // onFinish(values);
      console.log({values})
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

  const { values } = formik;
  const { title, subTitle, description, price, quantity, discount, brandId, categoryId } = values;

  useEffect(() => {
    setFirstName(firstName);
    setLastName(lastName);
  }, [firstName, lastName]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        columnGap: "10px",
        my: '0.25rem'
      }}>
        <TextField
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={handleChange}
          onBlur={handleBlur}
          label="Title"
          variant="filled"
          size="small"
          sx={{
            width: 0.48,
          }}
          error={formik.touched.title && Boolean(formik.errors.title)}
          helperText={
            formik.touched.title && Boolean(formik.errors.title) ? (
              <span>{formik.errors.title}</span>
            ) : null
          }
        />
        <TextField
          type="text"
          name="subTitle"
          id="sub-title"
          onChange={handleChange}
          onBlur={handleBlur}
          value={subTitle}
          label="Sub Title"
          variant="filled"
          size="small"
          sx={{
            width: 0.48,
          }}
          error={formik.touched.subTitle && Boolean(formik.errors.subTitle)}
          helperText={
            formik.touched.subTitle && Boolean(formik.errors.subTitle) ? (
              <span>{formik.errors.subTitle}</span>
            ) : null
          }
        />
      </Box>
      <TextField
        type="text"
        multiline
        name="description"
        id="description"
        value={description}
        onChange={handleChange}
        onBlur={handleBlur}
        label="Description"
        variant="filled"
        size="small"
        fullWidth
        sx={{ my: "0.25rem" }}
        error={formik.touched.description && Boolean(formik.errors.description)}
        helperText={
          formik.touched.description && Boolean(formik.errors.description) ? (
            <span>{formik.errors.description}</span>
          ) : null
        }
      />
      <TextField
        type="number"
        name="price"
        id="price"
        value={price}
        onChange={handleChange}
        onBlur={handleBlur}
        label="Price"
        variant="filled"
        size="small"
        fullWidth
        sx={{ my: "0.25rem" }}
        error={formik.touched.price && Boolean(formik.errors.price)}
        helperText={
          formik.touched.price && Boolean(formik.errors.price) ? (
            <span>{formik.errors.price}</span>
          ) : null
        }
      />
      <TextField
        type="number"
        name="quantity"
        id="quantity"
        value={quantity}
        onChange={handleChange}
        onBlur={handleBlur}
        label="Quantity"
        variant="filled"
        size="small"
        fullWidth
        sx={{ my: "0.25rem" }}
        error={formik.touched.quantity && Boolean(formik.errors.quantity)}
        helperText={
          formik.touched.quantity && Boolean(formik.errors.quantity) ? (
            <span>{formik.errors.quantity}</span>
          ) : null
        }
      />
      <TextField
        type="number"
        name="discount"
        id="discount"
        value={discount}
        onChange={handleChange}
        onBlur={handleBlur}
        label="Discount"
        variant="filled"
        size="small"
        fullWidth
        sx={{ my: "0.25rem" }}
        error={formik.touched.discount && Boolean(formik.errors.discount)}
        helperText={
          formik.touched.discount && Boolean(formik.errors.discount) ? (
            <span>{formik.errors.discount}</span>
          ) : null
        }
      />
      <FormControl fullWidth sx={{marginBlock: "0.5rem"}}>
        <InputLabel id="select-brand-label">Brand</InputLabel>
        <Select
          labelId="select-brand-label"
          id="brand-select"
          value={brandId}
          label="Brand"
          onChange={handleChange}
        >
          {!isBrandLoading &&  brands?.data.map(({id, name, img}) => (
          <MenuItem key={id} value={id} sx={{display: "flex", justifyContent: "space-between"}}>
            <Box component="span">{name}</Box>
            <Box component="span" sx={{display: "inline-block", width: "2rem"}}>
              <img style={{width: "100%"}} src={img} alt={name} />
            </Box>
          </MenuItem>))}
        </Select>
      </FormControl>
      <FormControl fullWidth sx={{marginBlock: "0.5rem"}}>
        <InputLabel id="select-brand-label">Category</InputLabel>
        <Select
          labelId="select-category-label"
          id="category-select"
          value={categoryId}
          label="Category"
          onChange={handleChange}
        >
          {!isCategoryLoading &&  categories?.data.map(({id, name, img}) => (
          <MenuItem key={id} value={id} sx={{display: "flex", justifyContent: "space-between"}}>
            <Box component="span">{name}</Box>
            <Box component="span" sx={{display: "inline-block", width: "2rem"}}>
              <img style={{width: "100%"}} src={img} alt={name} />
            </Box>
          </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button
        variant="contained"
        size="large"
        fullWidth
        sx={{ mt: 4, height: 55 }}
        disableElevation
        onClick={handleClick}
        disabled={Object.keys(formik.errors).length > 0}
      >
        {!isBrandLoading ? (
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

export { ProductForm };

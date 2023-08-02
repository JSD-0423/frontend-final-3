import React, {
  useState,
} from "react";
import axios from 'axios';
import { useQuery, useMutation } from 'react-query';
import { useFormik } from "formik";
import * as Yup from "yup";
import { 
  TextField,
  Button,
  CircularProgress,
  Box,
  MenuItem,
  Select,
  FormControl,
  InputLabel, 
  Alert } from "@mui/material";
import { Add as AddIcon } from '@mui/icons-material';
import UploadImage from '../../../UploadImage/UploadImage';

import "./style.css";

const UPLOAD_IMAGE = "http://localhost:5000/upload-image";

const ProductForm = () => {
  const [productImage, setProductImage] = useState("");
  const [profileImageError, setProfileImageError] = useState("");

  const { data: brands, isLoading: isBrandLoading } = useQuery(
    `brands`,
    () => axios.get("http://localhost:5000/brands"),
  );


  const { data: categories, isLoading: isCategoryLoading } = useQuery(
    `categories`,
    () => axios.get("http://localhost:5000/categories"),
  );

  
  const { mutate, isLoading: isCreateProductLoading } = useMutation(
    ({
      url,
      productData,
    }) => axios.post(url, productData),
    {
      onSuccess: () => {
        
      },
    },
  );

  const formik = useFormik({
    initialValues: {
      title: "",
      sub_title: "",
      description: "",
      price: 0,
      quantity: 0,
      discount: 0,
      brand_id: 0,
      category_id: 0,
    },
    initialErrors: {
      title: "This field is required",
      sub_title: "This field is required",
      price: "This field is required",
      quantity: "This field is required",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("This field is required"),
      sub_title: Yup.string().required("This field is required"),
    }),
    onSubmit: (values) => {
      console.log({values})
      mutate({url: "http://localhost:5000/products", productData: values})
      resetForm()
    },
  });

  const { values, handleChange, handleBlur, handleSubmit, resetForm } = formik;
  const { title, sub_title, description, price, quantity, discount, brand_id, category_id } = values;

  return (
    <form onSubmit={handleSubmit}>
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
          name="sub_title"
          id="sub-title"
          onChange={handleChange}
          onBlur={handleBlur}
          value={sub_title}
          label="Sub Title"
          variant="filled"
          size="small"
          sx={{
            width: 0.48,
          }}
          error={formik.touched.sub_title && Boolean(formik.errors.sub_title)}
          helperText={
            formik.touched.sub_title && Boolean(formik.errors.sub_title) ? (
              <span>{formik.errors.sub_title}</span>
            ) : null
          }
        />
      </Box>
      <TextField
        type="text"
        multiline
        minRows={4}
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
          name="brand_id"
          id="brand-select"
          value={brand_id}
          label="Brand"
          onChange={handleChange}
        >
          {!isBrandLoading &&  brands?.data.map(({id, name, img}) => (
          <MenuItem key={id} value={id} sx={{display: "flex", justifyContent: "space-between"}}>
            <Box component="span">{name}</Box>
            <Box component="span" sx={{display: "inline-block", width: "2rem"}}>
              <img style={{width: "100%"}} src={img} alt={name} />
            </Box>
          </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth sx={{marginBlock: "0.5rem"}}>
        <InputLabel id="select-category-label">Category</InputLabel>
        <Select
          labelId="select-category-label"
          name="category_id"
          id="category-select"
          value={category_id}
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
      <Box width="100%" sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        {profileImageError && <Alert variant='filled' severity='error' sx={{width: "30rem"}}>{profileImageError}</Alert>}
        {productImage && <Box sx={{width: "15rem"}}><img src={productImage} alt="" style={{objectFit: "cover", width: "15rem"}} /></Box>}
        <Box className="upload-image">
          <UploadImage
            sx={{ }}
            Icon={
              <AddIcon style={{ fontSize: "2rem", strokeWidth: "0.1rem" }} />
            }
            setImage={setProductImage}
            setImageError={setProfileImageError}
            image={profileImageError}
            url={UPLOAD_IMAGE}
            maxSize="1"
          />
        </Box>
      </Box>
      <Button
        variant="contained"
        size="large"
        fullWidth
        sx={{ mt: 4, height: 55 }}
        disableElevation
        onClick={handleSubmit}
        disabled={Object.keys(formik.errors).length > 0}
      >
        {isCreateProductLoading ? (
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

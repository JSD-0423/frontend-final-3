import React, { useState } from "react";
import axios from "axios";
import PropTypes from 'prop-types';
import { IconButton, CircularProgress, Typography } from "@mui/material";

const UploadImage = ({
  sx,
  Icon,
  setImage,
  setImageError,
  image,
  url,
  maxSize = 1,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  function productImage(_image) {
    if (typeof image === "string") {
      setImage(_image);
    } else {
      setImage([...image, _image]);
    }
  }

  const handleChange = (evt) => {
    if (!evt.target.files || evt.target.files.length === 0) return;
    const imageFile = evt.target.files[0] || "";
    const reader = new FileReader();

    reader.readAsDataURL(imageFile);

    reader.onload = async () => {
      try {
        setIsLoading(true);
        const res = await axios.post(
          url,
          {
            data: reader.result,
            name: imageFile.name,
            type: imageFile.type,
            size: imageFile.size,
          },
          { withCredentials: true }
          );
        productImage(res.data.imageUrl);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        if (err.response?.status === 500) {
          setImageError(err?.response.statusText);
        } else {
          setImageError(err?.response?.data?.message);
        }
      }
    };
  };

  return (
    <IconButton
      disableRipple
      focusRipple={false}
      color="primary"
      aria-label="upload picture"
      component="label"
      sx={{ 
        ...sx, p: "0.5rem",
        width: "fit-content",
        height: "2.5rem",
        border: `1px solid #a5a5a5`,
        borderRadius: "0.375rem",
        display:"flex",
        justifyContent: "center",
        alignItems: "center",
        "&:hover": {
          backgroundColor: "#F5F5F5"
        }
      }}
    >
      <input
        hidden
        accept="image/*"
        type="file"
        onChange={handleChange}
        data-max-file-size-mb={`${maxSize}`}
      />
      <Typography component="span"
        sx={{ 
          display:"flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >Upload image {isLoading ? <CircularProgress size="1.5rem" /> : Icon}</Typography>
    </IconButton>
  );
};

UploadImage.propTypes = {
  sx: PropTypes.object,
  Icon: PropTypes.element,
  setImage: PropTypes.func,
  setImageError: PropTypes.func,
  image: PropTypes.string,
  url: PropTypes.string.isRequired,
  maxSize: PropTypes.number,
}



export default UploadImage;

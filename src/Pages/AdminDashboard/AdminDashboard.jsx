import React, {useState} from 'react';
import { Box, Alert } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import UploadImage from '../../Components/UploadImage/UploadImage';

import "./style.css";

const UPLOAD_IMAGE = "http://localhost:5000/upload-image";

export const AdminDashbord = () => {
  const [profileImage, setProfileImage] = useState("");
  const [profileImageError, setProfileImageError] = useState("");

  return <Box width="100%" sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            {profileImageError && <Alert variant='filled' severity='error' sx={{width: "30rem"}}>{profileImageError}</Alert>}
            <Box className="upload-image">
              <UploadImage
                sx={{ }}
                Icon={
                  <AddIcon style={{ fontSize: "2rem", strokeWidth: "0.1rem" }} />
                }
                setImage={setProfileImage}
                setImageError={setProfileImageError}
                image={profileImage}
                url={UPLOAD_IMAGE}
                maxSize="1"
              />
            </Box>
  </Box>
}
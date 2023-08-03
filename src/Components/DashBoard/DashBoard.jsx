import * as React from "react";
import PropTypes from 'prop-types';

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import { ProductForm, Brands, Categories } from './AdminForms';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`dashbord-tabpanel-${index}`}
      aria-labelledby={`dashbord-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `dashbord-tab-${index}`,
    "aria-controls": `dashbord-tabpanel-${index}`,
  };
}

export const AdminDashBord = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        minHeight: "340px"
      }}
      component="section"
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="dashboard tabs"
        sx={{ borderRight: 1, borderColor: "divider", minWidth: "150px" }}
      >
        <Tab label="Users" {...a11yProps(0)} />
        <Tab label="Products" {...a11yProps(1)} />
        <Tab label="Categories" {...a11yProps(2)} />
        <Tab label="Brands" {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        Users
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ProductForm />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Categories />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Brands />
      </TabPanel>
    </Box>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  value: PropTypes.number,
  index: PropTypes.number,
}

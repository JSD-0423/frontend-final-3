import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: "Inter",
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    fontWeightLabelSmall: 600,
  },
  status: {
    error: "#B00020",
    highlight: "#FF8C4B",
  },
  palette: {
    primary: {
      main: "#1B4B66",
    },
    primaryTint: {
      main: "#639599",
    },
    accent: {
      main: "#F4F4F4",
    },
    dark: {
      main: "#13101E",
    },
    bright: {
      main: "#FFFFFF",
    },
    grey: {
      main: "#F1F1F1",
    },
    lightText: {
      main: "#B6B6B6",
    },
    highEmphasis: {
      main: "#171520",
    },
    lowEmphasis: {
      main: "E626262",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

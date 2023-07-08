import { createTheme } from "@mui/material/styles";
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';

export const theme = createTheme({
  typography: {
    fontFamily: "inter",
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
      main: "#626262",
    },
  },
});

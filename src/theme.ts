import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      light: '#6edbff',
      main: '#40BFFF',
      dark: '#2d9cd3',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#ff7984',
      main: '#FF4858',
      dark: '#d83341',
      contrastText: '#000000',
    },
    success: {
      light: "#31cf56",
      main: "#28a745",
      dark: "#1e8135",
      contrastText: "#ffffff"
    },
    error: {
      light: "#ff3c50",
      main: "#dc3545",
      dark: "#b42b39",
      contrastText: "#000000"
    }
  },
  typography: {
    allVariants: {
      fontFamily: "Poppins",
    },
  },
});
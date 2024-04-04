import { createTheme } from '@mui/material/styles';

const theme = createTheme({ // Tudo aqui precisa de um update pra seguir a identidade visual do nosso site.
  typography:{
    fontFamily: "'Thai', sans-serif"
  },
  palette: {
    primary: {
      main: '#7B1905',
      light: '#fee8e3',
      dark: '#300a02',
    },
    secondary: {
      main: '#BEA69F',
      light: '#2ca1b8',
      dark: '#0e353c',
    },
    text:{
      light:'#E7E7E7',
      dark:'black',
      muted:'#777777',
      secondary: '#b4b4b4'
    },
    error: {
      main: "#e04747",
      light: "#e04747",
      dark: "#e04747",
    },
    success: {
      main: "#22bb33",
      light: "#22bb33",
      dark: "#22bb33",
    },
    background: {
      light: '#BEA69F',
      main: '#f2f6fa !important',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960
    },
  },
});
export default theme;
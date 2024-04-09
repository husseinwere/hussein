'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    components: {
        MuiAppBar: {
          styleOverrides: {
            colorPrimary: {
              backgroundColor: "#fff"
            }
          }
        }
    }
});

export default theme;

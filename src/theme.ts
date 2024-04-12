'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontSize: 12
    },
    // spacing: 4,
    components: {
        MuiAppBar: {
          styleOverrides: {
            colorPrimary: {
              backgroundColor: "rgba(0, 0, 0, 0)",
              color: '#555'
            }
          }
        }
    }
});

export default theme;

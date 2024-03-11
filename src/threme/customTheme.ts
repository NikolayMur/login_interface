import createTheme from "@mui/material/styles/createTheme";
declare module "@mui/material/styles" {
    interface BreakpointOverrides {
      smc: true;
    }
  }
  declare module "@mui/material/Button" {
    interface ButtonPropsVariantOverrides {
      customContained: true;
      customOutlined: true;
    }
  }

export const customTheme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        smc: 448,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
    typography: {
      fontFamily: "Basis Grotesque Pro,'Roboto', Arial",
      subtitle1: {
        fontSize: 30,
        fontWeight: 700,
      },
    },
    components: {
      MuiButton: {
        variants: [
          {
            props: { variant: "customOutlined" },
            style: {
              textTransform: "none",
              fontSize: "14px",
              lineHeight: "20px",
              fontWeight: "500",
              height: "48px",
              color: "#060E1E",
              border: "1.2px solid #D3D8DC",
              borderRadius: "6px",
            },
          },
          {
            props: { variant: "customContained" },
            style: {
              textTransform: "none",
              fontSize: "16px",
              lineHeight: "21px",
              fontWeight: "500",
              height: "48px",
              color: "#FFFFFF",
              backgroundColor: "#316FEA",
              borderRadius: "6px",
            },
          },
        ],
      },
  
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            height: "48px",
            borderRadius: "6px",
          },
          input: {
            paddingTop: "12px",
            paddingBottom: "12px",
          },
        },
      },
    },
  });
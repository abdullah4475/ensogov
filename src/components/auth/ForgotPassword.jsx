import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { AppTextField } from "../input_components/AppTextField";
import "./ForgotPassword.css";
export const ForgotPassword = () => {
  return (
    <Box className="main-container">
      <Box className="forgot-pass-container">
        <Box className="logo-container">
          <img src="/logo1.png" alt="logo" />
        </Box>
        <Box className="form-container">
          <Typography fontSize={20} fontWeight={600} lineHeight={4}>
            Forgot Password
          </Typography>
          <AppTextField label="Email" width={300} />
          <Button
            variant="contained"
            sx={{
              backgroundColor: "black",
              ":hover": { backgroundColor: "black" },
              width: "250px",
              marginTop: "30px",
            }}
          >
            Recover Password
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

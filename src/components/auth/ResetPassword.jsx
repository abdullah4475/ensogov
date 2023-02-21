import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { AppTextField } from "../input_components/AppTextField";
import "./ResetPassword.css";

export const ResetPassword = () => {
  return (
    <Box className="main-container">
      <Box className="forgot-pass-container">
        <Box className="logo-container">
          <img src="/logo1.png" alt="logo" />
        </Box>
        <Box className="form-container">
          <Typography fontSize={20} fontWeight={600} lineHeight={4}>
            Reset Password
          </Typography>
          <Box className="form-reset-fields">
            <AppTextField label="Email" width={300} />
            <AppTextField label="Password" width={300} mt={20} />
            <AppTextField label="Confirm Password" width={300} mt={20} />
          </Box>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "black",
              ":hover": { backgroundColor: "black" },
              width: "250px",
            }}
          >
            Reset Password
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

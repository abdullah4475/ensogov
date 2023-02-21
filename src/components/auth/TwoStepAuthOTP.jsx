import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { AppTextField } from "../input_components/AppTextField";
import "./TwoStepAuthOTP.css";
export const TwoStepAuthOTP = () => {
  return (
    <Box className="main-container">
      <Box className="forgot-pass-container">
        <Box className="logo-container">
          <img src="/logo1.png" alt="logo" />
        </Box>
        <Box className="form-container">
          <Typography fontSize={20} fontWeight={600}>
            Two-step authentication
          </Typography>
          <Typography variant="body2">
            Enter the authentication code below we sent to your email id
          </Typography>
          <Box className="otp-fields">
            <AppTextField width={15} />
            <AppTextField width={15} />
            <AppTextField width={15} />
            <AppTextField width={15} />
            <AppTextField width={15} />
            <AppTextField width={15} />
          </Box>
          <Box className="button-container-otp">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "black",
                ":hover": { backgroundColor: "black" },
                width: "150px",
              }}
            >
              Submit{" "}
            </Button>
            <Typography>Resend Code</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

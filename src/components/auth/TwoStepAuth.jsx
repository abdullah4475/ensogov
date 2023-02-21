import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { AppTextField } from "../input_components/AppTextField";
import "./TwoStepAuth.css";
export const TwoStepAuth = () => {
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
          <Typography variant="body2" fontFamily="Poppins">
            We'll text a verification code to this email id whenever you <br />
            sign in to your account
          </Typography>
          <Box className="form-field">
            <AppTextField label="Email" width={300} />
          </Box>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "black",
              ":hover": { backgroundColor: "black" },
              width: "250px",
              marginTop: "30px",
            }}
          >
            Submit{" "}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

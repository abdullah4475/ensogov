import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./EmailVerified.css";

export const EmailVerified = () => {
  return (
    <Box className="main-container">
      <Box className="email-verified-container">
        <img
          className="mail-verified-icon"
          src="/mail-verified.png"
          alt="mail-verified-icon"
        />
        <Typography fontSize={28} fontWeight={700} lineHeight={4}>
          Your email address has been verified.
        </Typography>
        <Typography align="center">
          All the Lorem Ipsum generators on the Internet tend to repeat
          predefined chunks as necessary, making this the first true generator
          on the Internet.
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{
            backgroundColor: "black",
            ":hover": { backgroundColor: "black" },
            width: "300px",
            borderRadius: "50px",
            marginTop: "30px",
          }}
        >
          Complete your profile
        </Button>
      </Box>
    </Box>
  );
};

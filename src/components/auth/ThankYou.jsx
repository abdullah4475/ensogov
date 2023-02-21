import { Box, Typography } from "@mui/material";
import React from "react";
import { WebsitePromo } from "./WebsitePromo";
import "./ThankYou.css";

export const ThankYou = () => {
  return (
    <Box className="main-container">
      <WebsitePromo />
      <Box className="right-container">
        <Box className="thankyou-container">
          <img className="mail-icon" src="/mail-icon.png" alt="mail-icon" />
          <Typography fontSize={24} fontWeight={700} lineHeight={4}>
            Thank You
          </Typography>
          <Typography>Your submission has been received</Typography>
          <Typography>We will be in touch and contact you soon</Typography>
        </Box>
      </Box>
    </Box>
  );
};

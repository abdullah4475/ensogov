import { Box, Typography } from "@mui/material";
import React from "react";
import "./WebsitePromo.css";

export const WebsitePromo = () => {
  return (
    <Box className="left-container">
      <Box className="website-promo-container">
        <Typography color="white" fontSize={42} fontWeight={700}>
          Start your free trial.
        </Typography>
        <Typography color="white" fontSize={22} lineHeight={3}>
          No credit card required, no software to install.
        </Typography>
        <Typography color="white" fontSize={16}>
          With your 30-day trial, you get:
        </Typography>
        <Box className="website-features-container">
          <Box className="website-feature">
            <img src="/Vector.png" alt="tick" />
            <Typography className="website-feature-text">
              Pre-loaded data or upload your own
            </Typography>
          </Box>
          <Box className="website-feature">
            <img src="/Vector.png" alt="tick" />
            <Typography className="website-feature-text">
              Pre-configured processes, reports, and dashboards
            </Typography>
          </Box>
          <Box className="website-feature">
            <img src="/Vector.png" alt="tick" />
            <Typography className="website-feature-text">
              Guided experiences for sales reps, leaders, and administrators
            </Typography>
          </Box>
          <Box className="website-feature">
            <img src="/Vector.png" alt="tick" />
            <Typography className="website-feature-text">
              Online training and live onboarding webinars
            </Typography>
          </Box>
        </Box>
        <Typography lineHeight={3} color="white">
          Questions? Talk to an expert: 1800-420-7332.
        </Typography>
      </Box>
    </Box>
  );
};

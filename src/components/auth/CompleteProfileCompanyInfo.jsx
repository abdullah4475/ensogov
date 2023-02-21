import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { AppTextField } from "../input_components/AppTextField";
import CompleteProfile from "./CompleteProfile";

export const CompleteProfileCompanyInfo = () => {
  return (
    <Box>
      <CompleteProfile />
      <Box sx={{ display: "flex" }}>
        <Typography>Personal Info</Typography>
        <Typography fontWeight={700}>Company Info</Typography>
        <Typography>Contact Person</Typography>
        <Typography>Description</Typography>
      </Box>
      <Box>
        <AppTextField label="Upload Comapny Logo" />
        <AppTextField label="Company Name" />
        <AppTextField label="Company Size" />
        <AppTextField label="Registration Jurisdication" />
        <AppTextField label="Financial Year Starts" />
        <AppTextField label="Industry" />
        <AppTextField label="Website URL" />
        <AppTextField label="Country" />
        <AppTextField label="State" />
        <AppTextField label="City" />
        <AppTextField label="Town" />
        <AppTextField label="Zip" />
        <AppTextField label="Address" />
        <AppTextField label="Address Two" />
        <Link to="/complete-profile-person-info">
          <Button variant="contained">Back</Button>
        </Link>
        <Link to="/complete-profile-contact-person">
          <Button variant="contained">Next</Button>
        </Link>
      </Box>
    </Box>
  );
};

import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { AppTextField } from "../input_components/AppTextField";
import CompleteProfile from "./CompleteProfile";

export const CompleteProfilePersonalInfo = () => {
  return (
    <Box>
      <CompleteProfile />
      <Box sx={{ display: "flex" }}>
        <Typography fontWeight={700}>Personal Info</Typography>
        <Typography>Company Info</Typography>
        <Typography>Contact Person</Typography>
        <Typography>Description</Typography>
      </Box>
      <Box>
        <AppTextField label="First name" />
        <AppTextField label="Last name" />
        <AppTextField label="Email" />
        <AppTextField label="Phone" />
        <AppTextField label="Fax" />
        <AppTextField label="Company" />
        <Link to="/complete-profile-company-info">
          <Button variant="contained">Next</Button>
        </Link>
      </Box>
    </Box>
  );
};

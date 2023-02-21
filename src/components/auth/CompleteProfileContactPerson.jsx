import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { AppTextField } from "../input_components/AppTextField";
import CompleteProfile from "./CompleteProfile";

export const CompleteProfileContactPerson = () => {
  return (
    <Box>
      <CompleteProfile />
      <Box sx={{ display: "flex" }}>
        <Typography>Personal Info</Typography>
        <Typography>Company Info</Typography>
        <Typography fontWeight={700}>Contact Person</Typography>
        <Typography>Description</Typography>
      </Box>
      <Box>
        <AppTextField label="First name" />
        <AppTextField label="Last name" />
        <AppTextField label="Designation" />
        <AppTextField label="Primary Phone" />
        <AppTextField label="Secondary Phone" />
        <AppTextField label="Fax" />
        <AppTextField label="Email" />
        <Link to="/complete-profile-company-info">
          <Button variant="contained">Back</Button>
        </Link>
        <Link to="/complete-profile-description">
          <Button variant="contained">Next</Button>
        </Link>
      </Box>
    </Box>
  );
};

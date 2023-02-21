import { Box, Button, TextareaAutosize, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AppTextField } from "../input_components/AppTextField";
import CompleteProfile from "./CompleteProfile";

export const CompleteProfileDescription = () => {
  const [filename, setFilename] = useState("");
  return (
    <Box>
      <CompleteProfile />
      <Box sx={{ display: "flex" }}>
        <Typography>Personal Info</Typography>
        <Typography>Company Info</Typography>
        <Typography>Contact Person</Typography>
        <Typography fontWeight={700}>Description</Typography>
      </Box>
      <Box>
        <AppTextField multiline minRows={5} style={{ width: "80%" }} />
        <Box sx={{ display: "flex" }}>
          <AppTextField InputProps={{ readOnly: true }} value={filename} />
          <Button variant="contained" component="label">
            Upload File
            <input
              type="file"
              hidden
              onChange={(e) => {
                e.preventDefault();
                setFilename(e.target.files[0].name);
              }}
            />
          </Button>
        </Box>
        <Link to="/complete-profile-contact-person">
          <Button variant="contained">Back</Button>
        </Link>
        <Button variant="contained">Submit</Button>
      </Box>
    </Box>
  );
};

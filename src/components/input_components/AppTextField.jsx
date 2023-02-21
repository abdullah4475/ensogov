import { Box, TextField } from "@mui/material";
import React from "react";

export const AppTextField = ({ name, width = 250, ...otherProps }) => {
  return (
    <Box>
      <TextField
        {...otherProps}
        inputProps={{
          style: {
            width: `${width}px`,
          },
        }}
        size="small"
      />
    </Box>
  );
};

import React from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";
import "./CreateAccount.css";
import { AppTextField } from "../input_components/AppTextField";
import { WebsitePromo } from "./WebsitePromo";
import { Link } from "react-router-dom";
//import * as yup from "yup";

/*const validationSchema = yup.object({
  firstname: yup
    .string("Enter your firstname")
    .min(3, "Too small name")
    .required("Firstname is required"),
  lasstname: yup
    .string("Enter your lastname")
    .min(3, "Too small name")
    .required("Lastname is required"),
  email: yup.string().email().required(),
  company: yup
    .string("Enter your company")
    .min(3, "Too small name")
    .required("Company name is required"),
});

const initialValues = {
  firstname: "",
  lastname: "",
};
*/
export const CreateAccount = () => {
  return (
    <Box className="main-container">
      <WebsitePromo />
      <Box className="right-container">
        <Box className="form-container">
          <Box className="logo">
            <img src="/logo1.png" alt="logo" />
          </Box>
          <Box className="form-header">
            <Typography fontSize={20} fontWeight={600}>
              Create account
            </Typography>
            <Typography
              color="background: #2D3748"
              fontSize={12}
              lineHeight={2}
            >
              For business inquiries
            </Typography>
          </Box>
          <Box className="form-fields">
            <AppTextField label="First name" />
            <AppTextField label="Last name" />
            <AppTextField label="Email" />
            <AppTextField label="Company name" />
          </Box>
          <Box className="form-footer">
            <FormControlLabel
              control={<Checkbox />}
              label="I agree to all the terms and Privacy Policy"
            />
            <Box className="button-container">
              <Button
                variant="contained"
                className="button"
                sx={{
                  backgroundColor: "black",
                  ":hover": { backgroundColor: "black" },
                  width: "300px",
                }}
              >
                Create account
              </Button>
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Already have an account?
                <Link to="/">
                  <Button variant="text">Login</Button>
                </Link>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

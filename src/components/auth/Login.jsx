import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Typography,
} from "@mui/material";
import React from "react";
import { WebsitePromo } from "./WebsitePromo";
import "./CreateAccount.css";
import { AppTextField } from "../input_components/AppTextField";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";

const validationSchema = yup.object({
  username: yup.string("Enter your username").required("Username is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const initialValues = {
  username: "",
  password: "",
};
export const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    initialValues,
    mode: "all",
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    // const { username, password } = data
    console.log(data);
  };
  return (
    <Box className="main-container">
      <WebsitePromo />
      <Box className="right-container">
        <form
          className="form-container"
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Box className="logo">
            <img src="/logo1.png" alt="logo" />
          </Box>
          <Box className="form-header">
            <Typography fontSize={20} fontWeight={600}>
              Login to your account
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
            <FormControl fullWidth sx={{ mb: 4 }}>
              <Controller
                name="username"
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange, onBlur } }) => (
                  <AppTextField
                    autoFocus
                    label="Username"
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(errors.username)}
                    width={400}
                  />
                )}
              />
              {errors.username && (
                <FormHelperText sx={{ color: "error.main" }}>
                  {errors.username.message}
                </FormHelperText>
              )}
            </FormControl>

            <FormControl fullWidth sx={{ mb: 4 }}>
              <Controller
                name="password"
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange, onBlur } }) => (
                  <AppTextField
                    label="Password"
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                    error={Boolean(errors.password)}
                    width={400}
                    type="password"
                  />
                )}
              />
              {errors.password && (
                <FormHelperText sx={{ color: "error.main" }}>
                  {errors.password.message}
                </FormHelperText>
              )}
            </FormControl>
          </Box>
          <Box className="form-footer">
            <FormControlLabel control={<Checkbox />} label="Remember me" />
            <Box className="button-container">
              <Button
                variant="contained"
                className="button"
                sx={{
                  backgroundColor: "black",
                  ":hover": { backgroundColor: "black" },
                  width: "300px",
                }}
                type="submit"
              >
                Login
              </Button>
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Don't have an account?{" "}
                <Link to="/create-account">
                  <Button variant="text">Sign up</Button>
                </Link>
              </Typography>
            </Box>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import "./CompleteProfile.css";
import { Tab, Tabs, TextareaAutosize } from "@mui/material";
import PropTypes from "prop-types";
import { AppTextField } from "../input_components/AppTextField";

const pages = ["About", "Packages", "News", "Faq", "Support", "Contact"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
function CompleteProfileTabs() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [value, setValue] = React.useState(0);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box className="app-bar-logo-container">
              <img src="/logo1.png" alt="logo" />
            </Box>
            <Box>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box>
        <Typography>Complete Profile</Typography>
      </Box>
      <Box>
        <Typography fontSize={28} fontWeight={700} lineHeight={4}>
          Your email address has been verified.
        </Typography>
        <Typography align="center">
          All the Lorem Ipsum generators on the Internet tend to repeat
          predefined chunks as necessary, making this the first true generator
          on the Internet.
        </Typography>
      </Box>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Personal Info" {...a11yProps(0)} />
            <Tab label="Company Info" {...a11yProps(1)} />
            <Tab label="Contact Person" {...a11yProps(2)} />
            <Tab label="Description" {...a11yProps(3)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <AppTextField label="First name" />
          <AppTextField label="Last name" />
          <AppTextField label="Email" />
          <AppTextField label="Phone" />
          <AppTextField label="Fax" />
          <AppTextField label="Company" />
          <Button variant="contained" onClick={() => setValue(1)}>
            Next
          </Button>
        </TabPanel>
        <TabPanel value={value} index={1}>
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
          <Button variant="contained" onClick={() => setValue(0)}>
            Back
          </Button>
          <Button variant="contained" onClick={() => setValue(2)}>
            Next
          </Button>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <AppTextField label="First name" />
          <AppTextField label="Last name" />
          <AppTextField label="Designation" />
          <AppTextField label="Primary Phone" />
          <AppTextField label="Secondary Phone" />
          <AppTextField label="Fax" />
          <AppTextField label="Email" />
          <Button variant="contained" onClick={() => setValue(1)}>
            Back
          </Button>
          <Button variant="contained" onClick={() => setValue(3)}>
            Next
          </Button>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <TextareaAutosize />
          <AppTextField />
          <Button variant="contained" onClick={() => setValue(2)}>
            Back
          </Button>
          <Button variant="contained">Submit</Button>
        </TabPanel>
      </Box>
    </Box>
  );
}
export default CompleteProfileTabs;

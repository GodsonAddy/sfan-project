import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";

const company = [
  "ABOUT US",
  "OUR TEAM",
  "PARTNER US",
  "JOIN US",
  "CAREERS",
  "CONTACT US",
];
const support = ["RESUME SERVICE", "VENTURE STUDIO"];

export default function PrimaryAppBar() {
  const [companyAnchorEl, setCompanyAnchorEl] = React.useState(null);
  const [supportAnchorEl, setSupportAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const companyMenuOpen = Boolean(companyAnchorEl);
  const supportMenuOpen = Boolean(supportAnchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleCompanyMenuOpen = (event) => {
    setCompanyAnchorEl(event.currentTarget);
  };

  const handleSupportMenuOpen = (event) => {
    setSupportAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleCompanyMenuClose = () => {
    setCompanyAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleSupportMenuClose = () => {
    setSupportAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const companyId = "primary-search-account-menu";
  const companyMenu = (
    <Menu
      anchorEl={companyAnchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      id={companyId}
      transformOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      open={companyMenuOpen}
      onClose={handleCompanyMenuClose}
    >
      {company.map((page) => (
        <MenuItem
          key={page}
          onClick={handleCompanyMenuClose}
          sx={{
            backgroundColor: "primary.main",
            color: "secondary.main",
            "&:hover": { backgroundColor: "#000000" },
          }}
        >
          <Typography textAlign="center">{page}</Typography>
        </MenuItem>
      ))}
    </Menu>
  );

  const supportId = "primary-search-account-menu-support";
  const supportMenu = (
    <Menu
      anchorEl={supportAnchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      id={supportId}
      transformOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      open={supportMenuOpen}
      onClose={handleSupportMenuClose}
    >
      {support.map((studio) => (
        <MenuItem
          key={studio}
          onClick={handleSupportMenuClose}
          sx={{
            backgroundColor: "primary.main",
            color: "secondary.main",
            "&:hover": { backgroundColor: "#000000" },
          }}
        >
          <Typography textAlign="center">{studio}</Typography>
        </MenuItem>
      ))}
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <MenuItem onClick={handleCompanyMenuOpen}>
          <Button
            aria-label="company"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            COMPANY
          </Button>
        </MenuItem>
        <MenuItem onClick={handleSupportMenuOpen}>
          <Button
            aria-label="support"
            aria-controls="primary-search-account-menu-support"
            aria-haspopup="true"
            color="inherit"
          >
            SUPPORT STUDIO
          </Button>
        </MenuItem>
        <MenuItem>
          <Button size="large" aria-label="events" color="inherit">
            EVENTS
          </Button>
        </MenuItem>
        <MenuItem>
          <Button aria-label="media" color="inherit">
            MEDIA
          </Button>
        </MenuItem>

        <MenuItem>
          <Button aria-label="work" color="inherit">
            READYFORWORK
          </Button>
        </MenuItem>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            SFAN
          </Typography>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button
              aria-label="company"
              aria-controls={companyId}
              aria-haspopup="true"
              onClick={handleCompanyMenuOpen}
              color="inherit"
            >
              COMPANY
            </Button>
            <Button
              aria-label="support"
              aria-controls={supportId}
              aria-haspopup="true"
              onClick={handleSupportMenuOpen}
              color="inherit"
            >
              SUPPORT STUDIO
            </Button>
            <Button aria-label="events" color="inherit">
              EVENTS
            </Button>
            <Button aria-label="media" color="inherit">
              MEDIA
            </Button>
            <Button aria-label="work" color="inherit">
              READYFORWORK
            </Button>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
      {companyMenu}
      {supportMenu}
      {renderMobileMenu}
    </Box>
  );
}

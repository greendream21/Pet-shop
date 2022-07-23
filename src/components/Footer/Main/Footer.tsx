import { Box, useTheme } from "@mui/material";
import React from "react";
import FooterPhotos from "../FooterPhotos/FooterPhotos";

function Footer() {
  const theme = useTheme();
  return (
    <>
      <Box sx={{ borderTop: `0.0625rem solid ${theme.palette.secondary.main}`, mt: "0.5rem", backgroundColor: theme.palette.primary.main, p: "0.5rem", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <FooterPhotos />
      </Box>
    </>
  );
}

export default Footer;

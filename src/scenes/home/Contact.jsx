import { Box, Typography, IconButton } from "@mui/material";
import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

import { useState } from "react";

const Contact = () => {
  return (
    <Box width="80%" margin="80px auto 0px auto" textAlign="center">
      <IconButton>
        <MarkEmailReadOutlinedIcon fontSize="large" />
      </IconButton>
      <Typography variant="h3">Contact Us </Typography>
      <Box display="flex" gap="15px" justifyContent="center" marginTop="10px">
        <FacebookOutlinedIcon fontSize="large" />
        <TwitterIcon fontSize="large" />
        <EmailIcon fontSize="large" />
        <PhoneIcon fontSize="large" />
      </Box>
    </Box>
  );
};

export default Contact;

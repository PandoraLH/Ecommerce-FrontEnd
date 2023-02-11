import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";

function Footer() {
  const {
    palette: { neutral },
  } = useTheme();
  return (
    <Box marginTop="50px" padding="40px 0" backgroundColor={neutral.light}>
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box width="clamp(20%, 30%, 40%)">
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="10px"
            color={shades.secondary[500]}
          >
            PanStore
          </Typography>
          <div>
            PanStore is a one-stop-shop for customers looking for the latest
            fashion and clothing items. With a wide range of products from
            leading brands and independent designers, PanStore offers something
            for everyone. The platform's user-friendly interface and secure
            payment options make it easy and convenient for customers to find
            and purchase the clothing they love. Whether you're looking for a
            specific item or simply browsing for inspiration, PanStore is the
            perfect destination for fashion-forward shoppers.
          </div>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            About Us
          </Typography>
          <Typography mb="30px">Careers</Typography>
          <Typography mb="30px">Our Stores</Typography>
          <Typography mb="30px">Terms & Conditions</Typography>
          <Typography mb="30px">Privacy Policy</Typography>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Customer Care
          </Typography>
          <Typography mb="30px">Help Center</Typography>
          <Typography mb="30px">Track Your Order</Typography>
          <Typography mb="30px">Corporate & Bulk Purchasing</Typography>
          <Typography mb="30px">Returns & Refunds</Typography>
        </Box>

        <Box width="clamp(20%, 25%, 30%)">
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Find Us
          </Typography>
          <Typography mb="30px">
            KTX Khu B ĐHQG, Tô Vĩnh Diện, Đông Hoà, Dĩ An, Bình Dương
          </Typography>
          <Typography mb="30px" sx={{ wordWrap: "break-word" }}>
            Email: btdat1412@gmail.com
          </Typography>
          <Typography mb="30px">(+84)12746060</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;

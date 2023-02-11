import { Box, Typography } from "@mui/material";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useNavigate } from "react-router-dom";

const Payment = ({ totalPrice }) => {
  const navigate = useNavigate();
  const initialOptions = {
    "client-id":
      "Ab-4cAPbjCAflZuMEva9OKiUQPYmeuxUyjHrbhIqa6D_YPAKov09d1Xq1phjK2g8YAoiNUGy45YKFiKl",
    currency: "USD",
  };

  return (
    <Box textAlign="center" m="50px auto">
      <PayPalScriptProvider options={initialOptions}>
        <PayPalButtons
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: totalPrice,
                  },
                },
              ],
            });
          }}
          onApprove={async (data, actions) => {
            const details = await actions.order.capture();
            navigate("/Ecommerce-FrontEnd/checkout/success");
          }}
        />
      </PayPalScriptProvider>
    </Box>
  );
};

export default Payment;

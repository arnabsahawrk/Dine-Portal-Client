import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import PropTypes from "prop-types";

import "./PaymentCheckout.css";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useAxiosSecure from "../../hooks/Axios/useAxiosSecure";
import PostLoader from "../Loader/PostLoader";
import { Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import useAddOrderMutation from "../../hooks/TanstackQuery/useAddOrderMutation";
import useIncrementMutation from "../../hooks/TanstackQuery/useIncrementMutation";
import useAddPayments from "../../hooks/TanstackQuery/useAddPayments";

const PaymentCheckout = ({
  formData,
  handleClose,
  quantityReset,
  setCardError,
  cardError,
}) => {
  const axiosSecure = useAxiosSecure();
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState(null);
  const [processing, setProcessing] = useState(false);
  const navigate = useNavigate();
  const { orderAsync, pendingOrder } = useAddOrderMutation();
  const { incrementAsync } = useIncrementMutation();
  const paymentAsync = useAddPayments();

  useEffect(() => {
    const price = formData?.price * formData?.buyerQuantity;
    const getClientSecret = async () => {
      if (price > 0) {
        const { data } = await axiosSecure.post("/create-payment-intent", {
          price,
        });
        setClientSecret(data.clientSecret);
      }
    };
    getClientSecret();
  }, [formData?.price, formData?.buyerQuantity, axiosSecure]);

  //checkout form
  const handleSubmit = async (event) => {
    event.preventDefault();
    handleClose();
    setProcessing(true);

    if (!stripe || !elements) {
      setProcessing(false);
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      setProcessing(false);
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
      setProcessing(false);
      return;
    } else {
      setCardError(null);
    }

    //confirm payment
    const { error: confirmError, paymentIntent } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: formData?.BuyerName,
            email: formData?.BuyerEmail,
          },
        },
      });

    if (confirmError) {
      setCardError(confirmError.message);
      setProcessing(false);
      return;
    }

    if (paymentIntent.status === "succeeded") {
      const paymentInfo = {
        date: new Date().toLocaleString(),
        ...formData,
        transactionId: paymentIntent.id,
      };

      try {
        await paymentAsync(paymentInfo);
        await orderAsync(formData);
        toast.success("Order Done Successfully.", {
          style: {
            border: "1px solid #932584",
            padding: "16px",
            color: "#932584",
            background: "#fce4ec",
          },
          iconTheme: {
            primary: "#932584",
            secondary: "#fce4ec",
          },
        });
        navigate("/orderedFoods");
        await incrementAsync({
          foodId: formData.foodId,
          buyerQuantity: formData.buyerQuantity,
        });
      } catch {
        toast.error("Order Failed.", {
          style: {
            border: "1px solid #932584",
            padding: "16px",
            color: "#932584",
            background: "#fce4ec",
          },
          iconTheme: {
            primary: "#932584",
            secondary: "#fce4ec",
          },
        });
      }
    }

    setProcessing(false);
    handleClose();
    quantityReset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <p className="text-[#d92775] font-bold">
        Total Quantity: {formData?.buyerQuantity}
      </p>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      {cardError && (
        <Typography
          variant="paragraph"
          className="text-[#d92775] font-DotGothic16 capitalize italic"
        >
          {cardError}
        </Typography>
      )}
      {processing | pendingOrder ? (
        <PostLoader />
      ) : (
        <button
          type="submit"
          className={`px-4 py-2 text-base tracking-wide text-pink-50  rounded-md font-bold ${
            !stripe || !clientSecret ? "bg-[#93258480]" : "bg-[#932584]"
          }`}
          disabled={!stripe || !clientSecret || processing}
        >
          Pay ${formData?.buyerQuantity * formData?.price}
        </button>
      )}
    </form>
  );
};

PaymentCheckout.propTypes = {
  formData: PropTypes.object,
  handleClose: PropTypes.func.isRequired,
  quantityReset: PropTypes.func.isRequired,
  setCardError: PropTypes.func.isRequired,
  cardError: PropTypes.any,
};

export default PaymentCheckout;

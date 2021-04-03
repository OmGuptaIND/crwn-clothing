import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const key =
    "pk_test_51IcEzaSBP60Q3CFnFmwqsbcXepK1HwQBygwYLq4Zc9Pwyg2RY5Wrj4w0kxjynZb0MxQDV5tpp55wsXNAv1LpVHDi00LbfJRSOn";
  const onToken = (token) => {
    console.log(token);
    alert("PAYMENT SUCCESS");
  };
  return (
    <StripeCheckout
      label="PAY NOW"
      name="CRWN CLOTHING Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your Total Amout in ₹${price}`}
      amount={priceForStripe}
      panelLabel="PAY NOW"
      currency="IND"
      token={onToken}
      stripeKey={key}
    />
  );
};

export default StripeButton;

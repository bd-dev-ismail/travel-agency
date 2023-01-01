import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "../Components/CheckoutForm";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(process.env.STRIPE_KEY1);

export default function NextPayment() {
  const [clientSecret, setClientSecret] = React.useState("");

  React.useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("/pages/api/create-payment-intent.js", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div>
      <div className="flex justify-center items-center my-20">
        <div className="w-full lg:w-[30rem] shadow-2xl">
          <h3 className="text-3xl font-semibold my-5 text-center">
            Procced Too <span className="text-primary"> Payment</span>
          </h3>
          <p className="text-center text-xl font-semibold">
            Your are Paying :{" "}
            <span className="text-primary">$Price</span>
          </p>
          <p className="text-center text-xl font-semibold">
            Book Name: <span className="text-primary"> Name</span>{" "}
          </p>
          <div className="w-96 text-center mx-auto my-10">
            {clientSecret && (
              <Elements options={options} stripe={stripePromise}>
                <CheckoutForm />
              </Elements>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

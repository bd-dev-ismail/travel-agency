import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe(process.env.STRIPE_KEY);
// console.log(stripePromise);
const Payment = () => {
  const order = {bookPrice: 500, bookName: "test", };
  return (
    <div className="flex justify-center items-center my-20">
      <div className="w-full lg:w-[30rem] shadow-2xl">
        <h3 className="text-3xl font-semibold my-5 text-center">
          Procced Too <span className="text-primary"> Payment</span>
        </h3>
        <p className="text-center text-xl font-semibold">
          Your are Paying :{" "}
          <span className="text-primary">${order.bookPrice}</span>
        </p>
        <p className="text-center text-xl font-semibold">
          Book Name: <span className="text-primary"> {order.bookName}</span>{" "}
        </p>
        <div className="w-96 text-center mx-auto my-10">
          <Elements stripe={stripePromise}>
            <CheckoutForm  />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;

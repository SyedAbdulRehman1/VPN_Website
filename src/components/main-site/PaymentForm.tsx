import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { SecureIcons } from "../PaymentIcons";
import { StripeCardElement } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import { post } from "@/services/http";
import { PAYMENT } from "@/utils/api-routes";
import Alert from "@/components/Alert"; // Import the Alert component
import { PlanData } from "@/models/pricing-cards.model";
import { AlertType } from "@/models/alert-type";
import { setToken, setUser } from "@/services/local-storage";
import { useRouter } from "next/navigation";

const PaymentForm: React.FC<{
  clientSecret: string;
  plan?: any;
  email: string;
}> = ({ clientSecret, plan, email }) => {
  const router = useRouter();
  const [planItem, setPlan] = useState<PlanData>(plan);
  const [userEmail, setEmail] = useState<string>(email);
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState<AlertType>({
    message: "",
    type: "success",
  });

  useEffect(() => {
    setEmail(email);
  }, [email]);

  useEffect(() => {
    setPlan(plan);
  }, [plan]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (!planItem?.id) {
        throw "Please chosse a plan";
      }

      if (!userEmail) {
        throw "Enter email";
      } else if (!/\S+@\S+\.\S+/.test(userEmail)) {
        throw "Invalid email format.";
      }

      if (!stripe || !elements) {
        throw "Stripe Not Enabled";
      }

      const result = await stripe.confirmCardSetup(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement) as StripeCardElement,
        },
      });

      if (result.error) {
        const {
          error: { message },
        } = result;
        throw message;
      }

      const {
        setupIntent: { id },
      } = result;

      const requestData = {
        email,
        planId: planItem.id,
        setupIntent: id,
      };

      const { token, user }: any = await post(PAYMENT, requestData);
      setMessage({ message: "Payment made successfully!", type: "success" });
      setToken(token);
      setUser(user);
      setTimeout(() => {
        router.push("/clientarea");
      }, 2000);
    } catch (error: any) {
      setMessage({ message: error, type: "error" });
      setTimeout(() => setMessage({ type: "success", message: "" }), 1000);
    }
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      {message.message && (
        <Alert type={message.type} message={message.message} />
      )}
      <div className="h-230">
        <CardElement id="payment-element" />
      </div>
      <div className="md:mt-0 sm:mb-8 sm:max-w-md md:block mx-auto w-full xl:p-0">
        {planItem && (
          <>
            <div className="flex py-1 justify-between text-lg">
              <span>Subtotal</span>
              <span>${planItem?.total_price_of_plan}</span>
            </div>
            <hr />
            <div className="flex py-3 justify-between font-semibold text-xl">
              <span>Total</span>
              <span>${planItem?.total_price_of_plan}</span>
            </div>
          </>
        )}
        <div className="flex py-3 items-center justify-between font-semibold text-2xl">
          <span>
            <SecureIcons />
          </span>
          <span className="">
            <button
              type="submit"
              className="border flex text-white bg-gray-950 items-center gap-x-3 text-center hover:bg-orange-600 hover:text-white bg-gray-light text-sm lg:text-base font-medium rounded-md focus:outline-none focus:ring-2 focus:virgo-orange focus:ring-offset-2 focus:orange transition py-3 pr-10 pl-6 dark:focus:orange"
              disabled={!stripe}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11M5 11H19C20.1046 11 21 11.8954 21 13V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V13C3 11.8954 3.89543 11 5 11Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Pay Now
            </button>
          </span>
        </div>
      </div>
    </form>
  );
};

export default PaymentForm;

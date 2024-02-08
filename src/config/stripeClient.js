import Stripe from "stripe";
const stripe = new Stripe(
  "sk_test_51Ofm0lSHAkqKDmUS0Cf081okRFyRYlU9QFufW4OxXL9mCvwGD9VIcyH1DjjKWYDckxJ16knRDLvvDcSG8PrIrGIF00nBQaupD1"
);

export const customer = await stripe.customers.create({
  email: "kumar29.aayush@gmail.com",
});

console.log(customer.id);

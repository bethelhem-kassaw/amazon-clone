//import cors from "cors";
const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");

const { response } = require("express");
const stripe = require("stripe")(
  "sk_test_51HUB5gG85QXgFhDEhDDKuTKvsomXETACgqHovyqx5seVHzsPHnB6fZKWTml8WaJulLFQpccvI2VuQAnaqqtX5Xvk00mhzG3Bpd"
);
// API

// App config
const app = express();

// middlewares
app.use(cors({ origin: true }));
app.use(express.json());
// API routes
app.get("/", (request, response) => response.status(200).send("hello world"));
app.post("/payments/create", async (request, respose) => {
  const total = request.query.total;
  console.log("Payment Request Recived BOOM!!! for this amount >>>", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// Listen command

exports.api = functions.https.onRequest(app);
// http://localhost:5001/e-clone-c6fab/us-central1/api

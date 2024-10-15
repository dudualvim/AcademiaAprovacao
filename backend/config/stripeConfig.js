// /backend/config/stripeConfig.js
const Stripe = require('stripe');
const stripe = Stripe('process.env.STRIPE_SECRET_KEY'); // Substitua com sua chave secreta real

module.exports = stripe;

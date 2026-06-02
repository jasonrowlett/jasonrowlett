import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

async function setClerkPremium(email, isPremium) {
<<<<<<< HEAD
=======
  // Find user by email via Clerk Backend API
>>>>>>> claude/quirky-dijkstra-OJkR8
  const searchRes = await fetch(
    `https://api.clerk.com/v1/users?email_address=${encodeURIComponent(email)}`,
    { headers: { Authorization: `Bearer ${process.env.CLERK_SECRET_KEY}` } }
  );
  const users = await searchRes.json();
  if (!users?.length) return;
<<<<<<< HEAD
=======

>>>>>>> claude/quirky-dijkstra-OJkR8
  const userId = users[0].id;
  await fetch(`https://api.clerk.com/v1/users/${userId}/metadata`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${process.env.CLERK_SECRET_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ public_metadata: { isPremium } }),
  });
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
<<<<<<< HEAD
  const sig = req.headers['stripe-signature'];
  let event;
  try {
    event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }
=======

  const sig = req.headers['stripe-signature'];
  let event;
  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

>>>>>>> claude/quirky-dijkstra-OJkR8
  if (event.type === 'checkout.session.completed') {
    const email = event.data.object.customer_details?.email;
    if (email) await setClerkPremium(email, true);
  }
<<<<<<< HEAD
  if (event.type === 'customer.subscription.deleted' || event.type === 'invoice.payment_failed') {
=======

  if (
    event.type === 'customer.subscription.deleted' ||
    event.type === 'invoice.payment_failed'
  ) {
>>>>>>> claude/quirky-dijkstra-OJkR8
    const customerId = event.data.object.customer;
    const customer = await stripe.customers.retrieve(customerId);
    if (customer.email) await setClerkPremium(customer.email, false);
  }
<<<<<<< HEAD
=======

>>>>>>> claude/quirky-dijkstra-OJkR8
  res.json({ received: true });
}

import Stripe from 'stripe'

export const stripe = new Stripe(
  process.env.STRIPE_SECRET_PROD_KEY ? process.env.STRIPE_SECRET_PROD_KEY : '',
  {
    apiVersion: '2022-11-15',
    appInfo: {
      name: 'Alerta Pet',
    },
  },
)

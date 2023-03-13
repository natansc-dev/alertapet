import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";
import { stripe } from "../lib/stripe";
import placeholderImg from '../assets/placeholder.svg'
interface SuccessProps {
  customer_name: string,
  product: {
    name: string,
  }
}

export default function Success({ customer_name, product }: SuccessProps) {
  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>

        <meta name="robots" content="noindex" />
      </Head>

      <div>
        <h1>Sucesso!</h1>

        <div>
          <Image src={placeholderImg} alt={""} width={120} height={110} />
        </div>

        <p>Uhuul <strong>{customer_name}</strong>, sua <strong>{product.name}</strong> já está a caminho da sua casa. </p>

        <Link href="/">
          Voltar ao catálogo
        </Link>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  const customerName = session.customer_details?.name

  const product = session.line_items?.data[0].price?.product as Stripe.Product

  return {
    props: {
      customer_name: customerName,
      product: {
        name: product.name,
      }
    }
  }
}
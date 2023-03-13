import Head from "next/head";
import { GetStaticProps } from "next";
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";
import Nav from "@/components/nav";
import Hero from "@/components/hero";
import VideoSection from "@/components/video";
import WhoIs from "@/components/whois";
import HowWorks from "@/components/howworks";
import Statistics from "@/components/statistics";
import Plans from "@/components/plans";
import Faq from "@/components/faq";
import Footer from "@/components/footer";
interface HomeProps {
  products: {
    id: string,
    name: string,
    price: string
  }[]
}

export default function Home({ products }: HomeProps) {
  return (
    <>
      <Head>
        <title>
          Alerta Pet - Não desista de encontrar seu melhor amigo!
        </title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <Nav />
      <Hero />
      <VideoSection />
      <WhoIs />
      <HowWorks />
      <Statistics />
      <Plans products={products} />
      <Faq />
      <Footer />
    </>
  )
}


export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })


  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      price: price.unit_amount ? new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount / 100) : null,
      unit_amount: price.unit_amount ? price.unit_amount : 0
    }
  })


  products.sort((a, b) => {
    return a.unit_amount - b.unit_amount;
  });

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2 // 2 hours,
  }
}
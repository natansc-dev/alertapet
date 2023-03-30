import Head from "next/head";
import { GetStaticProps } from "next";
import { ToastContainer } from 'react-toastify'
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
import WhatsApp from "@/components/whatsapp";
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
        <meta name="description" content="Encontre seu pet utilizando a melhor maneira possivel? Anuncio! A Alerta Pet é um serviço que utiliza o tráfego pago para atigir o maior número de pessoas informando o desaparecimento do seu pet." />
        <meta name="author" content="Sweetspot Mídia" />
        {/* Facebook Meta Tags */}
        <meta property="og:title" content="Alerta Pet - Não desista de encontrar seu melhor amigo!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.alertapet.com/" />
        <meta property="og:image" content="https://www.alertapet.com/android-chrome-192x192.png" />
        <meta property="og:description" content="Encontre seu pet utilizando a melhor maneira possivel? Anuncio! A Alerta Pet é um serviço que utiliza o tráfego pago para atigir o maior número de pessoas informando o desaparecimento do seu pet." />
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="Alerta Pet - Não desista de encontrar seu melhor amigo!" />
        <meta name="twitter:site" content="Alerta Pet - Não desista de encontrar seu melhor amigo!" />
        <meta name="twitter:image" content="https://www.alertapet.com/android-chrome-192x192.png" />
        <meta name="twitter:domain" content="https://www.alertapet.com/" />
        <meta name="twitter:title" content="Alerta Pet - Não desista de encontrar seu melhor amigo!" />
        <meta name="twitter:description" content="Encontre seu pet utilizando a melhor maneira possivel? Anuncio! A Alerta Pet é um serviço que utiliza o tráfego pago para atigir o maior número de pessoas informando o desaparecimento do seu pet." />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <ToastContainer />
      <Nav />
      <Hero />
      <VideoSection />
      <WhoIs />
      <HowWorks />
      <Statistics />
      <Plans products={products} />
      <Faq />
      <Footer />
      <WhatsApp />
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
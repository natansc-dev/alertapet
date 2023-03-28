import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";
import { useState } from "react";
import axios from "axios";
import Stripe from "stripe";
import { stripe } from "../../lib/stripe";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
interface ProductProps {
  product: {
    id: string,
    name: string,
    image_url: string,
    price: string
    price_before: number
    description: string
    defaultPriceId: string
  }
}

export default function Product({ product }: ProductProps) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)
  const { isFallback } = useRouter()

  if (isFallback) {
    return (
      <h1>Loading...</h1>
    )
  }

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true)

      const response = await axios.post('/api/checkout', {
        priceId: product.defaultPriceId
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (error) {
      setIsCreatingCheckoutSession(false)

      alert("Falha ao redirecionar ao checkout!")
    }
  }

  return (
    <>
      <Head>
        <title>{product.name} | Alerta Pet</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <Nav />

      <div className="flex w-11/12 mx-auto gap-10 my-12">
        <div>
          <Image src={product.image_url} alt={""} width={520} height={480} />
        </div>
        <div>
          <h1 className="text-2xl font-bold">{product.name}</h1>

          <p className="mt-4 text-xl font-semibold">
            {product.name === 'Pet Prata' && ("Alcance potencial de 6.000 a 10.000 pessoas")}
            {product.name === 'Pet Bronze' && ("Alcance potencial de 10.000 a 20.000 pessoas")}
            {product.name === 'Pet Ouro' && ("Alcance potencial de 20.000 a 50.000 pessoas")}
          </p>

          <p className="mt-4 font-extralight text-sm">{product.description}</p>

          <p className="mt-4 text-xl font-semibold">O que está incluso nesse plano?</p>

          <ul className="list-disc ml-5 mt-3">
            <li>Gerenciamento e veiculação do alerta(Propaganda) geolocalizada</li>

            <li>Panfleto personalizado com QR Code direcionando para WhatsApp do Tutor</li>

            <li>Acompanhamento de mensagens e comentários das publicações</li>

            <li>Atendimento e suporte personalizado</li>

            <li>Filtro de informações recebidas e dicas</li>

            <li>Envio de relatório de visualizações e pessoas alcançadas diariamente</li>

            <li>Publicações diarias no grupos da cidade e região</li>

            <li>

              {product.name === 'Pet Prata' && ("Propaganda geolocalizada com Duração 7 dias")}
              {product.name === 'Pet Bronze' && ("Propaganda geolocalizada com Duração 14 dias")}
              {product.name === 'Pet Ouro' && ("Propaganda geolocalizada com Duração 30 dias")}
            </li>
          </ul>

          <p className="mt-4">
            <del className="text-[#898989] text-sm">
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format((product.price_before + 4900) / 100)}
            </del>
            <br />
            <ins className="text-[#1ab794] text-4xl font-bold no-underline">{product.price}</ins>
          </p>

          <button
            onClick={() => handleBuyProduct()}
            disabled={isCreatingCheckoutSession}
            className="mt-4 text-2xl text-white font-bold rounded-3xl relative py-2 px-7 bg-gradient-to-r from-[#F86CA7] to-[#FF7F18]"
          >
            Comprar agora
          </button>
        </div>
      </div>

      <Footer />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true
  }
}

export const getStaticProps: GetStaticProps<any, { slug: string }> = async ({ params }) => {

  const productId = params ? params.slug : ''

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        image_url: product.images[0],
        price: price.unit_amount ? new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(price.unit_amount / 100) : null,
        price_before: price.unit_amount ? price.unit_amount : null,
        description: product.description,
        defaultPriceId: price.id
      }
    }
  }
}
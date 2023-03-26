import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";
import Stripe from "stripe";
import { stripe } from "../../lib/stripe";
import { useRouter } from "next/router";
import axios from "axios";
import { useState } from "react";
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logoImg from '../../assets/alertapetlogo.svg'
import placeholderImg from '../../assets/placeholder.svg'
import phoneImg from '../../assets/phone-icon.svg'
import mailImg from '../../assets/envelope.svg'
interface ProductProps {
  product: {
    id: string,
    name: string,
    image_url: string,
    price: string
    price_before: string
    description: string
    defaultPriceId: string
  }
}

const navigation = [
  { name: 'Por que a Alerta Pet?', href: '#', current: true },
  { name: 'Como que funciona?', href: '#', current: false },
  { name: 'Planos e Preços', href: '#', current: false },
  { name: 'Tire suas Dúvidas', href: '#', current: false },
  { name: 'Contato', href: '#', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
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

      <Disclosure as="nav" className="bg-[#001D23]">
        {({ open }) => (
          <>
            <div className="mx-auto w-11/12 px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>

                <div className="flex flex-1 items-center justify-center sm:items-stretch">
                  <Link href="/" className="flex flex-shrink-0 items-center">
                    <Image
                      className="block h-8 w-auto lg:hidden"
                      src={logoImg}
                      alt="Your Company"
                      width={429}
                      height={83}
                    />
                    <Image
                      className="hidden h-8 w-auto lg:block"
                      src={logoImg}
                      alt="Your Company"
                      width={429}
                      height={83}
                    />
                  </Link>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'rounded-md px-3 py-2 text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <div className="flex w-11/12 mx-auto gap-10 my-12">
        <div>
          <Image src={product.image_url} alt={""} width={520} height={480} />
        </div>
        <div>
          <h1 className="text-2xl font-bold">{product.name}</h1>

          <p className="mt-4 text-xl font-semibold">Alcance potencial de 6000 a 10000 pessoas</p>

          <p className="mt-4 font-extralight text-sm">{product.description}</p>

          <p className="mt-4 text-xl font-semibold">O que está incluso nesse plano?</p>

          <ul className="list-disc ml-5 mt-3">
            <li>Panfleto personalizado com QR Code direcionando para WhatsApp do Tutor</li>
            <li>Acompanhamento de mensagens e comentários das publicações</li>
            <li>Atendimento personalizado</li>
            <li>Filtro de informações recebidas e dicas</li>
            <li>Seu pet dentro do nosso Mapa com a ultima localização onde ele foi visto pela ultima vez</li>
            <li>Envio de relatório de visualizações e pessoas alcançadas diariamente</li>
            <li>Propaganda geolocalizada com Duração 7 dias</li>
            <li>Após a divulgação seu PET ficará em nossas plataformas e paginas até que ele seja encontrado</li>
          </ul>

          <p className="mt-4">
            <del className="text-[#898989] text-sm">{product.price.replace("R$", "") + 49}</del>
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

      <footer className="bg-[#fff5ed] bg-[url('../assets/footer-bg.png')] bg-cover bg-center bg-no-repeat">
        <div className="w-11/12 mx-auto">
          <div className="flex flex-col sm:flex-row py-20 justify-content-center">
            <div className="w-11/12 sm:w-3/12 flex justify-content-sm-start justify-content-start">
              <div className="footer-items contact">
                <h3 className="text-3xl font-bold mb-5">Contato</h3>
                <div className="flex items-center mb-7">
                  <div className="mr-3">
                    <Image src={phoneImg} alt="" width={23} height={23} />
                  </div>

                  <div>
                    <h6>
                      <a href="tel:+551900000000">+55 19 0 0000-000</a>
                    </h6>
                  </div>
                </div>

                <div className="flex items-center mb-7">
                  <div className="mr-3">
                    <Image src={mailImg} alt="" width={23} height={23} />
                  </div>
                  <div>
                    <h6>
                      <a href="tel:+551900000000">contato@alertapet.com</a>
                    </h6>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-11/12 sm:w-6/12 flex items-center justify-center">
              <div>
                <h2 className="text-5xl text-center font-normal">
                  Não <span className="font-bold">desista</span>
                  de encontrar<br /> <span className="font-bold">seu melhor amigo</span>!
                </h2>

                <div className="flex justify-center pt-5">
                  <a className="text-2xl text-white font-bold rounded-3xl relative py-2 px-7 bg-gradient-to-r from-[#F86CA7] to-[#FF7F18]" href="contact.html">Iniciar Buscas</a>
                </div>
              </div>
            </div>

            <div className="w-11/12 sm:w-3/12 flex justify-start sm:justify-end">
              <div className="footer-items opening-time">
                <h3 className="text-3xl font-bold mb-5">Atalhos</h3>
                <div className="flex justify-end">
                  <ul className="items-center list-none gap-7">
                    <li><a href="#">Politica de Privacidade</a></li>
                    <li><a href="#">Termos &amp; Condições</a></li>
                    <li><a href="#">Planos</a></li>
                    <li><a href="#">Suporte</a></li>
                  </ul>
                </div>
                <h6>Redes Sociais:</h6>
                <ul className="social-icons">
                  <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook"></i></a></li>
                  <li><a href="https://twitter.com/"><i className="bx bxl-twitter"></i></a></li>
                  <li><a href="https://www.pinterest.com/"><i className="bx bxl-pinterest-alt"></i></a></li>
                  <li><a href="https://www.instagram.com/"><i className="bx bxl-instagram"></i></a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex border-t-[1px] py-5">
            <div className="w-11/12">
              <div className="copyright-area">
                <p>© 2023 AlertaPet - Feito por Sweetspot Mídia</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
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
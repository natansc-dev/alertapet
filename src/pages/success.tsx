/* eslint-disable camelcase */
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Stripe from 'stripe'
import { stripe } from '../lib/stripe'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify'
import whatsappImg from '../assets/whatsapp-svgrepo-com.svg'
import { api } from '@/services/api'

interface SuccessProps {
  payment_intent: string
  customer_name: string
  product: {
    name: string
    image_url: string
  }
}

export default function Success({
  payment_intent,
  customer_name,
  product,
}: SuccessProps) {
  const [zipcodeValue, setZipcodeValue] = useState('')
  const [addressValue, setAddressValue] = useState('')
  const [districtValue, setDistrictValue] = useState('')
  const [cityValue, setCityValue] = useState('')
  const form = useRef<any>()

  function sendEmail(e: any) {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_x6u0e7k',
        'template_0r9h9bf',
        form.current,
        'user_EjfhmIzQ3tpR6cGoV5iMb',
      )
      .then(
        () => {
          toast.success('Mensagem foi enviada com sucesso!')
        },
        () => {
          toast.error('Ops... ocorreu um erro no envio, tente novamente.')
        },
      )
  }

  async function checkCEP(e: any) {
    const cep = e.target.value.replace(/\D/g, '')
    await api
      .get(`https://viacep.com.br/ws/${cep}/json/`)
      .then((response) => {
        console.log(response)
        setAddressValue(response.data.logradouro)
        setDistrictValue(response.data.bairro)
        setCityValue(response.data.localidade)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <>
      <Head>
        <title>Compra efetuada | Alerta Pet</title>

        <meta name="robots" content="noindex" />
      </Head>

      <Nav />

      <div className="flex w-11/12 mx-auto gap-10 my-12">
        <Image src={product.image_url} alt={''} width={1080} height={1920} />

        <div>
          <h1 className="text-3xl font-bold uppercase">
            Compra efetuada <br />
            com sucesso!
          </h1>

          <h2 className="text-2xl font-semibold uppercase mt-2">
            Plano: {product.name}
          </h2>

          <p className="mt-4">
            Agora o proxímo passo <strong>{customer_name}</strong>, é encaminhar
            as seguintes informações sobre o seu pet desaparecido, você pode
            preencher o <strong>Formulário</strong> abaixo ou encaminhar via{' '}
            <strong>WhatsApp</strong>
          </p>

          <div className="w-full">
            <form
              encType="multipart/form-data"
              ref={form}
              onSubmit={sendEmail}
              className="bg-white p-16 rounded-lg shadow-md max-w-xl sm:mt-4"
            >
              <div className="mx-auto max-w-2xl text-center">
                <a
                  href={`https://wa.me/5519982606755?text=Oi, tudo bem? Acabei de assinar o plano ${product.name}. O que devo fazer agora?`}
                  className="flex w-fit mx-auto my-4 gap-2 text-2xl text-white font-bold rounded-3xl relative py-2 px-7 bg-[#2cc448] "
                >
                  <Image src={whatsappImg} alt="" height={24} width={24} />{' '}
                  WhatsApp
                </a>

                <div className="mt-2 text-lg leading-8 text-gray-600">
                  <span className="bg-white relative px-2 z-10">OU</span>

                  <hr className="relative -top-[15px]" />
                </div>
              </div>

              <input
                type="hidden"
                name="payment_intent"
                value={payment_intent}
              />

              <div className="grid grid-cols-1 gap-y-4 gap-x-6 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Nome do Tutor
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="name"
                      className="block w-full rounded-md border-[1px] py-2 px-3.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Telefone para Contato
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      autoComplete="phone"
                      placeholder="(99) 9 9999-9999"
                      className="block w-full rounded-md border-[1px] py-2 px-3.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <hr />

                <div className="sm:col-span-2">
                  <label
                    htmlFor="pet_name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Nome do Pet
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="pet_name"
                      id="pet_name"
                      className="block w-full rounded-md border-[1px] py-2 px-3.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="animal"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Animal
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="animal"
                      id="animal"
                      placeholder="Cão, Gato, Ave..."
                      className="block w-full rounded-md border-[1px] py-2 px-3.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="sexo"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Sexo
                  </label>
                  <div className="mt-2.5">
                    <select
                      name="sexo"
                      id="sexo"
                      autoComplete="sexo"
                      className="block w-full rounded-md border-[1px] py-2 px-3.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 min-h-[41px]"
                    >
                      <option value="Não definido" disabled selected>
                        Selecione
                      </option>
                      <option value="macho">Macho</option>
                      <option value="fêmea">Fêmea</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="breed"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Raça
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="breed"
                      id="breed"
                      placeholder="Vira-lata"
                      className="block w-full rounded-md border-[1px] py-2 px-3.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="color"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Cor
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="color"
                      id="color"
                      autoComplete="color"
                      placeholder="Caramelo"
                      className="block w-full rounded-md border-[1px] py-2 px-3.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="zipcode"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    CEP
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="zipcode"
                      id="zipcode"
                      autoComplete="zipcode"
                      placeholder="99999-999"
                      value={zipcodeValue}
                      onChange={(e) => setZipcodeValue(e.target.value)}
                      onBlur={checkCEP}
                      className="block w-full rounded-md border-[1px] py-2 px-3.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="address"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Rua
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="address"
                      id="address"
                      autoComplete="address"
                      value={addressValue}
                      className="block w-full rounded-md border-[1px] py-2 px-3.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="district"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Bairro
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="district"
                      id="district"
                      autoComplete="district"
                      value={districtValue}
                      className="block w-full rounded-md border-[1px] py-2 px-3.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="city"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Cidade
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="city"
                      id="city"
                      autoComplete="city"
                      value={cityValue}
                      className="block w-full rounded-md border-[1px] py-2 px-3.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Descreva seu pet com detalhes
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      className="block w-full rounded-md border-[1px] py-2 px-3.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                      defaultValue={''}
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <button
                    type="submit"
                    className="text-2xl text-white font-bold rounded-3xl relative py-2 px-7 bg-gradient-to-r from-[#F86CA7] to-[#FF7F18] transition-all hover:rounded-md"
                  >
                    Enviar
                  </button>
                </div>
              </div>
            </form>
          </div>

          <Link
            href="/"
            className="mt-4 text-2xl text-white font-bold rounded-3xl relative py-2 px-7 bg-gradient-to-r from-[#F86CA7] to-[#FF7F18]"
          >
            Voltar ao catálogo
          </Link>
        </div>
      </div>

      <Footer />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  const customerName = session.customer_details?.name

  const paymentIntent = session.payment_intent

  const product = session.line_items?.data[0].price?.product as Stripe.Product

  return {
    props: {
      payment_intent: paymentIntent,
      customer_name: customerName,
      product: {
        name: product.name,
        image_url: product.images[0],
      },
    },
  }
}

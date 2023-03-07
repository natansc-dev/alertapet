import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import bannerImg from '../assets/new-banner-img.png'
import pataRImg from '../assets/section-vec-r1.svg'
import pataLImg from '../assets/section-vec-l1.svg'
import storyLImg from '../assets/story-img1.png'
import icon1ComoImg from '../assets/1.png'
import icon2ComoImg from '../assets/2.png'
import icon3ComoImg from '../assets/3.png'
import icon1NumberImg from '../assets/icon1.png'
import icon2NumberImg from '../assets/icon2.png'
import icon3NumberImg from '../assets/icon3.png'
import icon4NumberImg from '../assets/icon4.png'
import checkImg from '../assets/pricing-check.svg'
import phoneImg from '../assets/phone-icon.svg'
import mailImg from '../assets/envelope.svg'
import { GetStaticProps } from "next";
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";
import Head from "next/head";
import Link from "next/link";

interface HomeProps {
  products: {
    id: string,
    name: string,
    price: string
  }[]
}

export default function Home({ products }: HomeProps) {
  console.log(products)
  return (
    <>
      <Head>
        <title>Alerta Pet - Não desista de encontrar seu melhor amigo!</title>
      </Head>

      <div className="bg-pet-500 pb-12">
        <div className="w-full px-3 mx-auto">
          <div className="flex flex-wrap justify-center">
            <div className="w-11/12">
              <div className="flex flex-col md:flex-row">
                <div className="w-full 2xl:w-6/12 flex items-center">
                  <div className="w-full max-w-2xl mt-4 flex flex-col justify-center items-center md:justify-start md:items-start">
                    <div className="relative mb-5 inline-block">
                      <ul className="list-none flex gap-10 items-center">
                        <li className="text-lg relative">Confiável</li>
                        <li className="text-lg relative">Segurança</li>
                        <li className="text-lg relative">Lealdade</li>
                      </ul>
                    </div>
                    <h1 className="text-4xl sm:text-6xl text-center font-extrabold mb-0 md:text-left">
                      <p className="mb-6">Não desista de encontrar seu melhor amigo!</p>
                      <p className="text-3xl">Anuncie seu pet desaparecido e aumente as chances de reencontrá-lo com nossos serviços.</p>
                    </h1>
                  </div>
                </div>
                <div className="w-full 2xl:w-6/12 flex items-center justify-center">
                  <div className="pt-12 mb-24 flex flex-col justify-center items-center min-w-[320px]">
                    <div className="hidden sm:inline ml-0 mt-0 z-50">
                      <Image className="w-full" src={bannerImg} alt="" />
                    </div>

                    <div className="flex justify-center">
                      <a className="text-2xl text-white font-bold rounded-3xl relative py-2 px-7 bg-gradient-to-r from-[#F86CA7] to-[#FF7F18]" href="#">
                        Iniciar Buscas
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center -mt-[98px] mb-24">
        <div className="w-full">
          <div className="row justify-center">
            <div className="w-11/12 mx-auto">
              <video autoPlay loop muted preload="auto" className="border-8 border-white">
                <source src='/video-02.mp4' type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-24">
        <div className="w-full px-3">
          <div className="flex flex-wrap justify-center w-11/12 mx-auto items-center">
            <div className="w-full sm:w-1/2">
              <div className="mb-5">
                <span className="flex relative items-center mb-2 text-xl font-medium">
                  <Image src={pataLImg} alt="" width={24} height={36} />
                  Aleta Pet
                  <Image src={pataRImg} alt="" width={24} height={36} />
                </span>

                <h2 className="font-bold text-5xl">Por que a Alerta Pet é a melhor chance de encontrar seu pet?</h2>
              </div>
              <div>
                <p>A vantagem dos sistemas de anuncios em relação aos cartazes e postagens que os próprios donos distribuem é que <b>atingem um maior número de pessoas</b>. Além da cobertura de bairros próximos de casa e até mesmo no bairro de animais perdidos, os anuncios também <b>atingem todos os tipos de pessoas</b>. Não são apenas os amantes dos animais que se reúnem em determinados grupos nas redes sociais. <b>Os anuncios também podem cobrir cidades inteiras</b> se o seu animal de estimação desaparecido for longe demais.</p>
                <div className="py-5">
                  <h3 className="text-2xl font-medium">Encontre seu melhor amigo! Com o serviço de anunciar seu pet desaparecido para que ele possa voltar para casa.</h3>
                </div>
                <div className="flex justify-center sm:justify-start">
                  <a className="text-2xl text-white font-bold rounded-3xl relative py-2 px-7 bg-gradient-to-r from-[#F86CA7] to-[#FF7F18]" href="#">
                    Encontrar meu pet
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full sm:w-1/2 flex sm:justify-end justify-center">
              <div className="mt-9 sm:mt-0">
                <Image className="img-fluid" src={storyLImg} alt="" width={516} height={679} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[url('../assets/feature-bg.png')] py-32 bg-no-repeat bg-cover text-white">
        <div className="w-full p-0">
          <div className="flex flex-wrap justify-center w-11/12 mx-auto items-center">
            <div className="mb-7">
              <h2 className="font-bold text-5xl ">Como que funciona?</h2>
            </div>

            <div className="gap-4 flex flex-col sm:flex-row items-center justify-center">
              <div className="max-w-xs rounded-lg">
                <div className="w-[74px] h-[74px] rounded-full flex justify-center items-center bg-gradient-to-r from-[#F86CA7] to-[#FF7F18] mb-3">
                  <Image src={icon1ComoImg} width={40} height={40} alt="" className="drop-shadow-2xl" />
                </div>

                <div className="content">
                  <h4 className="text-2xl font-bold">Plano</h4>

                  <p className="text-lg">Selecione o plano que mais atende as suas necessidades.</p>
                </div>
              </div>

              <div className="max-w-xs  rounded-lg">
                <div className="w-[74px] h-[74px] rounded-full flex justify-center items-center bg-gradient-to-r from-[#F86CA7] to-[#FF7F18] mb-3">
                  <Image src={icon2ComoImg} width={40} height={40} alt="" className="drop-shadow-2xl" />
                </div>
                <div className="content">
                  <h4 className="text-2xl font-bold">Informações</h4>
                  <p className="text-lg">Coletamos o máximo de informações sobre seu Pet e o local que ele desapareceu.</p>
                </div>
              </div>

              <div className="max-w-xs rounded-lg">

                <div className="w-[74px] h-[74px] rounded-full flex justify-center items-center bg-gradient-to-r from-[#F86CA7] to-[#FF7F18] mb-3">
                  <Image src={icon3ComoImg} width={40} height={40} alt="" className="drop-shadow-2xl" />
                </div>

                <div className="content">
                  <h4 className="text-2xl font-bold">Anuncios</h4>
                  <p className="text-lg">Iniciamos os anuncios notificando o desaparecimento o mais rapido possivel</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="-mt-[58px] mb-24">
        <div className="w-full px-3">
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <div className="w-full sm:w-1/4 px-4 flex items-center ">
              <div className="bg-[#fbecec] p-4 rounded-lg flex items-center justify-around w-full shadow-md">
                <div className="w-[74px] h-[74px] rounded-full flex justify-center items-center border-[1px] border-[#F86CA7]">
                  <Image src={icon1NumberImg} width={54} height={54} alt="" />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <h3 className="text-5xl font-bold spacing tracking-widest">237</h3>
                    <span className="text-5xl font-bold">+</span>
                  </div>
                  <p className="text-lg">Clientes</p>
                </div>
              </div>
            </div>

            <div className="w-full sm:w-1/4 px-4 flex items-center ">
              <div className="bg-[#eff8dd] p-4 rounded-lg flex items-center justify-around w-full shadow-md">
                <div className="w-[74px] h-[74px] rounded-full flex justify-center items-center border-[1px] border-[#F86CA7]">
                  <Image src={icon2NumberImg} width={54} height={54} alt="" />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <h3 className="text-5xl font-bold spacing tracking-widest">300</h3>
                    <span className="text-5xl font-bold">+</span>
                  </div>
                  <p className="text-lg">Pet resgatados</p>
                </div>
              </div>
            </div>

            <div className="w-full sm:w-1/4 px-4 flex items-center ">
              <div className="bg-[#ffd9e7] p-4 rounded-lg flex items-center justify-around w-full shadow-md">
                <div className="w-[74px] h-[74px] rounded-full flex justify-center items-center">
                  <Image src={icon3NumberImg} width={54} height={54} alt="" />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <h3 className="text-5xl font-bold spacing tracking-widest">400</h3>
                    <span className="text-5xl font-bold">+</span>
                  </div>
                  <p className="text-lg">Anuncios</p>
                </div>
              </div>
            </div>

            <div className="w-full sm:w-1/4 px-4 flex items-center ">
              <div className="bg-[#fdeae1] p-4 rounded-lg flex items-center justify-around w-full shadow-md">
                <div className="w-[74px] h-[74px] rounded-full flex justify-center items-center">
                  <Image src={icon4NumberImg} width={54} height={54} alt="" />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <h3 className="text-5xl font-bold spacing tracking-widest">2</h3>
                    <span className="text-5xl font-bold">+</span>
                  </div>
                  <p className="text-lg">Anos de experiencia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-20">
        <div className="w-11/12 mx-auto">
          <div className="flex mb-10">
            <div className="w-full justify-center items-center">
              <div className="section-title1 text-center">
                <span className="flex relative justify-center items-center mb-2 text-xl font-medium">
                  <Image src={pataLImg} alt="" width={24} height={36} />
                  Planos
                  <Image src={pataRImg} alt="" width={24} height={36} />
                </span>
                <h2 className="text-5xl font-bold">Escolha seu plano perfeito</h2>
              </div>
            </div>
          </div>

          <div className="w-full flex items-center justify-center gap-5">
            {products.map((product) => {
              return (

                <div key={product.id} className="w-4/12 bg-white rounded-lg shadow-sm p-11">
                  <div className="pricing-card">
                    <div className="text-center mb-4">
                      <h4 className="text-2xl font-semibold mb-1">
                        {product.name}
                      </h4>

                      <h2 className="flex justify-center items-center text-6xl mb-1  font-bold">
                        <span className="-mt-[24px] inline-block mr-1 text-lg">R$</span>
                        {product.price}
                      </h2>
                    </div>
                    <ul>
                      <li className="flex items-center justify-between border-b-[1px] py-4 font-normal text-base">
                        Duração de 7 dias
                        <Image src={checkImg} alt="" width={16} height={14} />
                      </li>
                      <li className="flex items-center justify-between border-b-[1px] py-4 font-normal text-base">
                        Raio de Alcance de 1 km
                        <Image src={checkImg} alt="" width={16} height={14} />
                      </li>
                      <li className="flex items-center justify-between border-b-[1px] py-4 font-normal text-base">
                        Alcence mais de 10.000 pessoas
                        <Image src={checkImg} alt="" width={16} height={14} />
                      </li>
                      <li className="flex items-center justify-between border-b-[1px] py-4 font-normal text-base">
                        Cartaz QR Code
                        <Image src={checkImg} alt="" width={16} height={14} />
                      </li>
                      <li className="flex items-center justify-between border-b-[1px] py-4 font-normal text-base">
                        Publicação Instagram
                        <Image src={checkImg} alt="" width={16} height={14} />
                      </li>
                    </ul>
                    <div className="mt-4 flex items-center justify-center">
                      <Link href={`produto/${product.id}`} prefetch={false} className="text-2xl text-white font-bold rounded-3xl relative py-2 px-7 bg-gradient-to-r from-[#F86CA7] to-[#FF7F18]">
                        Iniciar Buscas
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <footer className="bg-[#fff5ed] bg-[url('../assets/footer-bg.png')] bg-cover bg-center bg-no-repeat">
        <div className="w-11/12 mx-auto">
          <div className="flex py-20 justify-content-center">
            <div className="w-3/12 flex justify-content-sm-start justify-content-start">
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
                      <a href="tel:+551900000000">contato@dominio.com.br</a>
                    </h6>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-6/12 flex items-center justify-center">
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

            <div className="w-3/12 flex justify-end">
              <div className="footer-items opening-time">
                <h3 className="text-3xl font-bold mb-5">Opening Hours</h3>
                <h6 className="mb-25">Mon - Fri: 9.00AM - 6.00PM</h6>
                <h6 className="mb-25">Saturday: 9.00AM - 6.00PM</h6>
                <h6>Sunday: Closed</h6>
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
            <div className="w-6/12">
              <div className="copyright-area">
                <p>© 2023 AlertaPet - Feito por Sweetspot Mídia</p>
              </div>
            </div>
            <div className="w-6/12 flex justify-end">
              <ul className="flex items-center list-none gap-7">
                <li><a href="#">Politica de Privacidade</a></li>
                <li><a href="#">Termos &amp; Condições</a></li>
                <li><a href="#">Planos</a></li>
                <li><a href="#">Suporte</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
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
      }).format(price.unit_amount / 100) : null
    }
  })

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2 // 2 hours,
  }
}
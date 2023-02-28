import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import bannerImg from '../assets/new-banner-img.png'
import pataRImg from '../assets/section-vec-r1.svg'
import pataLImg from '../assets/section-vec-l1.svg'
import storyLImg from '../assets/story-img1.png'

export default function Home() {
  return (
    <>
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

      <div className="h1-feature-area">
        <div className="w-full p-0">
          <div className="flex flex-wrap justify-center w-11/12 mx-auto items-center bg">
            <div className="col-lg-10 gap-4 flex items-center justify-content-lg-between justify-center flex-lg-nowrap flex-wrap ">
              <div className="freture-title">
                <h2 className="font-bold text-5xl">Como que funciona?</h2>
              </div>

              <div className="single-card">
                <div className="icon">
                  <Image src="assets/images/icon/badge1.svg" width={40} height={40} alt="" />
                </div>
                <div className="content">
                  <h4>Plano</h4>
                  <p>Selecione o plano que mais atende as necessidades.</p>
                </div>
              </div>

              <div className="single-card">
                <div className="icon">
                  <Image src="assets/images/icon/badge1.svg" width={40} height={40} alt="" />
                </div>
                <div className="content">
                  <h4>Informações</h4>
                  <p>Coletamos o máximo de informações sobre seu Pet e o local que ele desapareceu.</p>
                </div>
              </div>

              <div className="single-card">
                <div className="icon">
                  <Image src="assets/images/icon/badge1.svg" width={40} height={40} alt="" />
                </div>
                <div className="content">
                  <h4>Anuncios</h4>
                  <p>Iniciamos os anuncios notificando o desaparecimento o mais rapido possivel</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

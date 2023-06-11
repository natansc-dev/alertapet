import Image from 'next/image'
import Link from 'next/link'
import bannerImg from '../assets/new-banner-img.png'

export default function Hero() {
  return (
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
                  <h1 className="md:text-[2.5rem] text-4xl sm:text-6xl text-center font-extrabold mb-0 md:text-left">
                    <p className="mb-6">
                      Não desista de encontrar seu melhor amigo!
                    </p>
                    <p className="text-3xl">
                      Anuncie seu pet desaparecido e aumente as chances de
                      reencontrá-lo com nossos serviços.
                    </p>
                  </h1>
                </div>
              </div>
              <div className="w-full 2xl:w-6/12 flex items-center justify-center">
                <div className="mb-24 flex flex-col justify-center items-center min-w-[320px]">
                  <div className="hidden sm:inline ml-0 mt-0 z-40">
                    <Image className="w-full" src={bannerImg} alt="" />
                  </div>

                  <div className="flex justify-center">
                    <Link
                      className="text-2xl text-white font-bold rounded-3xl relative py-2 px-7 bg-gradient-to-r from-[#F86CA7] to-[#FF7F18] transition-all hover:rounded-md"
                      href="/#planos-e-precos"
                    >
                      Iniciar Buscas
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

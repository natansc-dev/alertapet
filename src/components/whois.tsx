import Link from 'next/link'
import Image from 'next/image'
import pataRImg from '../assets/section-vec-r1.svg'
import pataLImg from '../assets/section-vec-l1.svg'
import storyLImg from '../assets/story-img1.png'

export default function WhoIs() {
  return (
    <div id="como-que-funciona" className="mb-24">
      <div className="w-full px-3">
        <div className="flex flex-wrap justify-center w-11/12 mx-auto items-center">
          <div className="w-full sm:w-1/2">
            <div className="mb-5">
              <span className="flex relative items-center mb-2 text-xl font-medium">
                <Image src={pataLImg} alt="" width={24} height={36} />
                Aleta Pet
                <Image src={pataRImg} alt="" width={24} height={36} />
              </span>

              <h2 className="font-bold text-5xl">
                Por que a Alerta Pet é a melhor chance de encontrar seu pet?
              </h2>
            </div>
            <div>
              <p>
                A vantagem dos sistemas de anuncios em relação aos cartazes e
                postagens que os próprios donos distribuem é que{' '}
                <b>atingem um maior número de pessoas</b>. Além da cobertura de
                bairros próximos de casa e até mesmo no bairro de animais
                perdidos, os anuncios também{' '}
                <b>atingem todos os tipos de pessoas</b>. Não são apenas os
                amantes dos animais que se reúnem em determinados grupos nas
                redes sociais.{' '}
                <b>Os anuncios também podem cobrir cidades inteiras</b> se o seu
                animal de estimação desaparecido for longe demais.
              </p>
              <div className="py-5">
                <h3 className="text-2xl font-medium">
                  Encontre seu melhor amigo! Com o serviço de anunciar seu pet
                  desaparecido para que ele possa voltar para casa.
                </h3>
              </div>
              <div className="flex justify-center sm:justify-start">
                <Link
                  className="text-2xl text-white font-bold rounded-3xl relative py-2 px-7 bg-gradient-to-r from-[#F86CA7] to-[#FF7F18] transition-all hover:rounded-md"
                  href="#plans"
                >
                  Encontrar meu pet
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-1/2 flex sm:justify-end justify-center">
            <div className="mt-9 sm:mt-0">
              <Image
                className="img-fluid"
                src={storyLImg}
                alt=""
                width={516}
                height={679}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

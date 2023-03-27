import Image from "next/image"
import Link from "next/link"
import pataRImg from '../assets/section-vec-r1.svg'
import pataLImg from '../assets/section-vec-l1.svg'
import checkImg from '../assets/pricing-check.svg'
import xImg from '../assets/pricing-X.svg'

interface PlansProps {
  products: {
    id: string,
    name: string,
    price: string
  }[]
}
export default function Plans({ products }: PlansProps) {
  return (
    <div id="planos-e-precos" className="mb-20">
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

        <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-5">
          {products.map((product) => {
            return (

              <div key={product.id} className="border-2 border-[transparent] hover:shadow-lg hover:border-2 hover:border-[#F86CA7] w-11/12 sm:w-4/12 bg-white rounded-lg shadow-sm p-11">
                <div className="pricing-card">
                  <div className="text-center mb-4">
                    <h4 className="text-2xl font-semibold mb-1">
                      {product.name}
                    </h4>

                    <h2 className="flex justify-center items-center sm:text-6xl text-5xl mb-1 font-bold">
                      <span className="-mt-[24px] inline-block mr-1 text-lg">R$</span>
                      {product.price.replace('R$', '')}
                    </h2>
                  </div>

                  <ul>
                    <li className="flex items-center justify-between border-b-[1px] py-4 font-normal text-base">
                      {product.name === 'Pet Prata' && ("Duração de 7 dias")}
                      {product.name === 'Pet Bronze' && ("Duração de 14 dias")}
                      {product.name === 'Pet Ouro' && ("Duração de 30 dias")}
                    </li>
                    <li className="flex items-center justify-between border-b-[1px] py-4 font-normal text-base">
                      {product.name === 'Pet Prata' && ("Raio de Alcance de até 3 km")}
                      {product.name === 'Pet Bronze' && ("Raio de Alcance de até 5 km")}
                      {product.name === 'Pet Ouro' && ("Raio de Alcance de até 8 km")}
                      <Image src={checkImg} alt="" width={16} height={14} />
                    </li>
                    <li className="flex items-center justify-between border-b-[1px] py-4 font-normal text-base">
                      {product.name === 'Pet Prata' && ("Pode atingir 6.000 à 10.000 pessoas")}
                      {product.name === 'Pet Bronze' && ("Pode atingir 10.000 à 20.000 pessoas")}
                      {product.name === 'Pet Ouro' && ("Pode atingir 20.000 à 50.000 pessoas")}
                      <Image src={checkImg} alt="" width={16} height={14} />
                    </li>
                    <li className="flex items-center justify-between border-b-[1px] py-4 font-normal text-base">
                      Cartaz QR Code
                      <Image src={checkImg} alt="" width={16} height={14} />
                    </li>
                    <li className="flex items-center justify-between border-b-[1px] py-4 font-normal text-base">
                      Publicação Instagram
                      {product.name === 'Pet Prata' ? (
                        <Image src={xImg} alt="" width={16} height={14} />
                      ) : (
                        <Image src={checkImg} alt="" width={16} height={14} />
                      )}
                    </li>
                    <li className="flex items-center justify-between border-b-[1px] py-4 font-normal text-base">
                      Publicação nos Grupos da Cidade e Região
                      {product.name === 'Pet Prata' ? (
                        <Image src={xImg} alt="" width={16} height={14} />
                      ) : (
                        <Image src={checkImg} alt="" width={16} height={14} />
                      )}
                    </li>
                  </ul>
                  <div className="mt-4 flex items-center justify-center">
                    <Link href={`produto/${product.id}`} prefetch={false} className="text-xl sm:text-2xl text-white font-bold rounded-3xl relative py-2 px-7 bg-gradient-to-r from-[#F86CA7] to-[#FF7F18]">
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
  )
}
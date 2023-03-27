import Image from "next/image";
import pataRImg from '../assets/section-vec-r1.svg'
import pataLImg from '../assets/section-vec-l1.svg'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'


export default function Faq() {
  return (
    <div id="faq" className="mb-24">
      <div className="w-full px-3">
        <div className="flex justify-center w-11/12 mx-auto items-center gap-16">
          <div className="w-full">
            <div className="mb-5">
              <span className="flex relative items-center mb-2 text-xl font-medium">
                <Image src={pataLImg} alt="" width={24} height={36} />
                FAQ
                <Image src={pataRImg} alt="" width={24} height={36} />
              </span>

              <h2 className="font-bold text-5xl">Tire todas suas dúvidas</h2>
            </div>

            <div className="w-full sm:mt-0">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className={`${open ? 'border-b-[#F86CA7]' : ''
                        } flex w-full items-center justify-between px-4 py-2 text-2xl border-b-2 text-left font-semibold`}
                    >
                      <span>O que é Alerta Pet?</span>
                      <ChevronUpIcon
                        className={`${open ? 'rotate-180 transform' : ''
                          } h-[20px] w-[20px]`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-black">
                      O Alerta Pet é um serviço de difusão que ajuda encontrar os animais de estimação perdidos através de publicidade.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>

              <Disclosure as="div" className="my-4">
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className={`${open ? 'border-b-[#F86CA7]' : ''
                        } flex w-full items-center justify-between px-4 py-2 text-2xl border-b-2 text-left font-semibold`}
                    >
                      <span>Como funciona?</span>
                      <ChevronUpIcon
                        className={`${open ? 'rotate-180 transform' : ''
                          } h-[20px] w-[20px]`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-black">
                      Utilizamos a mesma publicidade que as grandes empresas usam para promover seus produtos e serviços nas redes sociais, criando um anúncio com fotos e informações do seu pet a serem publicadas em todas as plataformas. Estima-se que quase 80% dos usuários das redes sociais acessam as mídias digitais todos os dias, com isso, conseguimos atingir milhares de pessoas que estão próximas do local onde ele se perdeu, sendo uma forma mais ágil e rápida para encontrar seu pet.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>

              <Disclosure as="div" className="my-4">
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className={`${open ? 'border-b-[#F86CA7]' : ''
                        } flex w-full items-center justify-between px-4 py-2 text-2xl border-b-2 text-left gap-3 font-semibold`}
                    >
                      <span className="w-10/12">Qual é a diferença de uma publicação feita com o Alerta Pet e de outras publicações?</span>

                      <ChevronUpIcon
                        className={`${open ? 'rotate-180 transform' : ''
                          } h-[20px] w-[20px]`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-black">
                      As publicações feitas com o Alerta Pet são promovidas através de publicidade para que apareçam no feed das pessoas que moram próximas a um determinado local.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>

              <Disclosure as="div" className="my-4">
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className={`${open ? 'border-b-[#F86CA7]' : ''
                        } flex w-full items-center justify-between px-4 py-2 text-2xl border-b-2 text-left font-semibold`}
                    >
                      <span>Quais são as vantagens?</span>
                      <ChevronUpIcon
                        className={`${open ? 'rotate-180 transform' : ''
                          } h-[20px] w-[20px]`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-black">
                      Alcançar milhares de pessoas perto do local onde o pet sumiu, sem que elas participem de grupos ou sigam páginas sobre animais desaparecidos.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>

              <Disclosure as="div" className="my-4">
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className={`${open ? 'border-b-[#F86CA7]' : ''
                        } flex w-full items-center justify-between px-4 py-2 text-2xl border-b-2 text-left font-semibold`}
                    >
                      <span>Como eu sei que o anúncio foi realizado?</span>
                      <ChevronUpIcon
                        className={`${open ? 'rotate-180 transform' : ''
                          } h-[20px] w-[20px]`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-black">
                      Assim que o Plano for contratado, entraremos em contato para iniciar o processo de criação e publicação do post o mais rápido possível, a fim de não perder tempo e agilizar a procura do seu pet.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>

              <Disclosure as="div" className="my-4">
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className={`${open ? 'border-b-[#F86CA7]' : ''
                        } flex w-full items-center justify-between px-4 py-2 text-2xl border-b-2 text-left font-semibold`}
                    >
                      <span>O que acontece após pagar?</span>
                      <ChevronUpIcon
                        className={`${open ? 'rotate-180 transform' : ''
                          } h-[20px] w-[20px]`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-black">
                      Nós nos encarregaremos de fazer a publicação na fan page do Alerta Pet e de promove-la posteriormente na área onde seu ente querido desapareceu.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>

              <Disclosure as="div" className="my-4">
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className={`${open ? 'border-b-[#F86CA7]' : ''
                        } flex w-full items-center justify-between px-4 py-2 text-2xl border-b-2 text-left font-semibold`}
                    >
                      <span>Quem faz a publicação?</span>
                      <ChevronUpIcon
                        className={`${open ? 'rotate-180 transform' : ''
                          } h-[20px] w-[20px]`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-black">
                      Nós nos encarregaremos de fazer a publicação na fan page do Alerta Pet e de promove-la posteriormente o Facebook utiliza a informação dos GPS, das redes móveis e das redes WiFi para determinar a localização em que as pessoas utilizam o aplicativo.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>

              <Disclosure as="div" className="my-4">
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className={`${open ? 'border-b-[#F86CA7]' : ''
                        } flex w-full items-center justify-between px-4 py-2 text-2xl border-b-2 text-left font-semibold`}
                    >
                      <span>Vocês garantem que meu pet será encontrado?</span>
                      <ChevronUpIcon
                        className={`${open ? 'rotate-180 transform' : ''
                          } h-[20px] w-[20px]`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-black">
                      Não. No entanto, asseguramos que as chances de você encontra-lo vão aumentar consideravelmente porque serão milhares de pessoas procurando nos locais onde é mais provável que o seu ente querido esteja.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>

              <Disclosure as="div" className="my-4">
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className={`${open ? 'border-b-[#F86CA7]' : ''
                        } flex w-full items-center justify-between px-4 py-2 text-2xl border-b-2 text-left font-semibold`}
                    >
                      <span>Quanto tempo os planos ficam ativos?</span>
                      <ChevronUpIcon
                        className={`${open ? 'rotate-180 transform' : ''
                          } h-[20px] w-[20px]`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-black">
                      Cada plano tem descrito uma duração de dias onde estaremos emitindo os Alertas, porém não significa que após este período os Alertas serão excluídos, eles continuarão ativos em nossas plataformas.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          </div>

          <div className="w-full">
            <form action="#" method="POST" className="bg-white p-16 rounded-lg shadow-md mt-16 max-w-xl sm:mt-20">
              <div className="mx-auto max-w-2xl text-center mb-10">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Ainda tem alguma dúvida?</h2>
                <p className="mt-2 text-lg leading-8 text-gray-600">
                  Envie-nos uma mensagem, preencha o formulario abaixo.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-y-4 gap-x-6 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">
                    Nome
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

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-gray-900">
                    Celular
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      autoComplete="phone"
                      className="block w-full rounded-md border-[1px] py-2 px-3.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-[1px] py-2 px-3.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                    Mensagem
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
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="text-2xl text-white font-bold rounded-3xl relative py-2 px-7 bg-gradient-to-r from-[#F86CA7] to-[#FF7F18]"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
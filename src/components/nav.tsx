import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logoImg from '../assets/alertapetlogo.svg'


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Nav() {
  const navigation = [
    { name: 'Por que a Alerta Pet?', href: '/#por-que-a-alerta-pet', current: true },
    { name: 'Como que funciona?', href: '/#como-que-funciona', current: false },
    { name: 'Planos e Preços', href: '/#planos-e-precos', current: false },
    { name: 'Tire suas Dúvidas', href: '/#faq', current: false },
    { name: 'Contato', href: '/#contato', current: false },
  ]
  
  const [stickyClass, setStickyClass] = useState('static')

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar)

    return () => {
      window.removeEventListener('scroll', stickNavbar)
    }
  }, [])

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY
      windowHeight > 100 ? setStickyClass('bg-[#001D23] fixed top-0 left-0 z-50 shadow') : setStickyClass('static')
    }
  }

  return (
    <Disclosure as="nav" className={classNames(`bg-[#001D23] z-50 mx-auto w-full ${stickyClass}`)} >
      {({ open }) => (
        <>
          <div className="mx-auto w-11/12">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
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

              <div className="flex flex-1 items-center justify-between">
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
      )
      }
    </Disclosure >
  )
}
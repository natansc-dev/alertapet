import Image from 'next/image'
import whatsappImg from '../assets/whatsapp-svgrepo-com.svg'

export default function WhatsApp() {
  return (
    <a href="https://wa.me/5519982606755?text=Oi, tudo bem? Pode me ajudar a encontrar meu pet?" target="_blank" className="fixed right-6 bottom-10 z-50">
      <button className="bg-[#1ec725] p-5 rounded-full">
        <Image src={whatsappImg} alt="" height={26} width={26} />
      </button>
    </a>
  )
}
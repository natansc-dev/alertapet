import Image from 'next/image'
import whatsappImg from '../assets/whatsapp-svgrepo-com.svg'

export default function WhatsApp() {
  return (
    <div className="fixed right-6 bottom-10 z-50 ">
      <button className="bg-[#1ec725] p-5 rounded-full">
        <Image src={whatsappImg} alt="" height={26} width={26} />
      </button>
    </div>
  )
}
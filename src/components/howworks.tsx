import Image from "next/image";
import icon1ComoImg from '../assets/1.png'
import icon2ComoImg from '../assets/2.png'
import icon3ComoImg from '../assets/3.png'

export default function HowWorks() {
  return (
    <div id="por-que-a-alerta-pet" className="bg-[url('../assets/feature-bg.png')] py-32 bg-no-repeat bg-cover text-white">
      <div className="w-full p-0">
        <div className="flex flex-wrap justify-center w-11/12 mx-auto items-center">
          <div className="mb-7">
            <h2 className="font-bold text-5xl sm:text-center">Como que isso<br />funciona?</h2>
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
  )
}
import Image from "next/image";
import icon1NumberImg from '../assets/icon1.png'
import icon2NumberImg from '../assets/icon2.png'
import icon3NumberImg from '../assets/icon3.png'
import icon4NumberImg from '../assets/icon4.png'

export default function Statistics() {
  return (
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
  )
}
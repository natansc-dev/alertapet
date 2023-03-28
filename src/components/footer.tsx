import Image from "next/image";
import phoneImg from '../assets/phone-icon.svg'
import mailImg from '../assets/envelope.svg'
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#fff5ed] bg-[url('../assets/footer-bg.png')] bg-cover bg-center bg-no-repeat">
      <div className="w-11/12 mx-auto">
        <div className="flex flex-col sm:flex-row py-20 justify-content-center">
          <div className="w-11/12 sm:w-3/12 flex justify-content-sm-start justify-content-start">
            <div className="footer-items contact">
              <h3 className="text-3xl font-bold mb-5">Contato</h3>
              <div className="flex items-center mb-7">
                <div className="mr-3">
                  <Image src={phoneImg} alt="" width={23} height={23} />
                </div>

                <div>
                  <h6>
                    <a href="tel:+5519982606755">+55 (19) 9 8260-6755</a>
                  </h6>
                </div>
              </div>

              <div className="flex items-center mb-7">
                <div className="mr-3">
                  <Image src={mailImg} alt="" width={23} height={23} />
                </div>
                <div>
                  <h6>
                    <a href="mailto:contato@alertapet.com">contato@alertapet.com</a>
                  </h6>
                </div>
              </div>
            </div>
          </div>

          <div className="w-11/12 sm:w-6/12 flex items-center justify-center">
            <div>
              <h2 className="text-5xl text-center font-normal">
                Não <span className="font-bold">desista</span>
                de encontrar<br /> <span className="font-bold">seu melhor amigo</span>!
              </h2>

              <div className="flex justify-center pt-5">
                <Link className="text-2xl text-white font-bold rounded-3xl relative py-2 px-7 bg-gradient-to-r from-[#F86CA7] to-[#FF7F18]" href="/#planos-e-precos">
                  Iniciar Buscas
                </Link>
              </div>
            </div>
          </div>

          <div className="w-11/12 sm:w-3/12 flex justify-start sm:justify-end">
            <div className="footer-items opening-time">
              <h3 className="text-3xl font-bold mb-5">Atalhos</h3>
              <div className="flex justify-end">
                <ul className="items-center list-none gap-7">
                  <li><a href="#">Politica de Privacidade</a></li>
                  <li><a href="#">Termos &amp; Condições</a></li>
                </ul>
              </div>
              <h6 className="font-semibold mt-4">Redes Sociais:</h6>
              <ul className="flex items-center gap-1">
                <li>
                  <a href="https://www.facebook.com/">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">    <path d="M11.666,2.005C6.62,2.17,2.374,6.251,2.025,11.288c-0.369,5.329,3.442,9.832,8.481,10.589V14.65H8.892 c-0.726,0-1.314-0.588-1.314-1.314v0c0-0.726,0.588-1.314,1.314-1.314h1.613v-1.749c0-2.896,1.411-4.167,3.818-4.167 c0.357,0,0.662,0.008,0.921,0.021c0.636,0.031,1.129,0.561,1.129,1.198v0c0,0.663-0.537,1.2-1.2,1.2h-0.442 c-1.022,0-1.379,0.969-1.379,2.061v1.437h1.87c0.591,0,1.043,0.527,0.953,1.111l-0.108,0.701c-0.073,0.47-0.477,0.817-0.953,0.817 h-1.762v7.247C18.235,21.236,22,17.062,22,12C22,6.366,17.341,1.821,11.666,2.005z" /></svg>
                  </a>
                </li>

                <li>
                  <a href="https://www.instagram.com/">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">    <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z" /></svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex border-t-[1px] py-5 items-center justify-center">
          <div className="w-11/12">
            <div className="text-center">
              <p className="flex justify-center items-center">
                © 2023 Feito com
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mx-1 w-4 h-4 text-red-600">
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                </svg>
                por <a href="https://www.instagram.com/sweetspotmidia/" className="font-semibold">&nbsp;Sweetspot Mídia</a></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
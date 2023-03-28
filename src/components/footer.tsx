import Image from "next/image";
import phoneImg from '../assets/phone-icon.svg'
import mailImg from '../assets/envelope.svg'

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
                    <a href="tel:+551900000000">+55 (19) 9 8260-6755</a>
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
                <a className="text-2xl text-white font-bold rounded-3xl relative py-2 px-7 bg-gradient-to-r from-[#F86CA7] to-[#FF7F18]" href="contact.html">Iniciar Buscas</a>
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
                  <li><a href="#">Planos</a></li>
                  <li><a href="#">Suporte</a></li>
                </ul>
              </div>
              <h6>Redes Sociais:</h6>
              <ul className="social-icons">
                <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook"></i></a></li>
                <li><a href="https://twitter.com/"><i className="bx bxl-twitter"></i></a></li>
                <li><a href="https://www.pinterest.com/"><i className="bx bxl-pinterest-alt"></i></a></li>
                <li><a href="https://www.instagram.com/"><i className="bx bxl-instagram"></i></a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex border-t-[1px] py-5 items-center justify-center">
          <div className="w-11/12">
            <div className="text-center">
              <p>© 2023 AlertaPet - Feito por Sweetspot Mídia</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
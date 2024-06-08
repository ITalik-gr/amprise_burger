import Image from "next/image"
import Logo from '@images/logo.png'


function Nav() {
  return (
    <nav className='nav pt-[27px]'>
      <div className="container">
        <div className="nav-wrap flex justify-between items-center">
          {/* left block (logo, item list) */}
          <div className="flex items-center">
            <a href="#" className="logo bg-[#F0F7FA] flex justify-center items-center rounded-full size-20 mr-[76px]">
              <Image width={44} height={44} src={Logo} alt="Logo" />
            </a>

            <ul className="last:mr-0 flex">
              <li className="mr-[59px]">
                <a className="text-base_black text-base nav-active" href="#">
                  Discover
                </a>
              </li>
              <li className="mr-[59px]">
                <a className="text-base_black text-base font-normal" href="#">
                  Discover
                </a>
              </li>
            </ul>
          </div>

          {/* right block (btn, phone) */}
          <div className="flex items-center">
            <a href="#" className="text-base_red font-medium px-6 py-2 rounded-[20px] bg-[#FFEDED] mr-[60px]">
              Call Me back
            </a>
            <a href="tell:8800378722" className="text-base_black font-medium">8 800 437-87-22</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav
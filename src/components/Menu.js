import React, { useState } from 'react'
import top from '../assets/top.png';



export default function Menu() {

  const [isOpen, setIsopen] = useState(false);

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  }


  return (


    <header>

      <div className=''>

        <div className="lg:flex hidden items-center justify-between font-jakarta h-28">
          <a href="/" className="">
            <img src={top} alt="logo" className='w-20' />
          </a>

          <nav>
            <ul className="text-md flex justify-center gap-8 pt-4 items-center text-white-100">
              <li><a href="/" className="">Home</a></li>
              <li><a href="#about" className="text-black-25 hover:text-white-100">Features</a></li>
              <li><a href="#tokenomics" className="text-black-25 hover:text-white-100">Tokenomics</a></li>
              <li><a href="#roadmap" className="text-black-25 hover:text-white-100">Roadmap</a></li>
              <li><a href="#join" className='text-black-25 hover:text-white-100'>Join us</a></li>
            </ul>
          </nav>

          <a href="/whitepaper.pdf" target='_blank'>
            <button className="text-white-100 border-gradient rounded-lg btn-custom py-3 px-5 font-semibold">
              Whitepaper
            </button>
          </a>
        </div>

        <div className="text-3xl text-center pb-8 lg:hidden flex justify-between items-center py-5" onClick={ToggleSidebar} >

          <a href="/" className="">
            <img src={top} alt="logo" className='w-16' />
          </a>

          <i className="fa fa-bars"></i>
        </div>

        <div className={`sidebar ${isOpen === true ? 'active' : ''}`}>
          <div className='p-5'>
            <div className="flex items-center justify-between" onClick={ToggleSidebar}>
              <a href="/" className="">
                <img src={top} alt="logo" className='w-12' />
              </a>
              <i className="fa fa-times text-2xl"></i>
            </div>

            <div className="sd-body mt-20">
              <ul>
                <a onClick={ToggleSidebar} href="/"><li className='border-gradient p-3 font-orbitron'>Home</li></a>
                <a onClick={ToggleSidebar} href="#about"><li className='border-gradient p-3 font-orbitron'>Features</li></a>
                <a onClick={ToggleSidebar} href="#tokenomics"><li className='border-gradient p-3 font-orbitron'>Tokenomics</li></a>
                <a onClick={ToggleSidebar} href="#roadmap"><li className='border-gradient p-3 font-orbitron'>Roadmap</li></a>
                <a onClick={ToggleSidebar} href="#join"><li className='border-gradient p-3 font-orbitron'>Join us</li></a>
                <a onClick={ToggleSidebar} href={require("../assets/whitepaper.pdf")} download="Whitepaper"><li className='border-gradient p-3 font-orbitron'>Whitepaper</li></a>
              </ul>
            </div>

          </div>
        </div>
      </div>

      <div className={`sidebar-overlay ${isOpen === true ? 'active' : ''}`} onClick={ToggleSidebar}></div>

    </header >
  )
}

import React from 'react'
import twitter from '../assets/twitter.png';
import telegram from '../assets/telegram.png';



export default function Footer() {
  return (
    <div className="relative z-20">

      <footer className='text-white-100 lg:px-20 px-5 lg:pt-12 py-6 md:text-base text-sm'>
        <div>
          <h3 data-aos="fade-up" id='join' className='md:text-5xl text-2xl font-semibold text-white-100 font-orbitron text-center'>
            Join Us and Get to Witness a<br></br> New Revolution
          </h3>

          <div className="flex justify-center items-center gap-6 lg:py-24 py-8">
            <a href='https://x.com/sage_cryp'>
              <img src={twitter} alt='twitter' className='md:w-20 w-16'></img>
            </a>
            <a href='http://t.me/LucidumCoin'>
              <img src={telegram} alt='telegram' className='md:w-20 w-16'></img>
            </a>
          </div>

          <div className='md:flex justify-between items-center md:text-left text-center lg:space-y-0 space-y-6'>

            <ul className='flex items-center md:justify-start justify-center gap-x-6'>
              <li><a href='/'>Privacy policy</a></li>
              <li><a href='/'>Sitemap</a></li>
              <li><a href='/'>Terms of Use</a></li>
            </ul>

            <p className=''>LucidumCoin © {new Date().getFullYear()}, All Rights Reserved</p>
          </div>

        </div>
      </footer>
    </div>

  )
}

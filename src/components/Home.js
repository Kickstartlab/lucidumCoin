import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import Menu from './Menu'
import top from '../assets/top.png';
import account from '../assets/account.png';
import transparent from '../assets/transparent.png';
import box from '../assets/box.png';
import box1 from '../assets/box1.png';
import box2 from '../assets/box2.png';
import copy from '../assets/copy.png';

import Aos from 'aos';
import 'aos/dist/aos.css';
import StarField from './StarField';


export default function Home() {

    useEffect(() => {
        Aos.init({
            duration: 600,
            once: false,
            easing: 'ease',
            delay: 350
        });
        Aos.refresh();
    }, [])

    const [copySuccess, setCopySuccess] = useState('');

    const copyToClipBoard = async copyMe => {
        try {
            await navigator.clipboard.writeText(copyMe);
            setCopySuccess('Copied!');
        } catch (err) {
            setCopySuccess('Failed to copy!');
        }
    };

    return (
        <div className="bg-black-100 font-jakarta bg-full overflow-hidden text-white-100">

            <StarField />

            <div className='relative z-10'>

                <section className="lg:px-20 px-5">
                    <div className='container mx-auto'>

                        <Menu />
                        <div className="flex flex-col justify-center items-center mx-auto gap-y-8 py-12 text-center lg:w-9/12">

                            <img data-aos="zoom-in" src={top} alt="Logo" className='flex mx-auto' />

                            <h1 data-aos='fade-up' className='md:text-5xl text-2xl font-semibold text-gradient font-orbitron uppercase text-white-100'>
                                改成“Learn about the project through  our detailed whitepaper”
                            </h1>

                            <p data-aos='fade-in' className='text-black-25'>
                                Jorem ipsum dolor sit amet, consectetur adipiscing elit. Jorem<br></br> ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>

                            <div data-aos='zoom-in' className="flex items-center justify-center md:gap-8 gap-5 mx-auto">
                                <a href="https://www.dextools.io/app/cn/bnb/pair-explorer/0x8562faea3faa2fb9fd5a9281d3cb4f27749a73aa?t=1727000799589">
                                    <button className="text-white-100 border-gradient rounded-lg btn-custom py-3 px-5 font-semibold">
                                        Chart
                                    </button>
                                </a>

                                <a href="https://pancakeswap.finance/swap?outputCurrency=0xE054017a2F0ECFa294b08a74AF319bce0b985A39">
                                    <button className="text-white-100 border-gradient rounded-lg btn-custom py-3 px-5 font-semibold">
                                        Buy Now
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* about us section */}

                <section id='about' className="lg:px-20 px-5 ">
                    <div className='container mx-auto'>

                        <div className="lg:flex block justify-center lg:spacce-y-0 space-y-8 gap-x-12 lg:pt-20 py-6">

                            <div data-aos="fade-right" data-aos-delay="450" className="lg:w-5/12 w-full space-y-2">
                                <h3 className='font-orbitron md:text-4xl text-2xl font-bold'>“Transparent Contract</h3>
                                <p className=' leading-relaxed pb-12'>
                                    Investing with Confidence, Trust Enhanced  Introducing the groundbreaking Transparent Contract model by LUCiC, where every step is crystal clear.  No specialized knowledge is required.  What Defines a Transparent Contract Project?
                                </p>


                                <a href="/">
                                    <button className="text-white-100 border-gradient rounded-lg btn-custom py-3 px-5 font-semibold flex gap-x-4 items-center">
                                        Read more

                                        <img src={box} alt='box' className='w-6'></img>
                                    </button>
                                </a>
                            </div>

                            <div data-aos="zoom-in" className="lg:w-2/12">
                                <img src={transparent} alt="Logo" className='lg:-translate-y-8 flex mx-auto' />
                            </div>

                            <div data-aos="fade-left" data-aos-delay="450" className="lg:w-5/12 w-full  space-y-2">
                                <h3 className='font-orbitron md:text-4xl text-2xl font-bold'> “Transparency</h3>
                                <p className='text-gradient leading-relaxed'>
                                    The project's value growth path is clearly visible with well-defined, achievable milestone targets. Expectation of growth is both articulated and attainable.
                                </p>
                            </div>

                        </div>

                        <div className="lg:flex block justify-between items-center gap-x-24 lg:pb-20 py-6">

                            <div data-aos="fade-left" className="lg:w-1/2 w-full space-y-2">

                                <h3 className='font-orbitron md:text-4xl text-2xl font-bold'>“Contractual Accountability:</h3>
                                <p className=' leading-relaxed pb-12 text-gradient'>

                                    The project’s progress is fully disclosed, with transparent financial flows. Investors can monitor developments at any time. The current market landscape often lacks professional disclosure from project initiators. We vet dedicated professionals and enthusiasts to act as independent third part
                                </p>


                                <a href="/">
                                    <button className="text-white-100 border-gradient rounded-lg btn-custom py-3 px-5 font-semibold flex gap-x-4 items-center">
                                        Read more

                                        <img src={box} alt='box' className='w-6'></img>
                                    </button>
                                </a>
                            </div>

                            <div data-aos="zoom-in" className="lg:w-1/2">
                                <img src={account} alt="Logo" className='md:flex mx-auto' />
                            </div>

                        </div>
                    </div>
                </section>

                {/* text-section */}

                <section id='about' className="lg:px-20 px-5 ">
                    <div className='container mx-auto'>

                        <div className="lg:pb-20 py-6">

                            <div className="text-center space-y-6">

                                <p data-aos="fade-in" className='leading-relaxed text-gradient'>
                                    Korem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                                <h3 data-aos="fade-up" className='font-orbitron md:text-5xl text-2xl uppercase font-bold text-gradient'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                                </h3>

                                <div className='flex justify-center items-center gap-6'>
                                    <a data-aos="fade-right" href="/">
                                        <button className="text-white-100 border-gradient rounded-lg btn-custom py-3 sm:px-5 px-3 font-semibold flex sm:gap-x-4 gap-2 items-center sm:text-base text-xs">
                                            Explore More
                                            <img src={box1} alt='box' className='w-8'></img>
                                        </button>
                                    </a>

                                    <a data-aos="fade-left" href="/">
                                        <button className="text-white-100 border-gradient rounded-lg btn-custom py-3 sm:px-5 px-3 font-semibold flex sm:gap-x-4 gap-2 items-center sm:text-base text-xs">
                                            Learn More
                                            <img src={box2} alt='box' className='w-8'></img>
                                        </button>
                                    </a>
                                </div>

                            </div>

                        </div>
                    </div>
                </section>


                {/* tokenomics section */}

                <section id='tokenomics' className="lg:px-20 px-5 lg:pb-20 py-6 ">
                    <div className='container mx-auto'>

                        <h3 className='md:text-5xl text-2xl font-semibold text-white-100 font-orbitron text-center'>
                            TOKENOMICS
                        </h3>

                        <div data-aos="fade-in" className="lg:w-11/12 w-full lg:flex items-start justify-between gap-8 mx-auto border-gradient md:p-12 p-6 lg:mt-16 mt-8 lg:space-y-0 space-y-6">
                            <div data-aos="fade-right" className='lg:w-1/2 font-orbitron md:text-2xl text-xl space-y-6'>
                                <p>NAME: LucidumCoin</p>
                                <p>SYMBOL: $LucidumCoin</p>
                                <p>TOTAL SUPPLY: 210,000,000</p>
                            </div>

                            <div data-aos="fade-left" className='lg:w-1/2 font-orbitron md:text-2xl text-xl space-y-6'>
                                <p>TAX: Buy 4.5% | Sell 4.5%</p>
                                <p>LP Dividend: 1.5%</p>
                                <p>Marketing: 2%</p>
                                <p>BURN 1% 🔥</p>
                            </div>
                        </div>

                        <div>
                            <button onClick={() => copyToClipBoard('0xe054017a2f0ecfa294b08a74af319bce0b985a39  ')} className="text-white-100 border-gradient rounded-lg btn-custom py-3 px-5 font-semibold flex gap-x-4 items-center mx-auto mt-8">
                                Click To Copy Contract
                                <img src={copy} alt='box' className='w-8'></img>
                            </button>
                            <span className="text-white-100 absolute left-1/2 text-center text-sm mt-3 -ml-6">
                                {copySuccess}
                            </span>
                        </div>
                    </div>
                </section>

                {/* roadmap section */}
                <section id='roadmap' className="lg:px-20 px-5 lg:py-20 py-6 ">
                    <div className='container mx-auto'>

                        <h3 className='md:text-5xl text-2xl font-semibold text-white-100 font-orbitron text-center lg:mb-28 mb-8'>
                            ROADMAP
                        </h3>

                        <div className='lg:block hidden'>

                            <div className='absolute w-11/12 flex mx-auto left-0 right-0 h-5 bg-blue-100 opacity-40'>
                            </div>

                            <div className=' flex justify-between items-start gap-x-5 -translate-y-14'>

                                <div data-aos="fade-up" className='font-orbitron flex flex-col items-center justify-center space-y-5'>
                                    <p className='text-sm font-semibold'>100 BNB</p>

                                    <div className='flex flex-col items-center justify-center'>
                                        <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="27.1799" cy="27.2007" r="26.6137" transform="rotate(-90 27.1799 27.2007)" stroke="#4889D6" strokeWidth="1.1325" />
                                            <rect x="15.3324" y="39.0477" width="22.3015" height="22.3015" rx="11.1507" transform="rotate(-90 15.3324 39.0477)" fill="#489AD6" />
                                        </svg>

                                        <svg className='-mt-5 -ml-0.5' width="9" height="103" viewBox="0 0 9 103" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line x1="4.5" y1="1.96701e-07" x2="4.5" y2="103" stroke="#489AD6" strokeWidth="9" />
                                        </svg>
                                    </div>

                                    <p className='text-3xl font-semibold'>CK Audit</p>
                                </div>

                                {/* long */}
                                <div data-aos="fade-up" className='font-orbitron flex flex-col items-center justify-center space-y-5'>
                                    <p className='text-sm font-semibold'>300 BNB</p>

                                    <div className='flex flex-col items-center justify-center'>
                                        <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="27.1799" cy="27.2007" r="26.6137" transform="rotate(-90 27.1799 27.2007)" stroke="#4889D6" strokeWidth="1.1325" />
                                            <rect x="15.3324" y="39.0477" width="22.3015" height="22.3015" rx="11.1507" transform="rotate(-90 15.3324 39.0477)" fill="#489AD6" />
                                        </svg>
                                        <svg className='-mt-6' width="9" height="288" viewBox="0 0 9 288" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line x1="4.5" y1="1.96701e-07" x2="4.49999" y2="288" stroke="#489AD6" strokeWidth="9" />
                                        </svg>
                                    </div>

                                    <p className='text-xl font-semibold uppercase'>integrate with popular web3 wallets such as OKE, Binance and Gate.
                                    </p>
                                </div>

                                <div data-aos="fade-up" className='font-orbitron flex flex-col items-center justify-center space-y-5'>
                                    <p className='text-sm font-semibold'>500 BNB</p>

                                    <div className='flex flex-col items-center justify-center'>
                                        <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="27.1799" cy="27.2007" r="26.6137" transform="rotate(-90 27.1799 27.2007)" stroke="#4889D6" strokeWidth="1.1325" />
                                            <rect x="15.3324" y="39.0477" width="22.3015" height="22.3015" rx="11.1507" transform="rotate(-90 15.3324 39.0477)" fill="#489AD6" />
                                        </svg>
                                        <svg className='-mt-5 -ml-0.5' width="9" height="103" viewBox="0 0 9 103" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line x1="4.5" y1="1.96701e-07" x2="4.5" y2="103" stroke="#489AD6" strokeWidth="9" />
                                        </svg>
                                    </div>

                                    <p className='text-xl font-semibold uppercase'>
                                        50 KOL partner promotion and advertise on online NASDAQ ticker screen
                                    </p>
                                </div>

                                {/* long */}
                                <div data-aos="fade-up" className='font-orbitron flex flex-col items-center justify-center space-y-5'>
                                    <p className='text-sm font-semibold'>2000 BNB</p>

                                    <div className='flex flex-col items-center justify-center'>
                                        <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="27.1799" cy="27.2007" r="26.6137" transform="rotate(-90 27.1799 27.2007)" stroke="#4889D6" strokeWidth="1.1325" />
                                            <rect x="15.3324" y="39.0477" width="22.3015" height="22.3015" rx="11.1507" transform="rotate(-90 15.3324 39.0477)" fill="#489AD6" />
                                        </svg>
                                        <svg className='-mt-6' width="9" height="288" viewBox="0 0 9 288" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line x1="4.5" y1="1.96701e-07" x2="4.49999" y2="288" stroke="#489AD6" strokeWidth="9" />
                                        </svg>
                                    </div>

                                    <p className='text-xl uppercase font-semibold'>
                                        list on two or three-third tier exchanges
                                    </p>
                                </div>

                                <div data-aos="fade-up" className='font-orbitron flex flex-col items-center justify-center space-y-5'>
                                    <p className='text-sm font-semibold'>3000 BNB</p>

                                    <div className='flex flex-col items-center justify-center'>
                                        <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="27.1799" cy="27.2007" r="26.6137" transform="rotate(-90 27.1799 27.2007)" stroke="#4889D6" strokeWidth="1.1325" />
                                            <rect x="15.3324" y="39.0477" width="22.3015" height="22.3015" rx="11.1507" transform="rotate(-90 15.3324 39.0477)" fill="#489AD6" />
                                        </svg>
                                        <svg className='-mt-5 -ml-0.5' width="9" height="103" viewBox="0 0 9 103" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line x1="4.5" y1="1.96701e-07" x2="4.5" y2="103" stroke="#489AD6" strokeWidth="9" />
                                        </svg>
                                    </div>

                                    <p className='text-xl font-semibold uppercase'>
                                        list on two second-tier exchanges
                                    </p>
                                </div>

                                {/* long */}
                                <div data-aos="fade-up" className='font-orbitron flex flex-col items-center justify-center space-y-5'>
                                    <p className='text-sm font-semibold'>5000 BNB</p>

                                    <div className='flex flex-col items-center justify-center'>
                                        <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="27.1799" cy="27.2007" r="26.6137" transform="rotate(-90 27.1799 27.2007)" stroke="#4889D6" strokeWidth="1.1325" />
                                            <rect x="15.3324" y="39.0477" width="22.3015" height="22.3015" rx="11.1507" transform="rotate(-90 15.3324 39.0477)" fill="#489AD6" />
                                        </svg>
                                        <svg className='-mt-6' width="9" height="288" viewBox="0 0 9 288" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line x1="4.5" y1="1.96701e-07" x2="4.49999" y2="288" stroke="#489AD6" strokeWidth="9" />
                                        </svg>
                                    </div>

                                    <p className='text-xl uppercase font-semibold'>
                                        Issue dividend-yielding NFTs to Liquidity Providers
                                    </p>
                                </div>

                                <div data-aos="fade-up" className='font-orbitron flex flex-col items-center justify-center space-y-5'>
                                    <p className='text-sm font-semibold'>7000 BNB</p>

                                    <div className='flex flex-col items-center justify-center'>
                                        <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="27.1799" cy="27.2007" r="26.6137" transform="rotate(-90 27.1799 27.2007)" stroke="#4889D6" strokeWidth="1.1325" />
                                            <rect x="15.3324" y="39.0477" width="22.3015" height="22.3015" rx="11.1507" transform="rotate(-90 15.3324 39.0477)" fill="#489AD6" />
                                        </svg>
                                        <svg className='-mt-5 -ml-0.5' width="9" height="103" viewBox="0 0 9 103" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line x1="4.5" y1="1.96701e-07" x2="4.5" y2="103" stroke="#489AD6" strokeWidth="9" />
                                        </svg>
                                    </div>

                                    <p className='text-xl uppercase font-semibold'>
                                        Sell remaining 3,333 NFTs to generate funds for market stabilization
                                    </p>
                                </div>

                                {/* long */}

                                <div data-aos="fade-up" className='font-orbitron flex flex-col items-center justify-center space-y-5'>
                                    <p className='text-sm font-semibold'>10000 BNB</p>

                                    <div className='flex flex-col items-center justify-center'>
                                        <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="27.1799" cy="27.2007" r="26.6137" transform="rotate(-90 27.1799 27.2007)" stroke="#4889D6" strokeWidth="1.1325" />
                                            <rect x="15.3324" y="39.0477" width="22.3015" height="22.3015" rx="11.1507" transform="rotate(-90 15.3324 39.0477)" fill="#489AD6" />
                                        </svg>

                                        <svg className='-mt-6' width="9" height="341" viewBox="0 0 9 341" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line x1="4.5" y1="1.96701e-07" x2="4.49999" y2="341" stroke="#489AD6" strokeWidth="9" />
                                        </svg>
                                    </div>

                                    <p className='text-xl uppercase font-semibold'>
                                        Launch on Binance
                                    </p>
                                </div>

                            </div>
                        </div>

                        <div className='lg:hidden grid grid-cols-2 gap-2'>

                            <div data-aos="flip-right" className='bg-black-50 p-3 rounded-xl'>
                                <div className='font-orbitron flex flex-col items-center justify-center space-y-5'>
                                    <p className='text-lg font-semibold'>100 BNB</p>

                                    <div className='flex flex-col items-center justify-center'>
                                        <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="27.1799" cy="27.2007" r="26.6137" transform="rotate(-90 27.1799 27.2007)" stroke="#4889D6" strokeWidth="1.1325" />
                                            <rect x="15.3324" y="39.0477" width="22.3015" height="22.3015" rx="11.1507" transform="rotate(-90 15.3324 39.0477)" fill="#489AD6" />
                                        </svg>

                                        <svg className='-mt-5 -ml-0.5' width="9" height="103" viewBox="0 0 9 103" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line x1="4.5" y1="1.96701e-07" x2="4.5" y2="103" stroke="#489AD6" strokeWidth="9" />
                                        </svg>
                                    </div>

                                    <p className='text-sm text-center'>
                                        CK Audit
                                    </p>
                                </div>
                            </div>

                            <div data-aos="flip-left" className='bg-black-50 p-3 rounded-xl'>
                                <div className='font-orbitron flex flex-col items-center justify-center space-y-5'>
                                    <p className='text-lg font-semibold'>300 BNB</p>

                                    <div className='flex flex-col items-center justify-center'>
                                        <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="27.1799" cy="27.2007" r="26.6137" transform="rotate(-90 27.1799 27.2007)" stroke="#4889D6" strokeWidth="1.1325" />
                                            <rect x="15.3324" y="39.0477" width="22.3015" height="22.3015" rx="11.1507" transform="rotate(-90 15.3324 39.0477)" fill="#489AD6" />
                                        </svg>
                                        <svg className='-mt-5 -ml-0.5' width="9" height="103" viewBox="0 0 9 103" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line x1="4.5" y1="1.96701e-07" x2="4.5" y2="103" stroke="#489AD6" strokeWidth="9" />
                                        </svg>
                                    </div>

                                    <p className='text-sm text-center uppercase'>
                                        ntegrate with popular web3 wallets such as OKE, Binance and Gate.
                                    </p>
                                </div>
                            </div>

                            <div data-aos="flip-right" className='bg-black-50 p-3 rounded-xl'>
                                <div className='font-orbitron flex flex-col items-center justify-center space-y-5'>
                                    <p className='text-lg font-semibold'>500 BNB</p>

                                    <div className='flex flex-col items-center justify-center'>
                                        <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="27.1799" cy="27.2007" r="26.6137" transform="rotate(-90 27.1799 27.2007)" stroke="#4889D6" strokeWidth="1.1325" />
                                            <rect x="15.3324" y="39.0477" width="22.3015" height="22.3015" rx="11.1507" transform="rotate(-90 15.3324 39.0477)" fill="#489AD6" />
                                        </svg>

                                        <svg className='-mt-5 -ml-0.5' width="9" height="103" viewBox="0 0 9 103" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line x1="4.5" y1="1.96701e-07" x2="4.5" y2="103" stroke="#489AD6" strokeWidth="9" />
                                        </svg>
                                    </div>

                                    <p className='text-sm text-center'>
                                        50 KOL partner promotion and advertise on online NASDAQ ticker screen
                                    </p>
                                </div>
                            </div>

                            <div data-aos="flip-left" className='bg-black-50 p-3 rounded-xl'>
                                <div className='font-orbitron flex flex-col items-center justify-center space-y-5'>
                                    <p className='text-lg font-semibold'>2000 BNB</p>

                                    <div className='flex flex-col items-center justify-center'>
                                        <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="27.1799" cy="27.2007" r="26.6137" transform="rotate(-90 27.1799 27.2007)" stroke="#4889D6" strokeWidth="1.1325" />
                                            <rect x="15.3324" y="39.0477" width="22.3015" height="22.3015" rx="11.1507" transform="rotate(-90 15.3324 39.0477)" fill="#489AD6" />
                                        </svg>

                                        <svg className='-mt-5 -ml-0.5' width="9" height="103" viewBox="0 0 9 103" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line x1="4.5" y1="1.96701e-07" x2="4.5" y2="103" stroke="#489AD6" strokeWidth="9" />
                                        </svg>
                                    </div>

                                    <p className='text-sm text-center'>
                                        list on two or three-third tier exchanges
                                    </p>
                                </div>
                            </div>

                            <div data-aos="flip-right" className='bg-black-50 p-3 rounded-xl'>
                                <div className='font-orbitron flex flex-col items-center justify-center space-y-5'>
                                    <p className='text-lg font-semibold'>3000 BNB</p>

                                    <div className='flex flex-col items-center justify-center'>
                                        <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="27.1799" cy="27.2007" r="26.6137" transform="rotate(-90 27.1799 27.2007)" stroke="#4889D6" strokeWidth="1.1325" />
                                            <rect x="15.3324" y="39.0477" width="22.3015" height="22.3015" rx="11.1507" transform="rotate(-90 15.3324 39.0477)" fill="#489AD6" />
                                        </svg>

                                        <svg className='-mt-5 -ml-0.5' width="9" height="103" viewBox="0 0 9 103" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line x1="4.5" y1="1.96701e-07" x2="4.5" y2="103" stroke="#489AD6" strokeWidth="9" />
                                        </svg>
                                    </div>

                                    <p className='text-sm text-center'>
                                        list on two second-tier exchanges
                                    </p>
                                </div>
                            </div>

                            <div data-aos="flip-left" className='bg-black-50 p-3 rounded-xl'>
                                <div className='font-orbitron flex flex-col items-center justify-center space-y-5'>
                                    <p className='text-lg font-semibold'>5000 BNB</p>

                                    <div className='flex flex-col items-center justify-center'>
                                        <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="27.1799" cy="27.2007" r="26.6137" transform="rotate(-90 27.1799 27.2007)" stroke="#4889D6" strokeWidth="1.1325" />
                                            <rect x="15.3324" y="39.0477" width="22.3015" height="22.3015" rx="11.1507" transform="rotate(-90 15.3324 39.0477)" fill="#489AD6" />
                                        </svg>

                                        <svg className='-mt-5 -ml-0.5' width="9" height="103" viewBox="0 0 9 103" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line x1="4.5" y1="1.96701e-07" x2="4.5" y2="103" stroke="#489AD6" strokeWidth="9" />
                                        </svg>
                                    </div>

                                    <p className='text-sm text-center'>
                                        Issue dividend-yielding NFTs to Liquidity Providers
                                    </p>
                                </div>
                            </div>

                            <div data-aos="flip-right" className='bg-black-50 p-3 rounded-xl'>
                                <div className='font-orbitron flex flex-col items-center justify-center space-y-5'>
                                    <p className='text-lg font-semibold'>7000 BNB</p>

                                    <div className='flex flex-col items-center justify-center'>
                                        <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="27.1799" cy="27.2007" r="26.6137" transform="rotate(-90 27.1799 27.2007)" stroke="#4889D6" strokeWidth="1.1325" />
                                            <rect x="15.3324" y="39.0477" width="22.3015" height="22.3015" rx="11.1507" transform="rotate(-90 15.3324 39.0477)" fill="#489AD6" />
                                        </svg>

                                        <svg className='-mt-5 -ml-0.5' width="9" height="103" viewBox="0 0 9 103" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line x1="4.5" y1="1.96701e-07" x2="4.5" y2="103" stroke="#489AD6" strokeWidth="9" />
                                        </svg>
                                    </div>

                                    <p className='text-sm text-center'>
                                        Sell remaining 3,333 NFTs to generate funds for market stabilization
                                    </p>
                                </div>
                            </div>

                            <div data-aos="flip-left" className='bg-black-50 p-3 rounded-xl'>
                                <div className='font-orbitron flex flex-col items-center justify-center space-y-5'>
                                    <p className='text-lg font-semibold'>10000</p>

                                    <div className='flex flex-col items-center justify-center'>
                                        <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="27.1799" cy="27.2007" r="26.6137" transform="rotate(-90 27.1799 27.2007)" stroke="#4889D6" strokeWidth="1.1325" />
                                            <rect x="15.3324" y="39.0477" width="22.3015" height="22.3015" rx="11.1507" transform="rotate(-90 15.3324 39.0477)" fill="#489AD6" />
                                        </svg>

                                        <svg className='-mt-5 -ml-0.5' width="9" height="103" viewBox="0 0 9 103" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line x1="4.5" y1="1.96701e-07" x2="4.5" y2="103" stroke="#489AD6" strokeWidth="9" />
                                        </svg>
                                    </div>

                                    <p className='text-sm text-center'>
                                        Launch on Binance
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>


                <Footer />
            </div>

        </div >
    )
}

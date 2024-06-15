import React from 'react';
import HeroIllustration from '../assets/images/hero-illustration.svg';
import HeroImg from '../assets/images/hero-image.png';

const Hero = () => {
    return (
        <section className="relative">

            {/* <!-- Illustration --> */}
            <div className="pointer-events-none absolute left-[-6%] block z-auto" aria-hidden="true">
                <img src={HeroIllustration} className="max-w-none" width="1440" height="1265"
                    alt="Hero Illustration" />
            </div>

            <div className="relative mx-auto max-w-6xl px-4">
                <div className="pt-40">

                    {/* <!-- Hero content --> */}
                    <div className="mx-auto max-w-screen-md text-center">

                        <h1 className="text-6xl leading-none tracking-[-0.017em] font-bold md:text-[4.8rem] md:leading-none md:tracking-[-0.017em] mb-6 font-hk text-gray-800 dark:text-gray-300 text-center" data-aos="fade-up" style={{ fontFamily: "HK Grotesk, sans-serif" }}>A powerful suite of user-centric products</h1>
                        <p className="mb-10 text-xl leading-normal tracking-[-0.017em] text-gray-500" data-aos="fade-up" data-aos-delay="100">Our landing page
                            template works on all devices, so you only have to set it up once, and get beautiful
                            results forever.</p>
                        <div className="mx-auto max-w-xs ckr19 inline-flex justify-center c53ft c5sau gap-4" data-aos="fade-up"
                            data-aos-delay="200">
                            <div className="flex flex-col gap-4 sm:flex-row">
                                <a className="w-80 sm:w-full inline-flex items-center justify-center rounded font-medium leading-snug ease-in-out duration-300 border-transparent bg-indigo-500 text-white hover:bg-indigo-600 px-6 py-3 whitespace-nowrap group" href="signup.html">
                                    Get Started Free
                                    <span className="ml-1 tracking-[0] text-cyan-300 transition-all ease-in-out duration-300 group-hover:translate-x-1">-&gt;</span>
                                </a>

                                <a className="w-80 sm:w-full inline-flex items-center justify-center rounded border border-slate-600 font-medium leading-snug ease-in-out duration-300 bg-slate-800 text-gray-300 hover:bg-slate-600 px-6 py-3 whitespace-nowrap" href="#0">Read Docs</a>
                            </div>
                        </div>

                    </div>

                    {/* <!-- Hero image --> */}
                    <div className="pt-16" data-aos="fade-up" data-aos-delay="300">
                        <img className="mx-auto" src={HeroImg} width="920" height="518" alt="Hero" />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Hero;
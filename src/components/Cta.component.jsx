import React from 'react';
import CtaIllustration from "../assets/images/cta-illustration.svg";

const Cta = () => {
    return (
        <section className="relative bg-gradient-1 border-t border-slate-800">

            {/* <!-- Bg gradient: top --> */}
            <div className="pointer-events-none absolute top-0 left-0 right-0 -z-10 h-[25rem] gradient-1 c6xlp transparent opacity-25" aria-hidden="true"></div>

            {/* <!-- Illustration --> */}
            <div className="pointer-events-none absolute -left-[6%] top-0  mt-[-2rem] block" aria-hidden="true">
                <img src={CtaIllustration} className="max-w-none" width="1440" height="440"
                    alt="Features 01 Illustration" /></div>

            <div className="mx-auto max-w-6xl px-6">
                <div className="py-20">

                    {/* <!-- Section header --> */}
                    <div className="mx-auto max-w-screen-md pb-12 text-center" data-aos="fade-up">
                        <h2 className="text-5xl leading-[1.2] tracking-[-0.017em] font-bold md:text-6xl md:leading-none md:tracking-[-0.017em] font-hk text-gray-300">Join the most flexible user-centric platform for teams</h2>
                    </div>




                    {/* <!-- CTA form --> */}
                    <section className="relative mb-8 flex items-center justify-center gap-10">
                        <form className="relative rounded-lg bg-slate-700 bg-opacity-80 p-3 flex flex-col gap-3 w-[342px] border border-slate-700 shadow-lg shadow-gray-900">

                            <div>
                                <label className="absolute w-px h-px overflow-hidden whitespace-nowrap -m-px p-0 border-0" for="email">Email</label>
                                <div className="relative rounded-lg overflow-hidden">
                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                                        <svg className="fill-gray-500" xmlns="http://www.w3.org/2000/svg" width="16"
                                            height="14">
                                            <path
                                                d="M14 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm0 12H2V5.723l5.504 3.145a.998.998 0 0 0 .992 0L14 5.723V12Zm0-8.58L8 6.849 2 3.42V2h12v1.42Z">
                                            </path>
                                        </svg>
                                    </div>
                                    <input id="name" className="appearance-none bg-slate-800 hover:bg-slate-900 hover:bg-opacity-60 focus:bg-slate-900 focus:bg-opacity-80 placeholder-gray-500 text-sm leading-6 px-3 py-2 rounded-none w-full pl-10 pr-4" type="text"
                                        placeholder="Your email..." required="" />
                                </div>
                            </div>


                            <div>
                                <button
                                    className="relative isolate inline-flex items-center justify-center text-sm leading-[1.5715] font-medium tracking-normal rounded-lg h-10 w-full bg-white text-gray-900 border-t-2 border-gray-300 -lg shadow-gray-80shadow0">Join The Waitlist</button>
                            </div>
                        </form>
                    </section>



                    <div className="max-w-screen-md mx-auto text-center">
                        {/* <!-- Avatars --> */}
                        <ul className="justify-center mb-4 flex pl-3">
                            <li>
                                <img className="rounded-full" src="../../src/assets/images/avatar-01.jpg" width="32" height="32" alt="Avatar 01" />
                            </li>
                            <li className="-translate-x-1">
                                <img className="rounded-full" src="../../src/assets/images/avatar-02.jpg" width="32" height="32" alt="Avatar 02" />
                            </li>
                            <li className="-translate-x-2">
                                <img className="rounded-full" src="../../src/assets/images/avatar-03.jpg" width="32" height="32" alt="Avatar 03" />
                            </li>
                            <li className="-translate-x-3">
                                <img className="rounded-full" src="../../src/assets/images/avatar-04.jpg" width="32" height="32" alt="Avatar 04" />
                            </li>
                            <li className="-translate-x-4">
                                <img className="rounded-full" src="../../src/assets/images/avatar-05.jpg" width="32" height="32" alt="Avatar 05" />
                            </li>
                        </ul>
                        <p className="text-sm leading-[1.5715] tracking-tight text-gray-500">Join the <span className="font-medium text-white">2,000+</span> members who have already signed up.</p>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default Cta;
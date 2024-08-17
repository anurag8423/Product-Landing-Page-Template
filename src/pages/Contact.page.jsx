import React from 'react';
import CtaIllustration from "../assets/images/cta-illustration.svg";
// import HeroIllustration from '../assets/images/hero-illustration.svg';

const ContactCard = ({ heading, message, content, svgPath }) => {
    return (
        <div className="flex flex-col mx-auto max-w-[342px] sm:max-w-full rounded-lg bg-white dark:bg-slate-700 bg-opacity-60 backdrop-blur-sm p-5">
            <div className="mb-3 grow">
                <div className="mb-1 font-sans font-semibold text-black dark:text-white">{heading}</div>
                <p className="text-sm leading-[1.5715] text-gray-500">{message}</p>
            </div>
            <div className="flex items-center gap-2">
                <svg className="shrink-0 fill-indigo-500" width="16" height="16"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d={svgPath}></path>
                </svg>
                <div className="text-sm leading-[1.5715] text-black dark:text-white">{content}</div>
            </div>
        </div>
    )
}

const Contact = () => {
    return (
        <main className='bg-hero-bg' id="contact">
            <div className="relative grow max-w-6xl mx-auto px-6 py-12 md:py-20">
                <section className="mx-auto pt-16 max-w-screen-md pb-16 text-center">
                    <h1 className="text-5xl leading-[1.2] tracking-[-0.017em] font-bold md:text-6xl md:leading-none md:tracking-[-0.017em] mb-4 font-hk text-gray-800 dark:text-gray-300">Get in touch</h1>
                    <p className="text-xl leading-normal tracking-[-0.017em] text-gray-500">
                        Fill out the form below to set up a call, or keep reading to get in touch with us
                        for customer support, partnerships, or media enquiries.
                    </p>
                </section>


                {/* <!-- Illustration --> */}
                <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-1/3  mt-[-2rem] block" aria-hidden="true">
                    <img src={CtaIllustration} className="max-w-none" width="1440" height="440"
                        alt="Features 01 Illustration" /></div>


                {/* <!-- Contact form --> */}
                <section className="relative mb-16 flex items-center justify-center gap-10">
                    <form className="relative rounded-lg bg-indigo-200 dark:bg-slate-700 bg-opacity-80 p-3 flex flex-col gap-3 w-[342px] border dark:border-slate-700 dark:shadow-lg shadow-gray-900">

                        <div>
                            <label className="absolute w-px h-px overflow-hidden whitespace-nowrap -m-px p-0" for="name">Name</label>
                            <div className="relative rounded-lg overflow-hidden">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                                    <svg className="fill-gray-500" xmlns="http://www.w3.org/2000/svg" width="16"
                                        height="16">
                                        <path
                                            d="M14.9 0c-.3 0-8.4.8-11.6 4-2.8 2.8-2.2 6.5-1.2 8.5L.3 14.3c-.4.4-.4 1 0 1.4.2.2.4.3.7.3.3 0 .5-.1.7-.3l1.8-1.8c.9.4 2.2.8 3.6.8 1.6 0 3.3-.5 4.9-2 3.4-3.4 4-11.3 4-11.6 0-.3-.1-.6-.3-.8-.2-.2-.5-.3-.8-.3Zm-4.3 11.3c-1.9 1.9-4.2 1.5-5.5 1.1L9.4 8c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L3.6 11c-.4-1.4-.8-3.7 1.1-5.6 1.9-1.9 6.5-2.9 9.2-3.3-.3 2.3-1.1 7-3.3 9.2Z">
                                        </path>
                                    </svg>
                                </div>
                                <input id="name" className="appearance-none bg-gray-50 bg-opacity-80 dark:bg-slate-800 hover:bg-gray-50 hover:opacity-100 dark:hover:bg-slate-900 dark:hover:bg-opacity-60 focus:bg-white dark:focus:bg-slate-900 dark:focus:bg-opacity-80 placeholder-gray-400 dark:placeholder-gray-500 text-black dark:text-white text-sm leading-6 px-3 py-2 rounded-none w-full pl-10 pr-4" type="text"
                                    placeholder="Your name..." required="" />
                            </div>
                        </div>


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
                                <input id="name" className="appearance-none bg-gray-50 bg-opacity-80 dark:bg-slate-800 hover:bg-gray-50 hover:opacity-100 dark:hover:bg-slate-900 dark:hover:bg-opacity-60 focus:bg-white dark:focus:bg-slate-900 dark:focus:bg-opacity-80 placeholder-gray-400 dark:placeholder-gray-500 text-black dark:text-white text-sm leading-6 px-3 py-2 rounded-none w-full pl-10 pr-4" type="text"
                                    placeholder="Your email..." required="" />
                            </div>
                        </div>


                        <div>
                            <label className="absolute w-px h-px overflow-hidden whitespace-nowrap -m-px p-0 border-0" for="company">Company size</label>
                            <div className="relative rounded-lg overflow-hidden">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                                    <svg className="fill-gray-500" xmlns="http://www.w3.org/2000/svg" width="16"
                                        height="16">
                                        <path
                                            d="m5.2.02 10 2A1 1 0 0 1 16 3v12a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3V1A1 1 0 0 1 5.2.02ZM2 12v2h4v-2H2Zm0-4v2h4V8H2Zm6 6h6V3.82l-8-1.6V6h1a1 1 0 0 1 1 1v7Zm2-8h2v6h-2V6Z">
                                        </path>
                                    </svg>
                                </div>

                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                                    <svg className="fill-gray-400" width="12" height="8" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            opacity=".72"
                                            d="m2 .586 3 3 3-3L9.414 2 5.707 5.707a1 1 0 0 1-1.414 0L.586 2 2 .586Z"
                                            className={`origin-center`}
                                        ></path>
                                    </svg>
                                </div>
                                <select id="company" className="cursor-pointer appearance-none bg-gray-50 bg-opacity-80 dark:bg-slate-800 hover:bg-gray-50 hover:opacity-100 dark:hover:bg-slate-900 dark:hover:bg-opacity-60 focus:bg-white dark:focus:bg-slate-900 focus:text-black dark:focus:text-white dark:focus:bg-opacity-80 placeholder-gray-400 dark:placeholder-gray-500 text-black dark:text-white leading-6 px-3 py-2 rounded-none w-full pl-10 text-sm" required="">
                                    <option selected="" disabled="" hidden="" className="text-black dark:text-white">Company size</option>
                                    <option className="text-black dark:text-white">1 to 5 members</option>
                                    <option className="text-black dark:text-white">5 to 20 members</option>
                                    <option className="text-black dark:text-white">More than 20 members</option>
                                </select>
                            </div>
                        </div>


                        <div>
                            <label className="absolute w-px h-px overflow-hidden whitespace-nowrap -m-px p-0 border-0" for="message">Message</label>
                            <textarea id="message" className="appearance-none bg-gray-50 bg-opacity-80 dark:bg-slate-800 hover:bg-gray-50 hover:opacity-100 dark:hover:bg-slate-900 dark:hover:bg-opacity-60 focus:bg-white dark:focus:bg-slate-900 dark:focus:bg-opacity-80 placeholder-gray-400 dark:placeholder-gray-500 text-black dark:text-white border-0 leading-[1.5715] px-4 py-2 w-full resize-none text-sm rounded-lg overflow-hidden"
                                placeholder="Your message.." rows="3" required=""></textarea>
                        </div>


                        <div>
                            <label className="flex items-center pb-2">
                                <input type="checkbox" className="cursor-pointer appearance-none inline-block align-middle bg-origin-border select-none shrink-0 h-4 w-4 bg-gray-50 bg-opacity-80 dark:bg-slate-800 checked:bg-checkbox-checked text-blue-600 rounded-md p-0 overflow-hidden" />
                                <span className="ml-2 text-sm leading-[1.5715] text-gray-500 tracking-tight">I'd like to receive updates &amp; product news.</span>
                            </label>
                        </div>


                        <div>
                            <button
                                className="relative isolate inline-flex items-center justify-center text-sm leading-[1.5715] font-medium tracking-normal rounded-lg h-10 w-full bg-slate-800 dark:bg-white text-gray-300 dark:text-gray-900 border-t-2 border-slate-600 dark:border-gray-300 shadow shadow-gray-500 dark:shadow-lg dark:shadow-gray-800 hover:bg-slate-700">Submit</button>
                        </div>
                    </form>
                </section>


                {/* <!-- Cards --> */}
                <section className="max-w-6xl mx-auto grid auto-cols-fr grid-flow-row sm:grid-flow-col gap-6 sm:gap-9">
                    <ContactCard heading="Email" message="Email us your queries and we'll get back to you ASAP." content="hello@cruip.com"
                        svgPath={"M8 0a8 8 0 1 0 3.2 15.335l.916-.4-.8-1.833-.916.4A6 6 0 1 1 14 8v1a1 1 0 1 1-2 0V8a4.033 4.033 0 1 0-1.286 2.92A2.987 2.987 0 0 0 16 9V8a8.009 8.009 0 0 0-8-8Zm0 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"} />

                    <ContactCard heading="Phone" message="Would you like to have a chat? Feel free to give us a call." content="+447359510000"
                        svgPath={"M10 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM2 13V3h8v10H2Z"} />

                    <ContactCard heading="Address" message="Prefer to visit? We're located in London, United Kingdom." content="London, SW1Y 4AH, UK"
                        svgPath={"M5.591 15.069c.404.358.684.606.709.631.4.4 1 .4 1.4.1.05-.05 1.075-.975 2.1-1.9 1.025-.925 2.05-1.85 2.1-1.9 1.4-1.3 2.1-3.1 2.1-5 0-3.9-3.1-7-7-7S0 3.1 0 7c0 1.9.7 3.7 2.1 4.9 0 .075 2.293 2.107 3.491 3.169ZM7 13.7l-3.4-3C2.6 9.7 2 8.4 2 7c0-2.8 2.2-4.9 5-4.9s5 2.2 5 5c0 1.4-.6 2.6-1.6 3.6l-3.4 3ZM9 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"} />
                </section>
            </div>
        </main>

    )
}

export default Contact;
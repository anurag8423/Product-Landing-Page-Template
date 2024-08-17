import React from 'react';
import Avatar1 from "../assets/images/avatar-01.jpg";
import Avatar2 from "../assets/images/avatar-02.jpg";
import Avatar3 from "../assets/images/avatar-03.jpg";
import FeaturesIllustration02 from "../assets/images/features-illustration-02.svg";

const UpdateItems = ({ renderBefore, date, heading, content, dp, author }) => {
    return (
        <article className="pl-8 sm:pl-24 relative">
            <time className="absolute left-1 top-5 hidden sm:grid place-content-center w-14 h-6 bg-indigo-400 text-white font-medium text-xs leading-normal rounded-lg">{date}</time>

            <section className="h-full w-full px-4 py-5 bg-white bg-opacity-50 dark:bg-slate-800 dark:bg-opacity-60 backdrop-blur-sm rounded-lg relative">
                {renderBefore && (
                    <div className="absolute content-[''] h-[106%] w-0 top-8 -left-5 -translate-x-0.5 border border-indigo-200 dark:border-slate-800 z-20" />
                )}
                <div className="absolute content-[''] bg-indigo-400 rounded-full h-2 w-2 top-8 -translate-y-1/2 -left-5 -translate-x-2/3 z-20" />

                <div className='flex flex-col gap-2'>
                    <time className="left-1 top-5 grid sm:hidden place-content-center w-14 h-6 bg-indigo-400 text-white font-medium text-xs leading-normal rounded-lg">{date}</time>
                    <h2 className="font-sans font-semibold text-gray-800 dark:text-gray-300 mb-2 whitespace-nowrap">{heading}</h2>
                </div>
                <p className="text-gray-500 mb-4 whitespace-normal">{content}</p>
                <footer className="items-center flex">
                    <img className="rounded-full shrink-0" src={dp} width="32" height="32"
                        alt="Author 03" />
                    <p className="text-gray-800 dark:text-gray-300 font-medium text-sm leading-[1.5715] pl-3">{author}</p>
                </footer>
            </section>
        </article>
    )
}

const Updates = () => {
    return (
        <main className="relative mx-auto max-w-6xl px-4 sm:px-6 pt-12 pb-16 md:py-20" id="updates">

            {/* <!-- Bg illustration --> */}
            <div className="pointer-events-none absolute left-0 top-1/2 -z-0 mt-[-5rem]" aria-hidden="true">
                <img src={FeaturesIllustration02} className="max-w-none" width="1440" height="440"
                    alt="Illustration" />
            </div>

            <section className="mx-auto max-w-screen-md pb-12 text-center">
                <h1 className="text-5xl leading-[1.2] tracking-[-0.017em] font-bold md:text-6xl md:leading-none md:tracking-[-0.017em] mb-4 font-hk text-gray-800 dark:text-gray-300">News &amp; Updates</h1>
                <p className="text-xl leading-normal tracking-[-0.017em] text-gray-500">
                    Rank and score updates and feature requests so you know you're working on the most impactful things.
                </p>
            </section>

            {/* <!-- Main content --> */}
            <section className="md:pt-12 max-w-screen-lg mx-auto justify-between flex flex-col md:flex-row">
                {/* <!-- Sidebar --> */}
                <aside className="w-full md:w-[276px] shrink-0 mb-12 mr-8 md:p-4">
                    <div className="text-gray-600 tracking-normal font-semibold uppercase text-xs leading-normal mb-3">Select category</div>
                    <ul>
                        <li>
                            <a className="bg-white bg-opacity-50 dark:bg-slate-700 dark:bg-opacity-50 shadow-sm dark:shadow-none transition-colors ease-in-out duration items-center font-medium rounded-lg text-sm leading-[1.5715] flex mt-0.5 px-4 h-9 gap-4"
                                href="#0">
                                <svg className="fill-indigo-500 shrink-0" width="16" height="16"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M15 6h-4a1 1 0 1 1 0-2h4a1 1 0 1 1 0 2ZM15 2h-4a1 1 0 1 1 0-2h4a1 1 0 1 1 0 2ZM15 10h-4a1 1 0 1 1 0-2h4a1 1 0 1 1 0 2ZM15 14H1a1 1 0 1 1 0-2h14a1 1 0 1 1 0 2ZM1.914 9.406l.626-1.409.015.003h4l.015-.003.626 1.409a1 1 0 1 0 1.828-.813L5.47.594a1.001 1.001 0 0 0-1.828 0l-3.556 8a1 1 0 1 0 1.828.812Zm2.642-5.945 1.128 2.538H3.428l1.128-2.538Z">
                                    </path>
                                </svg>
                                <span className="text-black dark:text-gray-300">News</span>
                            </a>
                        </li>
                        <li>
                            <a className="hover:bg-white hover:bg-opacity-30 dark:hover:bg-slate-800 dark:hover:bg-opacity-50 transition-colors ease-in-out duration text-gray-800 dark:text-gray-300 items-center font-medium rounded-lg cp2oc text-sm leading-[1.5715] flex mt-0.5 px-4 h-9 gap-4"
                                href="#0">
                                <svg className="fill-indigo-500 shrink-0" width="16" height="16"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M15.7 5.7 10.3.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l.6.6L2.7 6l-1-1c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l1.5 1.5 2.4 2.4L.6 14 2 15.4l3.7-3.7 4 4c.5.5 1.2.2 1.4 0 .4-.4.4-1 0-1.4l-1-1 3.7-6.7.6.6c.6.6 1.2.2 1.4 0 .3-.4.3-1.1-.1-1.5Zm-7.2 6.1L4.2 7.5l6.7-3.7 1.3 1.3-3.7 6.7Z">
                                    </path>
                                </svg>
                                <span className="text-black dark:text-gray-300">Admin</span>
                            </a>
                        </li>
                        <li>
                            <a className="hover:bg-white hover:bg-opacity-30 dark:hover:bg-slate-800 dark:hover:bg-opacity-50 transition-colors ease-in-out duration text-gray-800 dark:text-gray-300 items-center font-medium rounded-lg cp2oc text-sm leading-[1.5715] flex mt-0.5 px-4 h-9 gap-4"
                                href="#0">
                                <svg className="fill-indigo-500 shrink-0" width="16" height="16"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7.3 8.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0ZM7.3 14.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0ZM.3 9.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0Z">
                                    </path>
                                </svg>
                                <span className="text-black dark:text-gray-300">General</span>
                            </a>
                        </li>
                        <li>
                            <a className="hover:bg-white hover:bg-opacity-30 dark:hover:bg-slate-800 dark:hover:bg-opacity-50 transition-colors ease-in-out duration text-gray-800 dark:text-gray-300 items-center font-medium rounded-lg cp2oc text-sm leading-[1.5715] flex mt-0.5 px-4 h-9 gap-4"
                                href="#0">
                                <svg className="fill-indigo-500 shrink-0" width="16" height="16"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M11.707.293a1 1 0 0 0-1.414 0l-9 9a1 1 0 0 0-.273.507l-1 5a1 1 0 0 0 1.18 1.18l5-1a1 1 0 0 0 .51-.273l9-9a1 1 0 0 0 0-1.414l-4.003-4Zm-6.2 12.786-3.233.647.647-3.233L8 5.414 10.586 8l-5.08 5.079ZM12 6.586 9.414 4 11 2.414 13.586 5 12 6.586Z">
                                    </path>
                                </svg>
                                <span className="text-black dark:text-gray-300">Improvements</span>
                            </a>
                        </li>
                        <li>
                            <a className="hover:bg-white hover:bg-opacity-30 dark:hover:bg-slate-800 dark:hover:bg-opacity-50 transition-colors ease-in-out duration text-gray-800 dark:text-gray-300 items-center font-medium rounded-lg cp2oc text-sm leading-[1.5715] flex mt-0.5 px-4 h-9 gap-4"
                                href="#0">
                                <svg className="fill-indigo-500 shrink-0" width="16" height="16"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M14.3 9.6c.6-4.6-3.2-8.5-7.8-7.9C4.5.4 2-.8.6.6c-1 1-.6 2.9.5 4.8-.5 1-.8 2.1-.8 3.3 0 3.9 3.2 7 7 7 1.2 0 2.3-.3 3.3-.8 1.5.8 3.6 1.7 4.8.5 1.1-1.1.7-3-1.1-5.8Zm-1.9-.9c0 1.5-.7 2.9-1.8 3.8C8.1 10.8 5.2 8 3.5 5.4c.9-1.1 2.3-1.8 3.8-1.8 2.8 0 5.1 2.3 5.1 5.1ZM2 2c.1-.1.7 0 1.9.5-.5.3-1 .7-1.5 1.1-.3-.9-.5-1.4-.4-1.6Zm.5 5.4c1.7 2.3 3.8 4.4 6.1 6.1-3.7 1-7.1-2.4-6.1-6.1Zm11.6 6.5c-.2.1-.8 0-1.7-.4.4-.4.8-.9 1.1-1.4.6 1.2.6 1.8.6 1.8Z">
                                    </path>
                                </svg>
                                <span className="text-black dark:text-gray-300">Legal</span>
                            </a>
                        </li>
                    </ul>
                </aside>

                {/* <!-- Posts --> */}
                <div className="flex flex-col grow mt-[-1.25rem] mb-[-1.25rem] gap-4">

                    <UpdateItems
                        renderBefore={true}
                        date={"Aug 27"}
                        heading={"Adding support for Next.js 14"}
                        dp={Avatar1}
                        author={"Lisa Bella"}
                        content={"When people upgrade from one version to another, it should be painfully clear when something will break. It should be possible to upgrade to a version that lists deprecations, remove what's deprecated, then upgrade to the version where the deprecations become removals."} />
                    <UpdateItems
                        renderBefore={true}
                        date={"Aug 24"}
                        heading={"Introducing Waitlist's OpenAPI Spec"}
                        dp={Avatar2}
                        author={"Helena Doe"}
                        content={"When people upgrade from one version to another, it should be painfully clear when something will break. It should be possible to upgrade to a version that lists deprecations, remove what's deprecated, then upgrade to the version where the deprecations become removals."} />
                    <UpdateItems
                        renderBefore={false}
                        date={"Aug 24"}
                        heading={"Supabase Integration"}
                        dp={Avatar3}
                        author={"Julia Ray"}
                        content={"When people upgrade from one version to another, it should be painfully clear when something will break. It should be possible to upgrade to a version that lists deprecations, remove what's deprecated, then upgrade to the version where the deprecations become removals."} />
                </div>
            </section>
        </main >
    )
}

export default Updates;
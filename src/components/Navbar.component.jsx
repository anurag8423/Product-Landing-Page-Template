import React, { useContext } from 'react';
import { ModeContext } from '../../src/Mode.context.jsx';

const Navbar = () => {
    const { darkMode, toggleMode } = useContext(ModeContext);

    return (
        <div className="absolute sm:absolute top-3 left-1/2 transform -translate-x-1/2 max-w-screen-md w-full px-2 z-30">
            <div className="mx-auto max-w-screen-md w-full md:w-[780px] p-1.5 bg-violet-400 bg-opacity-30 dark:bg-slate-800 dark:bg-opacity-40 rounded-sm border-x border-gray-200 dark:border-slate-800">
                <div className="h-12 flex justify-between items-center rounded-lg gap-x-2 bg-white bg-opacity-80 dark:bg-slate-600 dark:bg-opacity-60 backdrop-blur px-3 shadow border border-indigo-300 dark:border-slate-600 border-opacity-60">
                    {/* Site logo */}
                    <div className="flex-1">
                        <a href="index.html">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32">
                                <path className="fill-indigo-300"
                                    d="M16.975 3.036c6.402.475 11.514 5.586 11.99 11.989H24.32a7.345 7.345 0 0 1-7.345-7.345V3.036Zm-1.95 21.284v4.644c-6.402-.475-11.514-5.587-11.989-11.99H7.68a7.345 7.345 0 0 1 7.345 7.346Z">
                                </path>
                                <path className="fill-indigo-500"
                                    d="M3.036 15.025c.475-6.403 5.587-11.514 11.99-11.99V7.68a7.345 7.345 0 0 1-7.346 7.345H3.036Zm21.284 1.95h4.644c-.475 6.402-5.586 11.514-11.989 11.989V24.32a7.345 7.345 0 0 1 7.345-7.345Z">
                                </path>
                            </svg>
                        </a>
                    </div>

                    {/* Navigation links */}
                    <nav className="flex justify-center">
                        <ul className="flex items-center font-medium gap-x-3 text-sm leading-[1.5715]" >
                            <li>
                                <a className="whitespace-nowrap transition-colors ease-in-out duration text-black dark:text-white rounded-lg py-1.5 px-3 hover:bg-gradient-3 dark:hover:bg-slate-900 dark:hover:bg-opacity-20" href="#updates">Updates</a>
                            </li>
                            <li>
                                <a className="whitespace-nowrap transition-colors ease-in-out duration text-black dark:text-white rounded-lg py-1.5 px-3 hover:bg-gradient-3 dark:hover:bg-slate-900 dark:hover:bg-opacity-20" href="#faq">FAQ</a>
                            </li>
                            <li>
                                <a className="whitespace-nowrap transition-colors ease-in-out duration text-black dark:text-white rounded-lg py-1.5 px-3 hover:bg-gradient-3 dark:hover:bg-slate-900 dark:hover:bg-opacity-20" href="#contact-us">Contact us</a>
                            </li>
                        </ul>
                    </nav>

                    {/* Dark / Light mode toggle */}
                    <div className="flex flex-1 justify-end">
                        <input type="checkbox" name="light-switch" id="light-switch" className="light-switch absolute w-px h-px overflow-hidden whitespace-nowrap -m-px p-0 border-0" onClick={toggleMode} />
                        <label className="cursor-pointer p-2" htmlFor="light-switch">
                            <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                <path className="fill-gray-500"
                                    d="M9 0H7v2h2V0ZM14.294 3.052 12.88 1.637 11.466 3.05l1.413 1.414 1.415-1.413ZM16 7h-2v2h2V7ZM11.535 13.02l1.415 1.413 1.414-1.415-1.415-1.413-1.414 1.414ZM9 14H7v2h2v-2ZM1.566 12.948l1.414 1.415 1.415-1.413-1.414-1.415-1.415 1.413ZM2 7H0v2h2V7ZM4.465 3.12 3.05 1.707 1.636 3.12l1.415 1.414L4.465 3.12Z">
                                </path>
                                <path className={darkMode ? 'fill-gray-200' : 'fill-gray-800'} d="M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z">
                                </path>
                            </svg>
                            <span className="absolute w-px h-px overflow-hidden whitespace-nowrap -m-px p-0 border-0">Switch to light / dark version</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;

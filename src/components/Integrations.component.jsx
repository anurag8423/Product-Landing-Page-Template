import React, { useContext } from 'react';
import { ModeContext } from '../../src/Mode.context.jsx';

import Icon01 from '../assets/images/integration-icon-01.svg';
import Icon02 from '../assets/images/integration-icon-02.svg';
import Icon03 from '../assets/images/integration-icon-03.svg';
import Icon04 from '../assets/images/integration-icon-04.svg';
import Icon05 from '../assets/images/integration-icon-05.svg';
import Icon06 from '../assets/images/integration-icon-06.svg';

const IntegrationIcons = ({ imgSrc, w = "w-full", translate = "" }) => {
    return (
        <div className="relative flex aspect-[1/1] items-center justify-center bg-white bg-opacity-50 dark:bg-slate-800 p-2  shadow-sm" data-aos="fade-up"
            data-aos-delay="200">
            {/* <!-- Inner lines --> */}
            <div className="absolute inset-0 left-1/2 -translate-x-1/2 top-[-2.5rem] h-6 w-[calc(100%_+_24px)] hidden md:block" aria-hidden="true">
                <div className="absolute left-2/4 h-full w-0.5 bg-indigo-300 dark:bg-slate-800"></div>
                <div className={`absolute h-0.5 ${w} bg-indigo-300 dark:bg-slate-800 ${translate}`}></div>
            </div>
            {/* <!-- Circle --> */}
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-4 dark:bg-gradient-1">
                {/* <!-- Icon --> */}
                <img src={imgSrc} width="53" height="45" alt="Icon 03" />
            </div>
        </div>
    );
}

const Integrations = () => {
    const { darkMode } = useContext(ModeContext);
    return (
        <section className="relative">

            {/* <!-- Bottom vertical line --> */}
            <div className="absolute left-2/4 bottom-0 h-8 w-0.5 bg-indigo-300 dark:bg-slate-800 hidden md:block" aria-hidden="true"></div>

            <div className="mx-auto max-w-6xl px-4 py-12 md:py-20 border-t border-indigo-300 dark:border-slate-800">
                {/* <!-- Section header --> */}
                <div className="mx-auto max-w-screen-md pb-12 text-center">
                    <h2 className="text-5xl leading-[1.2] tracking-[-0.017em] font-bold md:text-6xl md:leading-none md:tracking-[-0.017em] font-hk text-gray-800 dark:text-gray-300">An ecosystem of <br /> integrations</h2>
                </div>

                {/* <!-- Logo animation --> */}
                <div className="relative flex flex-col items-center p-16">

                    {/* <!-- Blurred dots --> */}
                    <svg className="absolute top-2/4" width="557" height="93" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <filter x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox"
                                id="hlogo-blurreddots-a">
                                <feGaussianBlur stdDeviation="2" in="SourceGraphic"></feGaussianBlur>
                            </filter>
                            <filter x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox"
                                id="blurreddots-b">
                                <feGaussianBlur stdDeviation="2" in="SourceGraphic"></feGaussianBlur>
                            </filter>
                            <filter x="-150%" y="-150%" width="400%" height="400%"
                                filterUnits="objectBoundingBox" id="blurreddots-c">
                                <feGaussianBlur stdDeviation="6" in="SourceGraphic"></feGaussianBlur>
                            </filter>
                            <filter x="-150%" y="-150%" width="400%" height="400%"
                                filterUnits="objectBoundingBox" id="blurreddots-d">
                                <feGaussianBlur stdDeviation="4" in="SourceGraphic"></feGaussianBlur>
                            </filter>
                            <filter x="-150%" y="-150%" width="400%" height="400%"
                                filterUnits="objectBoundingBox" id="blurreddots-e">
                                <feGaussianBlur stdDeviation="4" in="SourceGraphic"></feGaussianBlur>
                            </filter>
                            <filter x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox"
                                id="blurreddots-f">
                                <feGaussianBlur stdDeviation="2" in="SourceGraphic"></feGaussianBlur>
                            </filter>
                            <filter x="-100%" y="-100%" width="300%" height="300%"
                                filterUnits="objectBoundingBox" id="blurreddots-g">
                                <feGaussianBlur stdDeviation="4" in="SourceGraphic"></feGaussianBlur>
                            </filter>
                            <filter x="-150%" y="-150%" width="400%" height="400%"
                                filterUnits="objectBoundingBox" id="blurreddots-h">
                                <feGaussianBlur stdDeviation="6" in="SourceGraphic"></feGaussianBlur>
                            </filter>
                            <filter x="-150%" y="-150%" width="400%" height="400%"
                                filterUnits="objectBoundingBox" id="blurreddots-i">
                                <feGaussianBlur stdDeviation="4" in="SourceGraphic"></feGaussianBlur>
                            </filter>
                            <filter x="-75%" y="-75%" width="250%" height="250%" filterUnits="objectBoundingBox"
                                id="blurreddots-j">
                                <feGaussianBlur stdDeviation="2" in="SourceGraphic"></feGaussianBlur>
                            </filter>
                        </defs>
                        <g fill="none" fill-rule="evenodd">
                            <g className="fill-indigo-600" transform="translate(437 8)">
                                <circle fill-opacity=".64" filter="url(#blurreddots-a)" cx="6" cy="66" r="6">
                                </circle>
                                <circle fill-opacity=".32" filter="url(#blurreddots-b)" cx="90" cy="6" r="6">
                                </circle>
                                <circle fill-opacity=".64" filter="url(#blurreddots-c)" cx="90" cy="66" r="6">
                                </circle>
                                <circle fill-opacity=".32" filter="url(#blurreddots-d)" cx="6" cy="36" r="4">
                                </circle>
                                <circle fill-opacity=".32" filter="url(#blurreddots-e)" cx="60" cy="36" r="4">
                                </circle>
                                <circle fill-opacity=".64" cx="34" cy="22" r="2"></circle>
                                <circle fill-opacity=".32" cx="34" cy="50" r="2"></circle>
                                <circle fill-opacity=".64" cx="118" cy="22" r="2"></circle>
                                <circle fill-opacity=".32" cx="118" cy="50" r="2"></circle>
                            </g>
                            <g className="fill-indigo-600" transform="matrix(-1 0 0 1 120 8)">
                                <circle fill-opacity=".64" filter="url(#blurreddots-f)" cx="6" cy="66" r="6">
                                </circle>
                                <circle fill-opacity=".32" filter="url(#blurreddots-g)" cx="90" cy="6" r="6">
                                </circle>
                                <circle fill-opacity=".64" filter="url(#blurreddots-h)" cx="90" cy="66" r="6">
                                </circle>
                                <circle fill-opacity=".32" filter="url(#blurreddots-i)" cx="6" cy="36" r="4">
                                </circle>
                                <circle fill-opacity=".64" filter="url(#blurreddots-j)" cx="60" cy="36" r="4">
                                </circle>
                                <circle fill-opacity=".32" cx="34" cy="22" r="2"></circle>
                                <circle fill-opacity=".32" cx="34" cy="50" r="2"></circle>
                                <circle fill-opacity=".64" cx="118" cy="22" r="2"></circle>
                                <circle fill-opacity=".32" cx="118" cy="50" r="2"></circle>
                            </g>
                        </g>
                    </svg>

                    <div className="relative flex h-32 w-32 items-center justify-center">
                        {/* <!-- Halo effect --> */}
                        <svg className="pointer-events-none absolute inset-0 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-auto max-w-[200%]" width="800"
                            height="800" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="lg-1">
                                    <stop stop-color={darkMode ? "#0F172A" : "#E0E7FF"} stop-opacity="0%" offset="0%"></stop>
                                    <stop stop-color={darkMode ? "#0F172A" : "#E0E7FF"} offset="100%"></stop>
                                </linearGradient>
                            </defs>
                            {/* #E0E7FF */}
                            <g className="fill-indigo-600 opacity-75" fill-rule="evenodd">
                                <circle className="opacity-0 origin-center animate-ping-0 scale-105" cx="400" cy="400" r="200"></circle>
                                <circle className="opacity-0 origin-center animate-ping-1 scale-100" cx="400" cy="400" r="200"></circle>
                                <circle className="opacity-0 origin-center animate-ping-2 scale-100" cx="400" cy="400" r="200"></circle>
                                <circle className="opacity-0 origin-center animate-ping-3 scale-100" cx="400" cy="400" r="200"></circle>
                                <rect fill="url(#lg-1)" width="800" height="800"></rect>
                            </g>
                        </svg>
                        {/* <!-- Logo --> */}
                        <svg className="h-16 w-16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <linearGradient x1="0%" y1="32.443%" x2="104.18%" y2="50%" id="a">
                                    <stop stop-color="#FFF" stop-opacity=".299" offset="0%"></stop>
                                    <stop stop-color="#7587E4" stop-opacity="0" offset="100%"></stop>
                                </linearGradient>
                                <linearGradient x1="18.591%" y1="0%" x2="100%" y2="100%" id="b">
                                    <stop stop-color="#818CF8" offset="0%"></stop>
                                    <stop stop-color="#C7D2FE" offset="100%"></stop>
                                </linearGradient>
                            </defs>
                            <g fill="none" fill-rule="evenodd">
                                <path fill="#3730A3" d="M16 18.5V32l15.999-9.25V9.25z"></path>
                                <path fill="#4F46E5" d="m0 23 16 9V18.501L0 9.251z"></path>
                                <path fill-opacity=".64" fill="url(#a)" d="M16 13 0 23l16 9 16-9z"></path>
                                <path fill="url(#b)" d="M16 0 0 9.25l16 9.25 15.999-9.25z"></path>
                            </g>
                        </svg>
                    </div>
                </div>

                {/* <!-- Integration boxes --> */}
                <div className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 mt-10 md:mt-20 mx-auto max-w-80 sm:max-w-md md:max-w-full gap-6">
                    {/* <!-- Top vertical line --> */}
                    <div className="absolute left-2/4 top-[-4rem] mt-[-0.5rem] h-8 w-0.5 bg-indigo-300 dark:bg-slate-800 hidden md:block" aria-hidden="true">
                    </div>

                    <IntegrationIcons imgSrc={Icon01} w="w-1/2" translate="translate-x-full" />
                    <IntegrationIcons imgSrc={Icon02} />
                    <IntegrationIcons imgSrc={Icon03} />
                    <IntegrationIcons imgSrc={Icon04} />
                    <IntegrationIcons imgSrc={Icon05} />
                    <IntegrationIcons imgSrc={Icon06} w="w-1/2" />

                </div>
            </div>
        </section>
    )
}

export default Integrations;

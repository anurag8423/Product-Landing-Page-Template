import React, { useRef } from 'react';
import Icon01 from "../assets/images/features-icon-01.svg";
import Icon02 from "../assets/images/features-icon-02.svg";
import Icon03 from "../assets/images/features-icon-03.svg";
import Icon04 from "../assets/images/features-icon-04.svg";
import FeatureIllustration from "../assets/images/features-illustration.svg";

const FeatureItems = ({ title, imgSrc, content }) => {
    return (
        <div className="flex h-auto flex-col rounded bg-white bg-opacity-50 dark:bg-slate-800 p-6 min-w-full sm:min-w-[48%] md:min-w-[32%] snap-start">
            <img className="mb-3" src={imgSrc} width="56" height="56" alt="Icon" />
            <div className="grow">
                <div className="text-xl leading-normal tracking-[-0.017em] font-bold font-hk text-black dark:text-white">{title}</div>
                <div className="mb-3 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</div>
            </div>
            <div className="text-right">
                <a className="inline-flex items-center font-medium text-indigo-500 transition-all ease-in-out duration-300 group" href="#0">Learn More<span className="text-indigo-500 ml-1 tracking-[0] transition-all ease-in-out duration-300 group-hover:translate-x-1">-&gt;</span></a>
            </div>
        </div>
    );
};

const Features = () => {
    const scrollableDiv = useRef(null);

    const scrollNext = () => {
        scrollableDiv.current.scrollBy({
            left: scrollableDiv.current.scrollWidth / 4,
            behavior: 'smooth'
        });
    }

    const scrollPrev = () => {
        scrollableDiv.current.scrollBy({
            left: -scrollableDiv.current.scrollWidth / 4,
            behavior: 'smooth'
        });
    }


    return (
        <section className="relative">
            {/* <!-- Bg illustration --> */}
            <div className="pointer-events-none absolute left-0 -z-0 mt-[-5rem]" aria-hidden="true">
                <img src={FeatureIllustration} className="max-w-none" width="1440" height="440" alt="Illustration" />
            </div>

            <div className="mx-auto max-w-6xl px-4 py-12">
                {/* <!-- Section header --> */}
                <div className="mx-auto max-w-screen-md pb-12 text-center">
                    <h2 className="text-5xl leading-[1.2] tracking-[-0.017em] font-bold md:text-6xl md:leading-none md:tracking-[-0.017em] mb-4 font-hk text-gray-800 dark:text-gray-300">Many tools to express your creativity</h2>
                    <div className="mx-auto max-w-2xl">
                        <p className="text-xl leading-normal tracking-[-0.017em] text-gray-500">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.</p>
                    </div>
                </div>

                <div ref={scrollableDiv} className="w-full h-auto flex gap-6 overflow-auto snap-x snap-mandatory no-scrollbar">
                    <FeatureItems title={"Collaboration"} imgSrc={Icon01} content={""} />
                    <FeatureItems title={"Experiences"} imgSrc={Icon02} content={""} />
                    <FeatureItems title={"Animation"} imgSrc={Icon03} content={""} />
                    <FeatureItems title={"Modeling"} imgSrc={Icon04} content={""} />
                </div>

                {/* <!-- Arrows --> */}
                <div className="mt-12 flex justify-end">
                    <button
                        className="carousel-prev relative z-20 flex h-14 w-14 items-center justify-center rounded-full border border-indigo-200 dark:border-slate-700 bg-white bg-opacity-60 dark:bg-slate-800 transition-all ease-in-out duration-300 hover:bg-white dark:hover:bg-slate-700 shadow-sm"
                        onClick={scrollPrev}>
                        <span className="absolute w-px h-px overflow-hidden whitespace-nowrap -m-px p-0 border-0">Previous</span>
                        <svg className="h-4 w-4 fill-slate-400 transition-all ease-in-out duration-300" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z"></path>
                        </svg>
                    </button>

                    <button
                        className="carousel-next relative z-20 flex h-14 w-14 ml-4 items-center justify-center rounded-full border border-indigo-200 dark:border-slate-700 bg-white bg-opacity-60 dark:bg-slate-800 transition-all ease-in-out duration-300 hover:bg-white dark:hover:bg-slate-700 shadow-sm"
                        onClick={scrollNext}>
                        <span className="absolute w-px h-px overflow-hidden whitespace-nowrap -m-px p-0 border-0">Next</span>
                        <svg className="h-4 w-4 fill-slate-400 transition-all ease-in-out duration-300" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Features;

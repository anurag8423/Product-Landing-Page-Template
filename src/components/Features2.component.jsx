import React, { useState } from 'react';
import FeaturesIllustration02 from "../assets/images/features-illustration-02.svg";
import FeaturesImage from "../assets/images/features-image.png";

const Features2InnerText = ({ heading, desc }) => {
    return (
        <div>
            <h3 className="min-w-[50%] w-full text-4xl leading-[1.277] tracking-[-0.017em] font-bold mb-2 font-hk text-gray-800 dark:text-gray-300">{heading}</h3>
            <div className="w-full text-lg leading-normal tracking-[-0.017em] text-gray-500">{desc}</div>
        </div>
    );
};

const Features2Btn = ({ btnname, order, category, setCategory }) => {
    return (
        <button
            className={`inline-flex items-center justify-center rounded-full border font-medium leading-snug transition duration-300 ease-in-out m-1.5 px-3 py-1 shadow ${category === order ? 'text-white bg-indigo-500' : 'text-gray-800 dark:text-gray-300 bg-white dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-600 border-slate-600'}`}
            onClick={() => setCategory(order)}>{btnname}
        </button>
    );
};

const Features2 = () => {
    const [category, setCategory] = useState('1');

    return (
        <section className="max-w-full bg-gradient-2 dark:bg-gradient-1 border-t border-indigo-300 dark:border-slate-800">
            <div className="relative max-w-6xl px-6 mx-auto">
                {/* Bg gradient: top */}
                <div className="pointer-events-none absolute top-0 left-0 right-0 -z-10 h-[25rem] opacity-25" aria-hidden="true"></div>

                {/* Illustration */}
                <div className="pointer-events-none absolute left-[-6%] top-0 -z-0 mt-40 block" aria-hidden="true">
                    <img src={FeaturesIllustration02} className="max-w-none" width="1440" height="453" alt="Features 02 Illustration" />
                </div>

                <div className="m-auto w-full py-20">
                    <div className="mx-auto max-w-screen-md pb-12 text-center">
                        <h2 className="text-5xl leading-[1.2] tracking-[-0.017em] font-bold md:text-6xl md:leading-none md:tracking-[-0.017em] font-hk text-gray-800 dark:text-gray-300">Features to help you create your best designs</h2>
                    </div>

                    {/* Box */}
                    <div className="overflow-hidden rounded bg-white bg-opacity-50 dark:bg-slate-800 dark:bg-opacity-60 backdrop-blur-sm flex flex-col md:flex-row items-start justify-between max-w-screen-[1104px] w-full mx-auto shadow-sm">
                        <div className="min-w-[50%] min-h-full p-6 lg:p-10">
                            {/* Filters */}
                            <div className="mb-6">
                                <div className="mt-[-0.375rem] mr-[-0.375rem] mb-[2rem] ml-[-0.375rem] flex flex-wrap sm:flex-nowrap">
                                    <Features2Btn btnname="Everyone" order="1" category={category} setCategory={setCategory} />
                                    <Features2Btn btnname="Freelancers" order="2" category={category} setCategory={setCategory} />
                                    <Features2Btn btnname="Organizations" order="3" category={category} setCategory={setCategory} />
                                </div>
                            </div>

                            {/* Content */}
                            <div>
                                {category === '1' && (
                                    <Features2InnerText
                                        heading="Kickstart your project with these tools"
                                        desc="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt laborum."
                                    />
                                )}
                                {category === '2' && (
                                    <Features2InnerText
                                        heading="Tech tools to kickstart freelance life"
                                        desc="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt laborum."
                                    />
                                )}
                                {category === '3' && (
                                    <Features2InnerText
                                        heading="Share your plan and clarify project risk"
                                        desc="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt laborum."
                                    />
                                )}
                            </div>
                        </div>

                        <img src={FeaturesImage} className="grid place-self-center min-w-[50%] object-contain px-10 pb-10 sm:px-32 md:px-0 md:pb-0 md:pl-0 lg:pl-[5rem]" alt="Feature" />

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features2;

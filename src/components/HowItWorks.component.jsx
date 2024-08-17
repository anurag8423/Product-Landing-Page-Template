import React, { useContext } from 'react';
import { ModeContext } from '../Mode.context';

import oneImg from '../assets/images/1.png';
import twoImg from '../assets/images/2.png';
import threeImg from '../assets/images/3.png';
import oneImgLight from '../assets/images/1-light.png';
import twoImgLight from '../assets/images/2-light.png';
import threeImgLight from '../assets/images/3-light.png';

// Array to store the steps data
const stepsData = [
    {
        imgSrc: oneImg,
        imgSrcLight: oneImgLight,
        stepTitle: "Select writing template",
        stepDescription: "Simply choose a template from our list to write content for blog posts, landing pages, website content, etc."
    },
    {
        imgSrc: twoImg,
        imgSrcLight: twoImgLight,
        stepTitle: "Describe your topic",
        stepDescription: "Provide our AI content writer with a few sentences on what you want to write, and it will start writing for you."
    },
    {
        imgSrc: threeImg,
        imgSrcLight: threeImgLight,
        stepTitle: "Generate quality content",
        stepDescription: "Our powerful AI tools will generate content in a few seconds, then you can export it to wherever you need."
    }
];


// StepsCard component
const StepsCard = ({ imgSrc, stepTitle, stepDescription }) => {
    return (
        <div className="flex w-full sm:w-[calc((100%-24px)/2)] lg:w-[calc((100%-48px)/3)] min-w-[250px] min-h-full shadow-md pl-5 pt-3 bg-white dark:bg-slate-800 bg-opacity-50 rounded-md">
            <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white text-left mt-1">{stepTitle}</h4>
                <p className="mt-2 text-gray-500 text-left mb-4">{stepDescription}</p>
            </div>
            <img src={imgSrc} alt={stepTitle} />
        </div>
    );
};

// HowItWorks component
const HowItWorks = () => {
    const { darkMode, setDarkMode } = useContext(ModeContext);
    return (
        <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-base font-semibold tracking-wide text-indigo-600 uppercase">
                How It Works
            </h2>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Instruct to our AI and generate copy
            </h3>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                Give our AI a few descriptions and we’ll automatically create blog articles, product descriptions and more for you within just few seconds.
            </p>

            <div className="mt-10 flex flex-row flex-wrap justify-center items-center max-w-[1200px] m-auto h-auto gap-6">
                {stepsData.map((step, index) => (
                    <StepsCard
                        key={index}
                        imgSrc={darkMode ? step.imgSrcLight : step.imgSrc}
                        stepTitle={step.stepTitle}
                        stepDescription={step.stepDescription}
                    />
                ))}
            </div>

            <div className="mx-auto max-w-xs inline-flex justify-center gap-4 mt-16" data-aos="fade-up"
                data-aos-delay="200">
                <div className="flex flex-col gap-4 sm:flex-row">
                    <a className="w-80 sm:w-full inline-flex items-center justify-center rounded font-medium leading-snug ease-in-out duration-300 border-transparent bg-indigo-500 text-white hover:bg-indigo-600 px-6 py-3 whitespace-nowrap group" href="signup.html">
                        Start writing for free
                        <span className="ml-1 tracking-[0] text-cyan-300 transition-all ease-in-out duration-300 group-hover:translate-x-1">-&gt;</span>
                    </a>

                    <a className="w-80 sm:w-full inline-flex items-center justify-center rounded border border-slate-600 font-medium leading-snug ease-in-out duration-300 bg-slate-800 text-gray-300 hover:bg-slate-700 px-6 py-3 whitespace-nowrap" href="#0">See action in video</a>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;

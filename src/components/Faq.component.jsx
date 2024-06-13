import React, { useState } from 'react';
import FeatureIllustration from "../assets/images/features-illustration.svg";

const FaqCard = ({ question, answer }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="bg-slate-800 bg-opacity-60 backdrop-blur-sm rounded-lg py-1">
            <h2>
                <button
                    id="faqs-title-01"
                    className="justify-between items-center font-medium text-left w-full flex px-4 py-2"
                    onClick={() => setExpanded(!expanded)}
                    aria-expanded={expanded}
                    aria-controls="faqs-text-01">
                    <span>{question}</span>
                    <span className={`justify-center items-center rounded-full shrink-0 ml-2 flex h-5 w-5 bg-gray-600 transform transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}>
                        <svg className="fill-gray-400" width="10" height="6" xmlns="http://www.w3.org/2000/svg">
                            <path
                                opacity=".72"
                                d="m2 .586 3 3 3-3L9.414 2 5.707 5.707a1 1 0 0 1-1.414 0L.586 2 2 .586Z"
                                className={`origin-center`}
                            ></path>
                        </svg>
                    </span>
                </button>
            </h2>
            <div
                id="faqs-text-01"
                role="region"
                aria-labelledby="faqs-title-01"
                className={`overflow-hidden transition-all duration duration-300 ease-in-out text-sm leading-[1.5715] grid ${expanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
            >
                <div className="overflow-hidden">
                    <p className="px-4 pb-2 text-gray-500">
                        {answer}
                    </p>
                </div>
            </div>
        </div>
    );
};


const Faq = () => {
    return (
        <main className="relative grow pb-12 sm:pb-20 px-4 sm:px-6 max-w-6xl mx-auto">

            {/* <!-- Bg illustration --> */}
            <div className="pointer-events-none absolute -left-1/2 top-[5%] -z-0 mt-[-5rem] cj3ve" aria-hidden="true">
                <img src={FeatureIllustration} className="max-w-none" width="1440" height="440"
                    alt="Illustration" />
            </div>

            <section className="mx-auto max-w-screen-md pb-12 pt-20 text-center">
                <h1 className="text-5xl leading-[1.2] tracking-[-0.017em] font-bold md:text-6xl md:leading-none md:tracking-[-0.017em] mb-4 font-hk text-gray-300">Quick Answers</h1>
                <p className="text-xl leading-normal tracking-[-0.017em] text-gray-500">
                    Here we provide answers for the most common questions. From registering and accessing your account to payments and paid subscriptions.
                </p>
            </section>

            {/* <!-- Accordion --> */}
            <div className="flex flex-col gap-1 max-w-screen-md mx-auto">
                <FaqCard
                    question={"When the software will be released?"}
                    answer={"One-time Licenses are limited by the number of software. A software is essentially a tool hosted on a single web server or IP Address."} />
                <FaqCard
                    question={"Are there any limits to the number of exported tools from Waitlist?"}
                    answer={"One-time Licenses are limited by the number of software. A software is essentially a tool hosted on a single web server or IP Address."} />
                <FaqCard
                    question={"Do you provide any support?"}
                    answer={"One-time Licenses are limited by the number of software. A software is essentially a tool hosted on a single web server or IP Address."} />
                <FaqCard
                    question={"What does the term “per software” mean in the License?"}
                    answer={"One-time Licenses are limited by the number of software. A software is essentially a tool hosted on a single web server or IP Address."} />
                <FaqCard
                    question={"How is Waitlist different from X?"}
                    answer={"One-time Licenses are limited by the number of software. A software is essentially a tool hosted on a single web server or IP Address."} />
                <FaqCard
                    question={"What happens if I don't renew my license after one year?"}
                    answer={"One-time Licenses are limited by the number of software. A software is essentially a tool hosted on a single web server or IP Address."} />
                <FaqCard
                    question={"How does billing work?"}
                    answer={"One-time Licenses are limited by the number of software. A software is essentially a tool hosted on a single web server or IP Address."} />
                <FaqCard
                    question={"What is your cancellation or refund policy?"}
                    answer={"One-time Licenses are limited by the number of software. A software is essentially a tool hosted on a single web server or IP Address."} />
            </div>
        </main>
    )
}

export default Faq;


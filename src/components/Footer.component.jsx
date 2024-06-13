import React from 'react';

const FooterBlock = ({ title, links }) => {
    return (
        <div>
            <h6 className="mb-3 text-xs leading-normal font-semibold uppercase text-gray-400 underline">{title}</h6>
            <ul className="text-sm leading-6 ">
                {links.map((link, index) => (
                    <li className="mt-1.5" key={index}>
                        <a className="text-gray-500 transition ease-in-out duration-150 hover:text-gray-300" href={link.href}>
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const Footer = () => {
    const footerLinks = [
        { label: "Cube Manage", href: "#0" },
        { label: "Cube Analyse", href: "#0" },
        { label: "Cube Launch", href: "#0" },
        { label: "Experimentation", href: "#0" },
    ];

    const footerLinks2 = [
        { label: "Blog", href: "#0" },
        { label: "Cheat Sheet", href: "#0" },
        { label: "Channel Partners", href: "#0" },
        { label: "Affiliate Program", href: "#0" },
    ];

    const footerLinks3 = [
        { label: "Session Recording", href: "#0" },
        { label: "Feature Flags", href: "#0" },
        { label: "Heatmaps", href: "#0" },
        { label: "Correlation Analysis", href: "#0" },
    ];

    const footerLinks4 = [
        { label: "About Us", href: "#0" },
        { label: "Our Story", href: "#0" },
        { label: "Work With Us", href: "#0" }
    ];

    return (
        <footer className="mx-auto max-w-6xl w-full px-6">
            {/* Blocks */}
            <div className="grid gap-8 border-t border-gray-800 grid-cols-1 sm:grid-cols-2 md:grid-cols-5 py-12">

                {/* 1st block */}
                <div className="max-w-xs col-span-1 sm:col-span-2 md:col-span-1">
                    <div className="mb-2">
                        {/* Logo */}
                        <a className="inline-flex" href="index.html" aria-label="Cruip">
                            <svg className="h-8 w-8" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient x1="0%" y1="32.443%" x2="104.18%" y2="50%" id="flogo-a">
                                        <stop stopColor="#FFF" stopOpacity=".299" offset="0%"></stop>
                                        <stop stopColor="#7587E4" stopOpacity="0" offset="100%"></stop>
                                    </linearGradient>
                                    <linearGradient x1="18.591%" y1="0%" x2="100%" y2="100%" id="flogo-b">
                                        <stop stopColor="#818CF8" offset="0%"></stop>
                                        <stop stopColor="#C7D2FE" offset="100%"></stop>
                                    </linearGradient>
                                </defs>
                                <g fill="none" fillRule="evenodd">
                                    <path fill="#3730A3" d="M16 18.5V32l15.999-9.25V9.25z"></path>
                                    <path fill="#4F46E5" d="m0 23 16 9V18.501L0 9.251z"></path>
                                    <path fillOpacity=".64" fill="url(#flogo-a)" d="M16 13 0 23l16 9 16-9z"></path>
                                    <path fill="url(#flogo-b)" d="M16 0 0 9.25l16 9.25 15.999-9.25z"></path>
                                </g>
                            </svg>
                        </a>
                    </div>
                </div>

                <FooterBlock title="PRODUCTS" links={footerLinks} />
                <FooterBlock title="RESOURCES" links={footerLinks2} />
                <FooterBlock title="PROJECTS" links={footerLinks3} />
                <FooterBlock title="COMPANY" links={footerLinks4} />

            </div>

            {/* Bottom area */}
            <div className="pb-8 flex items-center justify-between">

                {/* Links */}
                <div className="text-sm text-gray-700">
                    <a className="text-gray-500 transition ease-in-out duration-150 hover:text-gray-300" href="#0">Terms</a> · <a className="text-gray-500 transition ease-in-out duration-150 hover:text-gray-300" href="#0">Privacy Policy</a>
                </div>

                {/* Social links */}
                <ul className="flex space-x-2">
                    <li>
                        <a className="transition ease-in-out duration-150" href="#0" aria-label="Twitter">
                            <svg className="h-8 w-8 fill-indigo-500 hover:fill-gray-300" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z">
                                </path>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a className="transition ease-in-out duration-150" href="#0" aria-label="Medium">
                            <svg className="h-8 w-8 fill-indigo-500 hover:fill-gray-300" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23 8H9a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1Zm-1.708 3.791-.858.823a.251.251 0 0 0-.1.241V18.9a.251.251 0 0 0 .1.241l.838.823v.181h-4.215v-.181l.868-.843c.085-.085.085-.11.085-.241v-4.887l-2.41 6.131h-.329l-2.81-6.13V18.1a.567.567 0 0 0 .156.472l1.129 1.37v.181h-3.2v-.181l1.129-1.37a.547.547 0 0 0 .146-.472v-4.749a.416.416 0 0 0-.138-.351l-1-1.209v-.181H13.8l2.4 5.283 2.122-5.283h2.971l-.001.181Z">
                                </path>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a className="transition ease-in-out duration-150" href="#0" aria-label="Github">
                            <svg className="h-8 w-8 fill-indigo-500 hover:fill-gray-300" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z">
                                </path>
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;

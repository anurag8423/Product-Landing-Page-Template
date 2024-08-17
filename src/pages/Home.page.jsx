import React from 'react';
import Hero from '../components/Hero.component';
import Features from '../components/Features.component';
import Features2 from '../components/Features2.component';
import Integrations from '../components/Integrations.component';
import Updates from '../components/Updates.component';
import Testimonials from '../components/Testimonials.component';
import Faq from '../components/Faq.component';
import Contact from '../components/Contact.component';
import Cta from '../components/Cta.component';
import HowItWorks from '../components/HowItWorks.component';
import LogoCloud from '../components/LogoCloud.component';

function Home() {

    return (
        <>
            <Hero />
            <Features />
            <Features2 />
            <HowItWorks />
            <Integrations />
            {/* <Pricing /> */}
            {/* <SingleTestimonial /> */}
            <Testimonials />
            <Updates />
            <Faq />
            <LogoCloud />
            <Cta />
        </>
    )
}

export default Home;

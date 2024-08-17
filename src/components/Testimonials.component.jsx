import React from "react";

const testimonials = [
    {
        name: "Fleix Everard",
        position: "HR, Blue Soft Sol",
        title: "Great app - Easy to use",
        feedback: "Great value and so easy to use and saves me so much time! I was shocked by how much time and brain energy it saved me. Simple & easy...gotta love that. ✌️",
        rating: 3,
        img: "https://themepanthers.com/wp/copygen/d1/wp-content/uploads/2023/05/sm-e.jpg",
    },
    {
        name: "Derek Gehl",
        position: "CEO at Hire & Retain",
        title: "Time Saving and Better Than PLR Content",
        feedback: "CpoyGen is a fantastic tool for writing product descriptions and getting started on blog posts. No longer do I have to stare at a blank screen trying to figure out how to flesh out a topic beyond 50 words. For me, CopyGen replaces buying PLR content that I would similarly edit and personalize. This saves me time because I can actually tailor to my keyword and niche needs.",
        rating: 3,
        img: "https://themepanthers.com/wp/copygen/d1/wp-content/uploads/2023/05/sm-g.jpg",
    },
    {
        name: "Boris Elbert",
        position: "Green Tech",
        title: "Like the name the Software also very SIMPLE to use",
        feedback: "I was impressed I have to say, from the time it took me to come up with this stuff, your system improved my productivity. I think you have a creative tool, properly postured, it can generate a lot of positive impact.",
        rating: 4,
        img: "https://themepanthers.com/wp/copygen/d1/wp-content/uploads/2023/05/sm-c.jpg",
    },
    {
        name: "Martin Schoel",
        position: "Manager, Airlines",
        title: "A year of organic marketing in about 30 minutes",
        feedback: "Writing articles has never been easier for me. Since I started using CopyGen, I only need a few minutes 🎉",
        rating: 4,
        img: "https://themepanthers.com/wp/copygen/d1/wp-content/uploads/2023/05/sm-b.jpg",
    },
    {
        name: "Ben Tortora",
        position: "CEO at Hire & Retain",
        title: "Just wanna shout out the whole team for this amazing tool",
        feedback: "I love it! The simplicity of writing and designing in one app 🎉 Makes social media marketing a breeze ❤️",
        rating: 3,
        img: "https://themepanthers.com/wp/copygen/d1/wp-content/uploads/2023/05/sm-h.jpg",
    },
    {
        name: "Merri Evans",
        position: "CEO at Hire & Retain",
        title: "They've hit a home run with this AI tool",
        feedback: "I was literally speechless from the originality of the content that my very first CopyGen test was able to produce from only a small sample of my original content. I was anticipating useless gibberish, but was instead genuinely dumbfounded. I stared at it in amazement for a solid 3 minutes while the idea machine in my head spun wildly.",
        rating: 3,
        img: "https://themepanthers.com/wp/copygen/d1/wp-content/uploads/2023/05/sm-n.jpg",
    },
];

function TestimonialCard({ testimonial }) {
    const { name, position, title, feedback, rating, img } = testimonial;

    return (
        <div className="bg-white dark:bg-slate-800 bg-opacity-50 shadow-md rounded-lg p-6 flex flex-col w-full sm:w-[calc((100%-24px)/2)] lg:w-[calc((100%-48px)/3)] min-w-[250px] h-fit">
            <div className="flex items-center mb-4">
                <img className="w-12 h-12 rounded-full mr-4" src={img} alt={name} />
                <div>
                    <h3 className="text-lg font-semibold text-slate-700 dark:text-white">{name}</h3>
                    <p className="text-gray-500 text-sm">{position}</p>
                </div>
            </div>
            <h4 className="text-xl font-bold mb-2 text-slate-700 dark:text-white">{title}</h4>
            <p className="text-gray-500">{feedback}</p>
            <div className="mt-4">
                {Array.from({ length: 5 }, (v, i) => (
                    <span key={i} className={i < rating ? "text-yellow-500" : "text-gray-300"}>
                        ★
                    </span>
                ))}
            </div>
        </div>
    );
}


function Testimonials() {
    return (
        <div className="py-20 px-5">
            <section class="mx-auto max-w-screen-md pb-12 text-center"><h1 class="text-5xl leading-[1.2] tracking-[-0.017em] font-bold md:text-6xl md:leading-none md:tracking-[-0.017em] mb-4 font-hk text-gray-800 dark:text-gray-300">See what AI writers says</h1>
                <p class="text-xl leading-normal tracking-[-0.017em] text-gray-500">This is a straightforward and commonly used header that lets customers know they are looking at different pricing options.</p></section>

            <div className="flex flex-col flex-wrap justify-start items-center max-w-[1200px] m-auto h-auto sm:max-h-[1400px] md:max-h-[1200px] lg:max-h-[900px] gap-6">
                {testimonials.slice(0).map((testimonial, index) => (
                    <TestimonialCard key={index} testimonial={testimonial} />
                ))}
            </div>
        </div>
    );
}


export default Testimonials;
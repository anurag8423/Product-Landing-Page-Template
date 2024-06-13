import './App.css';

import Navbar from './components/Navbar.component';
import Hero from './components/Hero.component';
import Features from './components/Features.component';
import Features2 from './components/Features2.component';
import Integrations from './components/Integrations.component';
import Updates from './components/Updates.component';
import Faq from './components/Faq.component';
import Contact from './components/Contact.component';
import Cta from './components/Cta.component';
import Footer from './components/Footer.component';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="bg-slate-900 text-gray-300 tracking-[-0.01em] flex min-h-screen flex-col overflow-x-hidden font-hk">
      <Navbar />
      <Hero />
      {/* <Testimonials /> */}
      <Features />
      <Features2 />
      <Integrations />
      {/* <Pricing /> */}
      {/* <SingleTestimonial /> */}
      <Updates />
      <Faq />
      <Contact />
      <Cta />
      <Footer />
    </div >
  )
}

export default App;

import React, { lazy } from 'react';

// Lazy-loaded components
import Header from './Components/Header';
import Home from './Pages/Home';
import Portfolio from './Pages/Portfolio';
const Slider = lazy(() => import('./Components/Slider'));
const Schedule = lazy(() => import('./Pages/Schedule'));
const Testimonials = lazy(() => import('./Pages/Testimonials'));
const ContentHeading = lazy(() => import('./Components/Content_Heading'));
const Services = lazy(() => import('./Pages/Services'));
const Footer = lazy(() => import('./Pages/Footer'));

function App() {
  return (
    <div>
        <Header />
        <Home />
        <Slider />
        <Schedule />
        <div id='Portfolio' className="opening"></div>
        <ContentHeading styles="portfolio-heading" text='PORTFOLIO' index={0} />
        <Portfolio />
        <div id='Testimonials' className="opening"></div>
        <ContentHeading styles="testimonial-heading" text='TESTIMONIALS' index={1} />
        <Testimonials />
        <div id="Services" className="opening"></div>
        <ContentHeading styles="Services-heading" text='SERVICES' index={2} />
        <Services />
        <Footer />
    </div>
  );
}

export default App;

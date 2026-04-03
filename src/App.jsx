import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import FeaturedMenu from './components/FeaturedMenu';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Location from './components/Location';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <FeaturedMenu />
        <Gallery />
        <Testimonials />
        <Location />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}

export default App;

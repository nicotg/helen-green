import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import FeaturedMenu from './components/FeaturedMenu';
import Cocktails from './components/Cocktails';
import Desserts from './components/Desserts';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Location from './components/Location';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import ImageModal from './components/ImageModal';
import { ImageModalProvider } from './context/ImageModalContext';

function App() {
  return (
    <ImageModalProvider>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Events />
        <FeaturedMenu />
        <Cocktails />
        <Desserts />
        <Gallery />
        <Testimonials />
        <Location />
      </main>
      <Footer />
      <FloatingCTA />
      <ImageModal />
    </ImageModalProvider>
  );
}

export default App;

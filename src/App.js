import './sass/main.scss';
import Header from './components/Header'
import About from './components/About';
import Testimonials from './components/Testimonials';
import Screen from './components/Screen';
import Download from './components/Download';
import Awards from './components/Awards';
import Footer from './components/Footer';

function App() {

  return (
    <div>
      <Header />
      <About />
      <Testimonials />
      <Screen />
      <Download />
      <Awards />
      <Footer />
    </div>
  );
}

export default App;

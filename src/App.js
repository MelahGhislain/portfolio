import {About, Footer, Header, Skills, Testimonials, Work} from './pages'
import {NavBar, SocialMedia} from './components'
import Overlay from './components/Overlay';


function App() {
  return (
    <div className='bg-slate-200'>
      <NavBar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Footer />
      <SocialMedia />
      <Overlay />
    </div>
  );
}

export default App;

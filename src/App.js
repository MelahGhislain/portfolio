import {About, Footer, Header, Skills, Testimonials, Work} from './pages'
import {NavBar, SocialMedia} from './components'


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
    </div>
  );
}

export default App;

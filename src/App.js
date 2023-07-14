import './App.css';
import Navbar from './layout/Navbar';
import { ContentPict } from './pages/ContentPict';
import { OurValue } from './pages/OurValue';
import { ContactUs } from './pages/ContactUs';
import { Footer } from './layout/Footer';


function App() {
  return (
    <div className="container">
    <Navbar/>
    <ContentPict/>
    <OurValue/>
    <ContactUs/>
    <Footer/>
    </div>

  );
}

export default App;

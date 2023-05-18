
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cv from './components/Cv';
import Contact from './components/Contact';
import ScrollToTopButton from './components/ScrollToTopButton';
import SocialSidebar from './components/SocialSidebar';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App bg-gray-800">
        <Navbar />
        <Home />
        <Cv />
        <Contact />
        <Footer/>
        <ScrollToTopButton />
        <SocialSidebar />
        <ToastContainer />
    </div>
  );
}

export default App;

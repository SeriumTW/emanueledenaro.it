
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cv from './components/Cv';

function App() {
  return (
    <div className="App bg-gray-800">
        <Navbar />
        <Home />
        <Cv />
        <Footer/>
    </div>
  );
}

export default App;

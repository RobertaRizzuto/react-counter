import MainContent from './components/MainContent';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';
import './App.css';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <MainContent />
      <Gallery/>
      <Footer/>
    </div>
  );
}

export default App;
import './App.css';
import Footer from './components/footer/Footer';
import NavBar from './components/navBar/NavBar';
import Home from './pages/home/Home';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;

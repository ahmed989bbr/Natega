import './App.css';
import Footer from './Commponant/Footer';
import Header from './Commponant/header';
import Resalt from './Resalt';

function App() {
  return (
    <div className="App">
    <Header />
    <div className="content">
        <Resalt />
    </div>
    <Footer />
</div>
  );
}

export default App;

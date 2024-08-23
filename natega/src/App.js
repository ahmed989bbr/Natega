import './App.css';
import Footer from './Commponant/Footer';
import Header from './Commponant/header';
import Resalt from './Resalt';
import Xlec from './Xlec';
import { Routes ,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
    <Header />
    <div className="content">
      <Routes>
        <Route path='/Natega' element={<Resalt/>} />
        <Route path='/upload' element={<Xlec/>} />
      </Routes>
    </div>
    <Footer />
</div>
  );
}

export default App;

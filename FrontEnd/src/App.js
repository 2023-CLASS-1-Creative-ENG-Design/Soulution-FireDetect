import 'bootstrap/dist/css/bootstrap.css';
import Navigation from './component/Header';
import Home from './component/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cam1 from './component/cam1';
import Cam2 from './component/cam2';

function App() {
return (
  <div style = {{
    backgroundColor: '#ffffff'
  }}>
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Cam1" element={<Cam1 />} />
        <Route path="/Cam2" element={<Cam2 />} />
      </Routes>
    </BrowserRouter>
  </div>
);
}

export default App;
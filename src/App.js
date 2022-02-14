import './App.css';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Public1 from './pages/Public1';
import Public2 from './pages/Public2';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/1" element={<Public1 />} />
        <Route path="/2" element={<Public2 />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

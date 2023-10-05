import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Contactus from './pages/Contact';
import Aboutus from './pages/About';
import Home from './pages/Home';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/aboutus' element={<Aboutus />} />
          <Route path='/contactus' element={<Contactus />} />
        </Routes>
      </HashRouter>
    </>
  );
}
export default App;
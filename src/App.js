import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from './pages/Main/MainPage';
import SecondPage from './pages/ProjectPage/SecondPage';
import Practice from './pages/Practice/Practice';
import Lesson from './pages/Lesson/Lesson';
import RK from './pages/RK/RK';
// import SRS from './pages/SRS/SRS';
import Test from './pages/Test/Test';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route exact path="/razdel/test" element={<SecondPage />} />
          <Route exact path="/razdel/praktika" element={<Practice />} />
          <Route exact path="/razdel/lesson" element={<Lesson />} />
          <Route exact path="/razdel/rk" element={<RK />} />
          {/* <Route exact path="/razdel/srs" element={<SRS />} /> */}
          <Route exact path="/razdel/mainTest" element={<Test />} />
        </Routes>
      </Router>
      <div className="theme">
        <div className='gradient' />
      </div>
    </div>
  );
}

export default App;

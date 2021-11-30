import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import WeatherForecast from './WeatherForecast';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<WeatherForecast/>} path='/'/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

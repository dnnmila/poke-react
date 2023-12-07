//import Style 
import "./styles/app.scss";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//ading components
import StartGame from "./components/StartGame";
import AllPlayersPage from "./components/AllPlayersPage";








function App() {
return (
  <Router>
    <div className="App">
    <Routes>
        <Route path="/" element={<StartGame />} />
        <Route path="/game" element={<AllPlayersPage  />} />
    </Routes>
  </div>
</Router>
);
}

export default App;

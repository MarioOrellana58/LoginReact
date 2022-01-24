import Parse from 'parse/dist/parse.min.js';
import Login from './Login';
import SignUp from './SignUp';
import NewBloodRequest from './NewBloodReq';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

localStorage.clear();


function App() {

  return (
    <Router>
      <div className="App">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="SignUp" element={<SignUp />} />
            <Route path="NewBloodRequest" element={<NewBloodRequest />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

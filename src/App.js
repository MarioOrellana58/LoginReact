import Parse from 'parse/dist/parse.min.js';
import Login from './Login';
import SignUp from './SignUp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="SignUp" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

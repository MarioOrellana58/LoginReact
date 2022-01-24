import Parse from 'parse/dist/parse.min.js';
import Login from './Login';
import SignUp from './SignUp';
import NewBloodRequest from './NewBloodReq';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

localStorage.clear();
// Your Parse initialization configuration goes here
const PARSE_APPLICATION_ID = process.env.REACT_APP_PARSE_APPLICATION_ID;
const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
const PARSE_JAVASCRIPT_KEY = process.env.REACT_APP_PARSE_JAVASCRIPT_KEY;
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;

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

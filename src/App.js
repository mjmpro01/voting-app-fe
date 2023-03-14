import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const user = JSON.parse(localStorage.getItem('user'));
  return (
    <Router>
      <Routes>
        <Route path="/login" element={ <LoginPage/> } />
        <Route path="/signup" element={ <SignupPage/>} />
        {/* <PrivateRoute path="/dashboard" element={ < Dashboard /> } user={user}/> */}
        {/* <Navigate from="/" to="/login" /> */}
      </Routes>
    </Router>
  );
}

export default App;

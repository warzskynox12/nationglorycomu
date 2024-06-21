import { Routes , Route} from 'react-router-dom';
import Home from './composant/HomePage/HomePage';
import Auth from './composant/AuthPage/AuthPage';
import Profile from './composant/Profile/ProfilePage';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/nationglorycomu/" element={<Home />} />
        <Route path="/nationglorycomu/auth" element={<Auth />} />
        <Route path="/nationglorycomu/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
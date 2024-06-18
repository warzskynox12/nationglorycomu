import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <Outlet />
      </div>
    </div>
  )
}

export default App
// src/App.jsx
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      {/* A Navbar component will go here later */}
      <main>
        {/* The Outlet is where the router will render your page components */}
        <Outlet />
      </main>
    </div>
  )
}

export default App
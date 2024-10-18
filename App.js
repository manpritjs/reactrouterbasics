import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

// Home component
const Home = () => {
  return <h2>Welcome to the Home Page</h2>;
};

// AboutMe component
const AboutMe = () => {
  return <h2>About Me Page</h2>;
};

// MyPeople component
const MyPeople = () => {
  return <h2>My People Page</h2>;
};

// App component with routing
function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about-me">About Me</Link>
          </li>
          <li>
            <Link to="/my-people">My People</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/my-people" element={<MyPeople />} />
      </Routes>
    </div>
  );
}

export default App;


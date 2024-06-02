// Routes.js
import React from 'react';
import { 
  BrowserRouter,
  RouterProvider,
  Route,
  Routes, 
  Switch,
  Link, 
  useParams,
} from "react-router-dom";


import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Projects from './pages/Projects';

const Router = () => {
  return (
      <BrowserRouter>
          {/* User pvt routes */}
          <Routes>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/resume" component={Resume} />
              <Route path="/projects" component={Projects} />
              </Routes>
        </BrowserRouter>
  );
}

export default Routes;

import React from 'react';
import Navbar from './Component/Navbar';
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';
import Home from './Component/pages';
import About from './Component/pages/about';
import contact from './Component/pages/contact';
import Blogs from './Component/pages/blogs';
import SignUp from './Component/pages/signup';


function App() {
  return (
    <div>
    {/* header */}
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={contact} />
        <Route path='/blogs' component={Blogs} />
        <Route path='/signup' component={SignUp} />
      </Routes>
    </Router>



    </div>
  );
}

export default App;

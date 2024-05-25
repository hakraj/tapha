import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.tsx';
import Explore from './pages/Explore.tsx'
import Blog from './pages/Blog.tsx';
import BlogPage from './pages/BlogPage.tsx';
// import NoPage from './pages/NoPage.tsx';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path='explore' element={<Explore />} />
        <Route path='blog' element={<Blog />} />
        <Route path='/blog/:id' element={<BlogPage />} />
        {/* <Route path='*' element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

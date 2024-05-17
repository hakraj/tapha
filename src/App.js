import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.tsx';
import Blog from './pages/Blog.tsx';
// import NoPage from './pages/NoPage.tsx';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path='blog' element={<Blog />} />
        {/* <Route path='*' element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

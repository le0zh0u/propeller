import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Compass from './pages/Compass';
import Access from './pages/Access';
import Growth from './pages/Growth';
import OurStory from './pages/OurStory';

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/compass" element={<Compass />} />
        <Route path="/access" element={<Access />} />
        <Route path="/growth" element={<Growth />} />
        <Route path="/our-story" element={<OurStory />} />
      </Route>
    </Routes>
  );
}

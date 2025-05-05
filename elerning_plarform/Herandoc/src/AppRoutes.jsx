import { Routes, Route } from 'react-router-dom';
import Home from './pages';
import SobreMi from './pages/SobreMi';
import TestFirebase from './pages/TestFirebase';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre-mi" element={<SobreMi />} />
      <Route path="/test-firebase" element={<TestFirebase />} />
    </Routes>
  );
}
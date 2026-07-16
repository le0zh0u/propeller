import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import FooterSection from '../sections/FooterSection';

export default function MainLayout() {
  return (
    <div className="relative min-h-screen bg-[#0a0f1a]">
      {/* Global Grid Pattern */}
      <div
        className="fixed inset-0 pointer-events-none z-[1]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      <Navbar />
      <main className="relative z-[2]">
        <Outlet />
      </main>
      <div className="relative z-[2]">
        <FooterSection />
      </div>
    </div>
  );
}

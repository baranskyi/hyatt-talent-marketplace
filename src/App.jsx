import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import BrowseShifts from './pages/BrowseShifts';
import ShiftDetails from './pages/ShiftDetails';
import WorkerProfile from './pages/WorkerProfile';
import MyShifts from './pages/MyShifts';
import AdminDashboard from './pages/AdminDashboard';

function AppContent() {
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  return (
    <div className="min-h-screen bg-gray-50">
      {!isLandingPage && <Navbar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/shifts" element={<BrowseShifts />} />
        <Route path="/shifts/:id" element={<ShiftDetails />} />
        <Route path="/profile" element={<WorkerProfile />} />
        <Route path="/my-shifts" element={<MyShifts />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: '#fff',
            color: '#1C3144',
            padding: '16px',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          },
        }}
      />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;

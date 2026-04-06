import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import './App.css';
import { Navbar, Footer } from './components';

const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const ServicesPage = lazy(() => import('./pages/ServicesPage').then(m => ({ default: m.ServicesPage })));
const ProgramsPage = lazy(() => import('./pages/ProgramsPage').then(m => ({ default: m.ProgramsPage })));
const InsightsPage = lazy(() => import('./pages/InsightsPage').then(m => ({ default: m.InsightsPage })));
const Donations = lazy(() => import('./pages/Donations').then(m => ({ default: m.Donations })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));
const AITraining = lazy(() => import('./pages/services/AITraining').then(m => ({ default: m.AITraining })));
const CorporateTraining = lazy(() => import('./pages/services/CorporateTraining').then(m => ({ default: m.CorporateTraining })));
const TechSolutions = lazy(() => import('./pages/services/TechSolutions').then(m => ({ default: m.TechSolutions })));
const CommunityOutreach = lazy(() => import('./pages/services/CommunityOutreach').then(m => ({ default: m.CommunityOutreach })));
const FutureCode = lazy(() => import('./pages/FutureCode').then(m => ({ default: m.FutureCode })));
const IntelligentBusiness = lazy(() => import('./pages/IntelligentBusiness').then(m => ({ default: m.IntelligentBusiness })));
const HighSchoolClub = lazy(() => import('./pages/HighSchoolClub').then(m => ({ default: m.HighSchoolClub })));

// Helper component to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#F4F6F8' }}>
        <Navbar />
        
        <main style={{ flex: 1 }}>
          <Suspense fallback={<div style={{ minHeight: '60vh' }} />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/insights" element={<InsightsPage />} />
            <Route path="/donations" element={<Donations />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Individual Service Pages */}
            <Route path="/services/ai-training" element={<AITraining />} />
            <Route path="/services/corporate-training" element={<CorporateTraining />} />
            <Route path="/services/tech-solutions" element={<TechSolutions />} />
            <Route path="/services/community-outreach" element={<CommunityOutreach />} />
            
            {/* Program Routes */}
            <Route path="/programs/future-code" element={<FutureCode />} />
            <Route path="/programs/intelligent-business" element={<IntelligentBusiness />} />
            <Route path="/programs/high-school-club" element={<HighSchoolClub />} />
          </Routes>
          </Suspense>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

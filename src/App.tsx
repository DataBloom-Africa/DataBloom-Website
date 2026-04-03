import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';
import { Navbar, Footer } from './components';
import { Home, About, ServicesPage, ProgramsPage, InsightsPage, Donations, Contact, AITraining, CorporateTraining, TechSolutions, CommunityOutreach, FutureCode, IntelligentBusiness, HighSchoolClub } from './pages';

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
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import AdminLogin from './pages/admin/Login';
import AdminDashboard from './pages/admin/Dashboard';
import BlogForm from './pages/admin/BlogForm';
import { PromotionalProvider, usePromotional } from './contexts/PromotionalContext';
import { ContentProvider } from './contexts/ContentContext';
import PromotionalBanner from './components/PromotionalBanner';
import ScrollToTop from './components/ScrollToTop';

function AppContent() {
  const { showPromotion, togglePromotion } = usePromotional();

  useEffect(() => {
    showPromotion('Use code', 'BIFC50');
    togglePromotion(false);
  }, [showPromotion, togglePromotion]);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-background-main flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/new-blog" element={<BlogForm />} />
            <Route path="/admin/edit-blog/:id" element={<BlogForm />} />
          </Routes>
        </main>
        <Footer />
        <PromotionalBanner />
        <Toaster position="top-right" />
      </div>
    </Router>
  );
}

function App() {
  return (
    <HelmetProvider>
      <ContentProvider>
        <PromotionalProvider>
          <AppContent />
        </PromotionalProvider>
      </ContentProvider>
    </HelmetProvider>
  );
}

export default App;
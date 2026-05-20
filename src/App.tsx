/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ThankYouPage from './pages/ThankYouPage';
import WhatsAppButton from './components/layout/WhatsAppButton';

function PageViewTracker() {
  const location = useLocation();

  useEffect(() => {
    // Ensure dataLayer exists
    const dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer = dataLayer;

    // Push standard virtual pageview event for SPA page tracking
    dataLayer.push({
      event: 'virtual_pageview',
      page_path: location.pathname + location.search,
      page_title: document.title || 'فستق للتسويق'
    });
  }, [location]);

  return null;
}

export default function App() {
  return (
    <Router>
      <PageViewTracker />
      <div className="relative">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
        </Routes>
        <WhatsAppButton />
      </div>
    </Router>
  );
}


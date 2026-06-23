import { Routes, Route, useLocation, BrowserRouter } from 'react-router';
import Home from '../Pages/Home/Home';
import { useEffect } from 'react';
import Alliances from '../Pages/Alliances/Alliances';
import NotFound from '../Pages/NotFound/NotFound';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

function MainRouters() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/aliancas" element={<Alliances />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  );
}

export default MainRouters;
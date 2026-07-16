import { useEffect } from 'react';
import { Routes, Route, useLocation, BrowserRouter } from 'react-router';
import { Home, Engagement, Glasses, Makeup, Earrings, NotFound, PageProduct } from '../exports';

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
        <Route path="/product/aliancas" element={<Engagement />} />
        <Route path="/product/oculos" element={<Glasses />} />
        <Route path="/product/maquiagem" element={<Makeup />} />
        <Route path="/product/brincos" element={<Earrings />} />
        <Route path="/product/:category/:id" element={<PageProduct />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  );
}

export default MainRouters;
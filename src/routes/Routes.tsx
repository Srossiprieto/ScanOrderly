import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Skeleton from '../components/Skeleton/Skeleton';

const Home = lazy(() => import('../pages/home/Home'));
const About = lazy(() => import('../pages/about/About'));
const Error = lazy(() => import('../pages/error/Error'));
const Contact = lazy(() => import('../pages/contact/Contact'));
const Pricing = lazy(() => import('../pages/Pricing/Pricing'));
const ServicesPage = lazy(() => import('../pages/servicesPage/ServicesPage'));

const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={<Skeleton/>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/pricing" element={<Pricing/>} />
        <Route path="/services" element={<ServicesPage/>} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
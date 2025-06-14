"use client";
import React from 'react';
import { useEffect } from 'react';

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  // Implement smooth scrolling
  useEffect(() => {
    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const href = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
        if (!href) return;

        const targetElement = document.querySelector(href);
        if (!targetElement) return;

        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.scrollY,
          behavior: 'smooth'
        });
      });
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function(e) {});
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {children}
    </div>
  );
};

export default MainLayout;
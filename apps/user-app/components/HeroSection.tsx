import React from 'react';
import BackgroundGradient from './ui/BackgroundGradient';
import Button from './ui/Button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <BackgroundGradient className="min-h-screen w-full flex items-center justify-center">
      <section className="w-full max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-prose text-center">
          <div className="mb-6">
            <span className="inline-flex items-center px-3 py-1 text-sm font-medium text-indigo-700 rounded-full bg-indigo-50 border border-indigo-100">
              Your Money, Simplified
            </span>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl tracking-tight">
            Simplify your payments with a modern wallet built for
            <div className="relative inline-block mt-2">
              <span className="relative z-10 text-indigo-600"> speed, security, </span>
              <div className="absolute bottom-1 left-0 right-0 h-3 bg-indigo-100 -z-10 transform -skew-x-12"></div>
            </div>
            <span> and simplicity</span>
          </h1>

          <p className="mt-6 text-lg text-pretty text-gray-700 sm:text-xl/relaxed max-w-2xl mx-auto">
            Send, receive, and manage your funds seamlessly with our secure and user-friendly wallet app. Enjoy instant transfers, smart insights, and total control — all in one place.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 sm:mt-10">
            <Button href="#" variant="primary" className="group">
              <span className="flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Button>

            <Button href="#" variant="secondary">
              Learn More
            </Button>
          </div>
          
          <div className="mt-12 flex justify-center">
            <div className="flex items-center space-x-4">
              <div className="flex -space-x-2">
                <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg" alt="User" />
                <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg" alt="User" />
                <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg" alt="User" />
              </div>
              <span className="text-sm text-gray-600">Join 10,000+ users already using our platform</span>
            </div>
          </div>
        </div>
      </section>
    </BackgroundGradient>
  );
};

export default HeroSection;
import React from 'react';
import BackgroundGradient from './ui/BackgroundGradient';
import { Star } from 'lucide-react';

const testimonials = [
  {
    content: "This wallet app has completely transformed how I manage my finances. The interface is intuitive and the features are exactly what I needed.",
    author: "Sarah Johnson",
    role: "CEO at TechStart",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
  },
  {
    content: "The security features give me peace of mind, and the instant transfers are a game-changer for our business operations.",
    author: "Michael Chen",
    role: "Financial Director",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
  },
  {
    content: "I've tried many wallet apps, but this one stands out with its analytics and team management features. Highly recommended!",
    author: "Emily Rodriguez",
    role: "Startup Founder",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
  }
];

const TestimonialsSection = () => {
  return (
    <BackgroundGradient className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by Thousands of Users
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="relative bg-white shadow-lg rounded-2xl p-8">
                <div className="flex gap-1 text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700">
                  <p>"{testimonial.content}"</p>
                </blockquote>
                <div className="mt-6 flex items-center gap-4">
                  <img
                    className="h-12 w-12 rounded-full object-cover"
                    src={testimonial.image}
                    alt={testimonial.author}
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BackgroundGradient>
  );
};

export default TestimonialsSection;
import React from 'react';
import { Wallet, Zap, Shield, PieChart, ArrowUpRight, Users } from 'lucide-react';
import BackgroundGradient from './ui/BackgroundGradient';

const features = [
  {
    icon: Wallet,
    title: "Smart Wallet Management",
    description: "Manage multiple currencies and assets in one secure place with real-time tracking and insights."
  },
  {
    icon: Zap,
    title: "Instant Transfers",
    description: "Send and receive payments instantly with zero delays and minimal transaction fees."
  },
  {
    icon: Shield,
    title: "Bank-Grade Security",
    description: "Your funds are protected with military-grade encryption and multi-factor authentication."
  },
  {
    icon: PieChart,
    title: "Advanced Analytics",
    description: "Track your spending patterns and get personalized insights to optimize your finances."
  },
  {
    icon: Users,
    title: "Team Accounts",
    description: "Create shared wallets for your team with customizable permissions and roles."
  },
  {
    icon: ArrowUpRight,
    title: "Seamless Integration",
    description: "Connect with your favorite apps and services through our robust API ecosystem."
  }
];

const FeaturesSection = () => {
  return (
    <BackgroundGradient className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Everything you need</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Smart Features for Modern Finance
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Experience the future of digital payments with our comprehensive suite of features designed for modern businesses and individuals.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  {feature.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a href="#" className="text-sm font-semibold leading-6 text-indigo-600">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </BackgroundGradient>
  );
};

export default FeaturesSection;
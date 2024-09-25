import React from 'react';

const Loader = ({ status }) => {
  return (
    <div
      aria-label="Loading..."
      role="status"
      className="flex items-center justify-center space-x-2 pt-20"
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <svg
        className="h-20 w-20 animate-spin stroke-gray-500 hover:stroke-blue-500 transition-colors duration-300 ease-in-out sm:h-16 sm:w-16 md:h-24 md:w-24"
        viewBox="0 0 256 256"
      >
        <line x1="128" y1="32" x2="128" y2="64" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24" />
        <line x1="195.9" y1="60.1" x2="173.3" y2="82.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24" />
        <line x1="224" y1="128" x2="192" y2="128" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24" />
        <line x1="195.9" y1="195.9" x2="173.3" y2="173.3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24" />
        <line x1="128" y1="224" x2="128" y2="192" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24" />
        <line x1="60.1" y1="195.9" x2="82.7" y2="173.3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24" />
        <line x1="32" y1="128" x2="64" y2="128" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24" />
        <line x1="60.1" y1="60.1" x2="82.7" y2="82.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24" />
      </svg>
      <span className="text-3xl font-semibold text-gray-500 sm:text-2xl md:text-4xl transition-colors duration-300">
        {status}
      </span>
    </div>
  );
};

export default Loader;

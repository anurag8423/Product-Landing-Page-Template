import React, { useState, useEffect } from "react";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`fixed top-0 left-0 w-full h-full z-50 flex flex-col items-center justify-center min-h-screen min-w-full bg-white dark:bg-gray-900 transition-all duration-[2000ms] ease-in-out ${loading ? '' : 'opacity-0 invisible'}`}>
      <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-b-4 border-blue-500"></div>
      <p className="mt-12 text-xl text-gray-900 dark:text-white">BharatTech - Tech Ecosystem</p>
    </div>
  );
};

export default Preloader;

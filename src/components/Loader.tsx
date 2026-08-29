import { useEffect, useState } from 'react';

function Loader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setFadeOut(true);

      setTimeout(() => {
        setLoading(false);
      }, 500);
    };

    // If everything has already loaded before this component mounted
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  if (!loading) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center justify-center">
        {/* Spinner */}
        <div className="relative h-16 w-16">
          <div className="absolute inset-0 rounded-full border-4 border-gray-800"></div>

          <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-white"></div>
        </div>

        {/* Loading text */}
        <p className="mt-6 text-sm tracking-[0.3em] text-gray-400">
          LOADING
        </p>
      </div>
    </div>
  );
}

export default Loader;
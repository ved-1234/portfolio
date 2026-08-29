import { useEffect, useState } from "react";

interface LoaderProps {
  projectsLoaded: boolean;
  certificationsLoaded: boolean;
}

function Loader({
  projectsLoaded,
  certificationsLoaded,
}: LoaderProps) {
  const [pageLoaded, setPageLoaded] = useState(false);
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const handleWindowLoad = () => {
      setPageLoaded(true);
    };

    if (document.readyState === "complete") {
      setPageLoaded(true);
    } else {
      window.addEventListener("load", handleWindowLoad);
    }

    return () => {
      window.removeEventListener("load", handleWindowLoad);
    };
  }, []);

  useEffect(() => {
    /*
      Loader remains until:

      1. Browser resources are loaded
      2. Projects API is finished
      3. Certifications API is finished
    */

    if (
      pageLoaded &&
      projectsLoaded &&
      certificationsLoaded
    ) {
      setFadeOut(true);

      const timer = setTimeout(() => {
        setVisible(false);
      }, 700);

      return () => clearTimeout(timer);
    }
  }, [
    pageLoaded,
    projectsLoaded,
    certificationsLoaded,
  ]);

  if (!visible) {
    return null;
  }

  return (
    <div
      className={`
        fixed
        inset-0
        z-[9999]
        flex
        items-center
        justify-center
        bg-black/35
        backdrop-blur-[1px]
        transition-opacity
        duration-700
        ${
          fadeOut
            ? "opacity-0"
            : "opacity-100"
        }
      `}
    >
      <div className="flex flex-col items-center justify-center">

        {/* Spinner */}
        <div className="relative h-20 w-20">

          {/* Outer circle */}
          <div
            className="
              absolute
              inset-0
              rounded-full
              border-4
              border-gray-700/70
            "
          />

          {/* Animated circle */}
          <div
            className="
              absolute
              inset-0
              rounded-full
              border-4
              border-transparent
              border-t-orange-500
              animate-spin
            "
          />

        </div>

        {/* Loading text */}
        <p
          className="
            mt-6
            text-sm
            tracking-[0.4em]
            text-white
            font-medium
          "
        >
          LOADING
        </p>

      </div>
    </div>
  );
}

export default Loader;
"use client";
import { useEffect, useState } from "react";

export function useFluidTypography() {
  const [rootFontSize, setRootFontSize] = useState(0);

  useEffect(() => {
    function handleResize() {
      setRootFontSize(window.innerWidth / 10);
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return rootFontSize;
}

// export default useFluidTypography;

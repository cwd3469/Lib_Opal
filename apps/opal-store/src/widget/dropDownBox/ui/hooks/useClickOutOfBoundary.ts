import { useEffect, useRef } from "react";

export const useClickOutOfBoundary = <T extends HTMLElement = HTMLElement>(
  handler: (event: MouseEvent | TouchEvent) => void
) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler(event);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handler]);

  return { ref };
};

export default useClickOutOfBoundary;

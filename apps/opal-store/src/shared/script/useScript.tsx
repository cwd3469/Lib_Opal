import { useEffect, useState } from "react";

function useScript(src: string) {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Event | null>(null);

  useEffect(() => {
    let script = document.querySelector(`script[src="${src}"]`);

    if (!script) {
      script = document.createElement("script");
      if (script instanceof HTMLScriptElement) {
        script.src = src;
        script.async = true;
      }
    }

    const handleLoad = () => setLoading(false);
    const handleError = (error: Event) => setError(error);

    script.addEventListener("load", handleLoad);
    script.addEventListener("error", handleError);

    document.body.appendChild(script);

    return () => {
      script.removeEventListener("load", handleLoad);
      script.removeEventListener("error", handleError);
    };
  }, [src]);

  return [loading, error];
}
export default useScript;

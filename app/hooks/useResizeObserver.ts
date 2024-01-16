import { useEffect, useState } from "react";
import { ResizeObserver } from "@juggle/resize-observer";

const useResizeObserver = (ref: any) => {
  const [dimensions, setDimensions] = useState<DOMRectReadOnly | undefined>();
  useEffect(() => {
    const observeTarget = ref.current;
    const resizeObserver = new ResizeObserver(
      (entries: ResizeObserverEntry[]) => {
        entries.forEach((entry) => {
          setDimensions(entry.contentRect);
        });
      }
    );
    resizeObserver.observe(observeTarget);
    return () => {
      resizeObserver.unobserve(observeTarget);
    };
  }, [ref]);
  return dimensions;
};

export default useResizeObserver;

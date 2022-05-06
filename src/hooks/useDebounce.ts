import { useEffect, useState } from "react";

export function useDebounce<T>(data: T, delay?: number): T {
  const [innerState, setInnerState] = useState<T>(data);

  useEffect(() => {
    const timer = setTimeout(() => setInnerState(data), delay || 500);

    return () => {
      clearTimeout(timer);
    };
  }, [data, delay]);

  return innerState;
}

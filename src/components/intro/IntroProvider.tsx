"use client";

import { createContext, useCallback, useContext, useState } from "react";
import type { ReactNode } from "react";

interface IntroContextValue {
  done: boolean;
  complete: () => void;
}

const IntroContext = createContext<IntroContextValue>({
  done: true,
  complete: () => {},
});

export function useIntro() {
  return useContext(IntroContext);
}

export default function IntroProvider({ children }: { children: ReactNode }) {
  const [done, setDone] = useState(false);
  const complete = useCallback(() => setDone(true), []);
  return (
    <IntroContext.Provider value={{ done, complete }}>
      {children}
    </IntroContext.Provider>
  );
}

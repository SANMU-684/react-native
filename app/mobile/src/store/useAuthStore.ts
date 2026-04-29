import { useEffect, useState } from "react";

let token: string | null = null;
const listeners = new Set<() => void>();

function notify() {
  for (const cb of listeners) cb();
}

export function setAuthToken(nextToken: string | null) {
  token = nextToken;
  notify();
}

export function useAuthStore() {
  const [currentToken, setCurrentToken] = useState(token);

  useEffect(() => {
    const cb = () => setCurrentToken(token);
    listeners.add(cb);
    return () => {
      listeners.delete(cb);
    };
  }, []);

  return {
    token: currentToken,
    setToken: setAuthToken,
    isLoggedIn: Boolean(currentToken),
  };
}

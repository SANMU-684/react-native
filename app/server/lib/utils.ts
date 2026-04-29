export function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function pick<T extends object, K extends keyof T>(obj: T, keys: K[]) {
  const out = {} as Pick<T, K>;
  for (const k of keys) out[k] = obj[k];
  return out;
}

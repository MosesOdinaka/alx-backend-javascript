export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  let c = weakMap.get(endpoint) || 0;

  c += 1;

  weakMap.set(endpoint, c);

  if (c >= 5) throw Error('Endpoint load is high');

  return c;
}

export default function updateUniqueItems(_map) {
  if (!(_map instanceof Map)) throw Error('Cannot process');
  _map.forEach((x, y) => {
    if (x === 1) _map.set(y, 100);
  });

  return _map;
}

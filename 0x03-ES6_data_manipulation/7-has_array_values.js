export default function hasValuesFromArray(_set, array) {
  return array.map((x) => _set.has(x)).reduce((x, y) => (!!y), false);
}

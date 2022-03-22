export function limitLength(str: string, len = 20) {
  const END_PART_SIZE = 4;
  if (str.length < len) return str;

  const ext = str.split('.').at(-1);
  const name = str.split('.').slice(0, -1).join('.');

  return (
    name.slice(0, len - END_PART_SIZE) +
    '...' +
    name.slice(-END_PART_SIZE) +
    '.' +
    ext
  );
}

export default function repeat(value, count) {
  return Array.from({ length: count }, () => value)
}

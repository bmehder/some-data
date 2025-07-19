export default function randomList(n = 5) {
  const arr = Array.from({ length: n }, (_, i) => i + 1)
  return arr.sort(() => Math.random() - 0.5)
}

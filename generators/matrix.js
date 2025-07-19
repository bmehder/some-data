export default function matrix(rows, cols) {
  return Array.from({ length: rows }, (_, i) =>
    Array.from({ length: cols }, (_, j) => i * cols + j)
  )
}

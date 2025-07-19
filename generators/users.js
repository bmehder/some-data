const names = ['Alice', 'Bob', 'Charlie', 'Dana', 'Eli']

export default function users(n, opts = {}) {
  const startId = opts.startId || 1
  return Array.from({ length: n }, (_, i) => ({
    id: startId + i,
    name: names[i % names.length]
  }))
}

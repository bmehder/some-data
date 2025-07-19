export default function range(start = 1, stop, step = 1) {
	if (stop === undefined) {
		// Only one arg: range(stop)
		stop = start
		start = 0
	}

	const length = Math.max(Math.ceil((stop - start) / step), 0)

	return Array.from({ length }, (_, i) => start + i * step)
}

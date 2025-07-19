# @bmehder/somedata

**Quick-use structured data for testing, demos, and functional programming.**

No setup, no dependencies — just import and go.

---

## 🚀 Installation

```bash
npm install @bmehder/somedata
```

Or use via CDN (ESM-compatible):

```html
<script type="module">
  import { list, obj } from 'https://unpkg.com/@bmehder/somedata/index.js'
  console.log(list, obj)
</script>
```

---

## 📦 Usage

### Import everything

```js
import * as data from '@bmehder/somedata'

console.log(data.list)
console.log(data.range(3))
console.log(data.random.obj())
```

### Destructure what you need

```js
import { list, obj, users, random } from '@bmehder/somedata'

console.log(list)
console.log(users(3))
console.log(random.list())
```

### Alias the random imports

```js
import { random as r } from '@bmehder/somedata'

console.log(r.obj())
console.log(r.list())
```

---

## 🔢 Exports

### Static values

- `list` – `[1, 2, 3, 4, 5]`
- `obj` – `{ id: 1, name: 'Test', active: true }`
- `nested` – `{ a: { b: { c: 42 } } }`
- `entries` – `[['a', 1], ['b', 2],...]`
- `tree` – Tree-structured nested object

### Generators

- `range(stop)` – `[0, 1, ..., stop - 1]`
- `range(start, stop)` – `[start, ..., stop - 1]`
- `range(start, stop, step)` – With step
- `repeat(value, count)` – Repeat any value
- `matrix(rows, cols)` – 2D array
- `users(n)` – Sample user objects (Alice, Bob, ...)

### Random (non-deterministic)

```js
random.list()  // e.g. [4, 2, 1, 5, 3]
random.obj()   // e.g. { id: 57, name: 'Nina' }
```

---

## ✅ Why use somedata?

- 🧪 Great for REPLs, demos, and playgrounds
- 🎯 Predictable and reusable shapes
- ⚡  No need to fetch or parse JSON

---

## 🪄 License

MIT
# some-data

// Static data
export { default as list } from './static/list.js'
export { default as obj } from './static/obj.js'
export { default as nested } from './static/nested.js'
export { default as entries } from './static/entries.js'
export { default as tree } from './static/tree.js'

// Generators
export { default as range } from './generators/range.js'
export { default as repeat } from './generators/repeat.js'
export { default as matrix } from './generators/matrix.js'
export { default as users } from './generators/users.js'

// Random variants
import * as randomList from './random/list.js'
import * as randomObj from './random/obj.js'

export const random = {
  list: randomList.default,
  obj: randomObj.default
}

// index.d.ts

export const list: number[]
export const obj: { id: number; name: string; active: boolean }
export const nested: { a: { b: { c: number } } }
export const entries: [string, number][]
export const tree: Array<{ id: number; children: any[] }>

export function range(start: number, stop?: number, step?: number): number[]
export function repeat<T>(value: T, count: number): T[]
export function matrix(rows: number, cols: number): number[][]
export function users(n: number, opts?: { startId?: number }): Array<{ id: number; name: string }>

export const random: {
  list(n?: number): number[]
  obj(): { id: number; name: string }
}

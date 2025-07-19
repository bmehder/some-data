const randName = () => {
  const pool = ['Lando', 'Lewis', 'Oscar', 'Alex', 'Max']
  return pool[Math.floor(Math.random() * pool.length)]
}

export default function randomObj() {
  return {
    id: Math.floor(Math.random() * 100),
    name: randName()
  }
}

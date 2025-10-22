import { useState } from 'react'
import { Greeting } from '../components/Greeting'

export default function Home() {
  const [name, setName] = useState('')

  return (
    <div className="p-6 max-w-md mx-auto space-y-4">
      <input
        className="border p-2 rounded w-full"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Greeting name={name} />
    </div>
  )
}

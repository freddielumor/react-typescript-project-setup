import { useState } from 'react'

interface GreetingProps {
  name: string
}

export const Greeting = ({ name }: GreetingProps) => {
  const [visible, setVisible] = useState(true)

  return (
    <div className="p-4 border rounded bg-gray-50">
      {visible && (
        <h2 className="text-lg font-semibold text-black">
          Hello, {name || 'friend'}!
        </h2>
      )}
      <button
        onClick={() => setVisible((v) => !v)}
        className="mt-2 bg-blue-500 text-white px-3 py-1 rounded"
      >
        {visible ? 'Hide' : 'Show'}
      </button>
    </div>
  )
}

import { useEffect, useState } from 'react'

export const TabTitleCounter = () => {
  const [count, setCount] = useState<number>(0)

  const documentTitle = `Count: ${count}`

  useEffect(() => {
    document.title = `Count: ${count}`
    console.log(`Document title updated → Count: ${count}`)

    // Cleanup runs before the next effect or unmount
    return () => {
      console.log('Cleaning up previous title effect...')
    }
  }, [documentTitle, count])

  useEffect(() => {
    console.log('Mounted')
    return () => {
      console.log('Unmounted')
    }
  }, [])

  return (
    <div className="max-w-md flex gap-3">
      <button
        onClick={() => setCount((c) => c + 1)}
        className="mt-2 bg-blue-500 text-white px-3 py-1 rounded"
      >
        +
      </button>

      <button
        onClick={() => setCount((c) => c - 1)}
        className="mt-2 bg-blue-500 text-white px-3 py-1 rounded"
      >
        -
      </button>
    </div>
  )
}

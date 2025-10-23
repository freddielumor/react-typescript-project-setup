import React, { useEffect, useState } from 'react'
import { UserCard } from '../components/UserCard'

interface UserData {
  id: number
  name: string
  email: string
  company: {
    name: string
  }
}

export const UserDirectory = () => {
  const USER_DATA = 'https://jsonplaceholder.typicode.com/users'

  const [userData, setUserData] = useState<UserData[]>([])
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [filteredUsers, setFilteredUsers] = useState<UserData[]>([])
  const [searchValue, setSearchValue] = useState<string>('')

  const handleSearchUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase()
    setSearchValue(value)

    const filteredData = userData.filter((user) =>
      user.name.toLocaleLowerCase().includes(value)
    )

    setFilteredUsers(filteredData)
  }

  useEffect(() => {
    ;(async () => {
      try {
        setLoading(true)
        const res = await fetch(USER_DATA)
        if (!res.ok) throw new Error('Data Fetch Error')
        const data: UserData[] = await res.json()
        setUserData(data)
      } catch (err) {
        setError((err as Error).message)
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  const usersToDisplay =
    searchValue.trim().length > 0 ? filteredUsers : userData

  if (error) {
    return <p>NO DATA</p>
  }

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <div className="wrapper">
      <h1>User Directory</h1>

      <div className="search-field-wrapper">
        <input
          type="text"
          name="user-sarch"
          value={searchValue}
          onChange={handleSearchUsername}
          placeholder="Search User Names"
          className="border p-2 rounded w-full mb-4 mt-10"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {usersToDisplay.length > 0 ? (
          usersToDisplay.map((item) => <UserCard key={item.id} {...item} />)
        ) : (
          <p className="text-gray-500">No users found.</p>
        )}
      </div>
    </div>
  )
}

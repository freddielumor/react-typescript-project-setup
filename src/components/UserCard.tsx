import React from 'react'

interface UserCardProps {
  id: number
  name: string
  email: string
  company: {
    name: string
  }
}

export const UserCard = ({ id, name, email, company }: UserCardProps) => {
  return (
    <div className="border border-gray-300 rounded-md p-4 shadow">
      <div>ID: {id}</div>
      <div>Name: {name}</div>
      <div>Email: {email}</div>
      <div>Company Name: {company.name}</div>
    </div>
  )
}

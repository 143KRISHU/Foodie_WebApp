import React from 'react'
import {Link} from "react-router-dom"
export default function Header() {
  return (
    <div className='border-b-2 border-b-blue-500 py-6'>
      <div className='container mx-auto flex
      justify-between items-center'>
            <Link className="text-3xl font-bold tracking-tight
            text-black-500">Foodie</Link>
      </div>
    </div>
  )
}

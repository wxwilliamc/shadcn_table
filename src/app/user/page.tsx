import React from 'react'
import { UserDataTable } from './data-table'
import { userData } from '../userData'
import { columns } from './columns'

const User = () => {

  return (
    <div className='container mx-auto py-10'>
        <UserDataTable columns={columns} data={userData}/>
    </div>
  )
}

export default User
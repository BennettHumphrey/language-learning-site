


import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation';
import React from 'react'
import ProtectedTest from '../../components/ProtectedTest';

const ProtectedRoute = async () => {

    const session = await getServerSession();
    if(!session || !session.user){
        redirect("/api/auth/signin")
    }

  return (
    <div>
      <ProtectedTest  />
    </div>
  )
}

export default ProtectedRoute
import React from 'react'
import EmpManage from './EmpManage/EmpManage'
import LocalStore from '../../Store/LocalStore';
import { Navigate } from 'react-router-dom';

export default function AdminStac() {
  // Determine if the user has admin privileges
  const isAdmin = () => {
    const tokenData = LocalStore.getToken();
    return tokenData && tokenData.role === 'admin';
  };
  if (!isAdmin())
    return <Navigate to={'/notallowed'} />

  return (
    <>
      {/* <EmpManage/> */}
      <h1 className='mt-5'>Admiofdsfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfn</h1>
    </>
  )
}

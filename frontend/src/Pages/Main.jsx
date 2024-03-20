import React from 'react'
import ProHeader from '../Components/ProfileHeader/ProHeader'
import Header from '../Components/Header/Header'
import Sidebar from '../Components/SideBar/Sidebar'
import UserStack from './UserStack/UserStack'
import AdminStac from './AdminStack/AdminStac'

export default function Main() {
    return (
        <>
            <Header />
            <Sidebar />

            {/* outlet for admin/user */}
            <UserStack/>
            {/* <AdminStac/> */}
        </>
    )
}

import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Authenticate from '../../Store/Authenticate'
import Toaster from '../../Utils/Constants/Toaster'
import { ToastContainer } from 'react-toastify'

export default function Sidebar() {
    const navigate = useNavigate()
    return (
        <aside className="left-sidebar shadow-sm">
            {/* Sidebar scroll*/}
            <div>
                <div className="brand-logo d-flex align-items-center justify-content-between">
                    <NavLink to={'/main/dashboard'} className="text-nowrap logo-img">
                        <img src={'logo'} alt='logo' width={180} />
                    </NavLink>
                    <div className="close-btn d-xl-none d-block sidebartoggler cursor-pointer" id="sidebarCollapse">
                        <i className="ti ti-x fs-8" />
                    </div>
                </div>
                {/* Sidebar navigation*/}
                <nav className="sidebar-nav scroll-sidebar" data-simplebar>
                    <ul id="sidebarnav" className="h-100 my-0 overflow-hidden">
                        <li className="nav-small-cap">
                            <i className="ti ti-dots nav-small-cap-icon fs-4" />
                            <span className="hide-menu">Home</span>
                        </li>
                        <li className="sidebar-item">
                            <NavLink to={'/main/dashboard'} className="sidebar-link" aria-expanded="false" end={true}>
                                <span>
                                    <i className="ti ti-layout-dashboard" />
                                </span>
                                <span className="hide-menu">Dashboard</span>
                            </NavLink>
                        </li>
                        <li className="sidebar-item">
                            <NavLink to={'/main/user'} className="sidebar-link" aria-expanded="false">
                                <span>
                                    <i className="ti ti-user" />
                                </span>
                                <span className="hide-menu">User Management</span>
                            </NavLink>
                        </li>
                        <li className="sidebar-item">
                            <NavLink to={'/main/payment'} className="sidebar-link" aria-expanded="false">
                                <span>
                                    <i className="ti ti-cash" />
                                </span>
                                <span className="hide-menu">Payment Management</span>
                            </NavLink>
                        </li>
                        <li className="sidebar-item">
                            <NavLink to={'/main/inventory'} className="sidebar-link" aria-expanded="false">
                                <span>
                                    <i className="ti ti-building-warehouse" />
                                </span>
                                <span className="hide-menu">Inventory Management</span>
                            </NavLink>
                        </li>
                        <li className="sidebar-item">
                            <NavLink to={'/main/staff'} className="sidebar-link" aria-expanded="false">
                                <span>
                                    <i className="ti ti-users" />
                                </span>
                                <span className="hide-menu">Staff Management</span>
                            </NavLink>
                        </li>
                        <li className="nav-small-cap">
                            <i className="ti ti-dots nav-small-cap-icon fs-4" />
                            <span className="hide-menu">AUTH</span>
                        </li>
                        <li className="sidebar-item">
                            <NavLink to={'/main/profile/account'} className="sidebar-link" aria-expanded="false">
                                <span>
                                    <i className="ti ti-user-plus" />
                                </span>
                                <span className="hide-menu">My Profile</span>
                            </NavLink>
                        </li>
                        <li className="sidebar-item">
                            <button type='button' onClick={() => {
                                Toaster.justToast( 'info',"   Logging You Out ......", () => {
                                    Authenticate.logoutUser();
                                    navigate('/')
                                })
                            }} className="sidebar-link bg-transparent border-0" aria-expanded="false">
                                <span>
                                    <i className="ti ti-login" />
                                </span>
                                <span className="hide-menu">Logout</span>
                            </button>
                        </li>
                    </ul>
                </nav>
                {/* End Sidebar navigation */}
            </div>
            {/* End Sidebar scroll*/}
            <ToastContainer />
        </aside>

    )
}

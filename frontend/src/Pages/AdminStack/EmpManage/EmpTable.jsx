import React from 'react'

export default function EmpTable() {
    return (
        <>
            {
                loading ? (
                    <div className='d-flex justify-content-center align-items-center my-3'>
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden m-auto"></span>
                        </div>
                    </div>
                ) : (
                    <table className="table mb-0 align-middle">
                        <thead className="text-dark fs-4" >
                            <tr>
                                <th className="border-bottom-0" >
                                    <h6 className="fw-semibold mb-0">Pic</h6>
                                </th>
                                <th className="border-bottom-0" >
                                    <h6 className="fw-semibold mb-0">Email</h6>
                                </th>
                                <th className="border-bottom-0" >
                                    <h6 className="fw-semibold mb-0">Name</h6>
                                </th>
                                <th className="border-bottom-0" >
                                    <h6 className="fw-semibold mb-0">Telephone</h6>
                                </th>
                                <th className="border-bottom-0" >
                                    <h6 className="fw-semibold mb-0">Role</h6>
                                </th>
                                <th className="border-bottom-0" >
                                    <h6 className="fw-semibold mb-0">Gender</h6>
                                </th>
                                <th className="border-bottom-0" >
                                    <h6 className="fw-semibold mb-0">Added</h6>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr key={''}>
                                <td className="border-bottom-0" >
                                    <img src={''} alt="prologo" width={30} height={30} className="rounded-circle" style={{ cursor: "pointer" }} />
                                </td>
                                <td className="border-bottom-0" >
                                    <p className="fw-normal mb-1">user.email</p>
                                </td>
                                <td className="border-bottom-0" >
                                    <p className="fw-normal mb-1">user.name</p>
                                </td>
                                <td className="border-bottom-0" >
                                    <p className="mb-0 fw-normal">+94 user.telephone</p>
                                </td>
                                <td className="border-bottom-0" >
                                    <p className="mb-0 fw-normal">user.role</p>
                                </td>
                                <td className="border-bottom-0" >
                                    <p className="fw-normal mb-0">user.gender</p>
                                </td>
                                {/* <td className="border-bottom-0">
                                    <div data-bs-toggle="dropdown" className='bg-warning rounded-2 p-1 d-flex justify-content-center align-items-center' style={{ fontSize: "1.5rem", cursor: "pointer" }}>
                                        <i className="ti ti-eye text-white" />
                                    </div>
                                    <ul className="dropdown-menu bg-white" style={{ minWidth: "auto" }}>
                                        <li><NavLink to={`edit/${user.email}`} className="dropdown-item" >Edit</NavLink></li>
                                        <li><button type='button' onClick={() => {
                                            handleUserDelete(user.email)
                                        }} className="dropdown-item" >Delete</button></li>
                                    </ul>
                                </td> */}
                            </tr>
                        </tbody>
                    </table>
                )
            }
        </>
    )
}

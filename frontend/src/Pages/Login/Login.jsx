import React, { useState } from 'react'
import { NavLink, useNavigate, Navigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

export default function Login() {
    const navigate = useNavigate()

    return (
        <>
            <div className="position-relative overflow-hidden bg-white min-vh-100 d-flex align-items-center justify-content-center">
                <div className="d-flex align-items-center justify-content-center w-100">
                    <div className="row justify-content-center w-100">
                        <div className="col-md-8 col-lg-6 col-xxl-3">
                            <div className="card mb-0 shadow-sm border">
                                <div className="card-body">
                                    <NavLink to={'/login'} className="text-nowrap logo-img text-center d-block py-3 pb-5 w-100">
                                        <img src={''} width={180} alt="loogo" />
                                    </NavLink>
                                    <p className="text-center">Admin Login</p>
                                    <form className='needs-validation' noValidate onSubmit={''}>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                                            <input
                                                type="email"
                                                name='email'
                                                className="form-control"
                                                id="exampleInputEmail1"
                                                aria-describedby="emailHelp"
                                                required />
                                            <div className="invalid-feedback">
                                                ''
                                            </div>
                                        </div>
                                        <div className="mb-0">
                                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                            <input
                                                name='password'
                                                type="password"
                                                className="form-control"
                                                id="exampleInputPassword1"
                                                required />
                                            <div className="invalid-feedback">
                                                ''
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-end mb-4">

                                            <NavLink onClick={''} className="text-primary fw-bold" >Forgot Password ?</NavLink>
                                        </div>
                                        <button type='submit' disabled={''} className="btn btn-primary w-100 py-8 fs-4 mb-4 rounded-2">Sign In</button>
                                        <div className="d-flex align-items-center justify-content-center">
                                            <p className="fs-4 mb-0 fw-bold">Admin SignUp</p>
                                            <NavLink to={'/register'} className="text-primary fw-bold ms-2">Create an account</NavLink>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>


    )
}

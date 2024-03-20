import React, { useState } from 'react'
import { NavLink, useNavigate, Navigate } from 'react-router-dom'

export default function Register() {
    
    return (
        <>
            <div className="position-relative overflow-hidden bg-white min-vh-100 d-flex align-items-center justify-content-center">
                <div className="d-flex align-items-center justify-content-center w-100">
                    <div className="row justify-content-center w-100">
                        <div className="col-md-8 col-lg-6 col-xxl-3">
                            <div className="card mb-0 shadow-sm border">
                                <div className="card-body">
                                    <NavLink to={'/register'} className="text-nowrap logo-img text-center d-block py-3 pb-5 w-100">
                                        <img src={''} width={180} alt="logo" />
                                    </NavLink>
                                    <p className="text-center">Admin Register</p>
                                    <form className='needs-validation' noValidate onSubmit={''}>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputtext1" className="form-label">Name</label>
                                            <input
                                                type="text"
                                                name="username"
                                                className="form-control"
                                                id="exampleInputtext1"
                                                aria-describedby="textHelp"
                                                required />
                                            <div className="invalid-feedback">
                                                
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">Email Address</label>
                                            <input
                                                type="email"
                                                name='email'
                                                className="form-control"
                                                id="exampleInputEmail1"
                                                aria-describedby="emailHelp"
                                                required />
                                            <div className="invalid-feedback">
                                                
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                            <input
                                                type="password"
                                                name='password'
                                                className="form-control"
                                                id="exampleInputPassword1"
                                                required />
                                            <div className="invalid-feedback">
                                                
                                            </div>
                                        </div>
                                        <button type='submit' disabled={''} className="btn btn-primary w-100 py-8 fs-4 mb-4 rounded-2">Sign Up</button>
                                        <div className="d-flex align-items-center justify-content-center">
                                            <p className="fs-4 mb-0 fw-bold">Already have an Account?</p>
                                            <NavLink className="text-primary fw-bold ms-2" to={'/login'}>Sign In</NavLink>
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

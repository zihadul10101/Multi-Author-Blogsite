import React, { useState } from 'react';
import { BsAt } from 'react-icons/bs';
import { FaLock, } from 'react-icons/fa';
import Navbar from '../home/Navbar';
import {useSelector,useDispatch} from 'react-redux';
import {admin_login} from '../../store/actions/authAction'

const AdminLogin = () => {

const dispatch = useDispatch();
const {loader,successMessage,errorMessage,userInfo,authenticated} = useSelector(state => state.adminReducer);

    const [state, setState] = useState({
        email: '',
        password: ''
    })
    const inputHendle = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    const adminLogin = (e) => {
        e.preventDefault()
        dispatch(admin_login(state))
    }
    return (
        <>
            <Navbar />
            <div className="admin_login">
                <div className="card">
                    <div className="auth">
                        <h3>Admin Login</h3>
                        <form onSubmit={adminLogin}>
                            {/* email */}
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <div className="icon-input">
                                    <div className="icon"><BsAt /></div>
                                    <input onChange={inputHendle} value={state.email} type="email" name='email' id="email" placeholder="Email" className="form-control" />

                                </div>
                            </div>
                            {/* password */}
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <div className="icon-input">
                                    <div className="icon"><FaLock /></div>
                                    <input onChange={inputHendle} value={state.password} type="password" name='password' id="password" placeholder="Password" className="form-control" />
                                </div>
                            </div>
                            {/* button */}
                            <div className="form-group">
                               {
                                   loader? 
                                   <button className="btn btn-block">
                                       <div className="spinner">
                                           <div className="spinner1"></div>
                                           <div className="spinner2"></div>
                                           <div className="spinner3"></div>
                                       </div>
                                   </button>:<button className="btn btn-block">Login</button>
                               }
                            </div>
                        </form>
                    </div>
                    <div className="image-logo">
                        <img src="http://localhost:3000/designImage/login.jpg" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminLogin;
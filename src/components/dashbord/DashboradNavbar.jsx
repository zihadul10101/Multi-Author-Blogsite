import React from 'react';
import { BsBell, BsListUl } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import AdminInfo from './AdminInfo';
import UserMessage from './UserMessage';
const DashboradNavbar = () => {
    return (
        <>
            <div className="dashborad-navbar">
                <div className="dashborad-navbar-left-side">
                    <label htmlFor="" className='dash'><span>D</span> </label>
                    <label htmlFor="" className='bar'><span> <BsListUl /> </span> </label>
                    <h2>
                        <Link to="/dashorad">Zihadul Islam</Link>
                    </h2>
                </div>
                <div className="dashborad-navbar-right-side">
                    <h2> <Link to="/">Site View</Link></h2>
                    <div className="search">
                        <input type="text" placeholder="search" className="form-control" />
                    </div>
                    <div className="user">
                        <div className="notification-messages">
                            <div className="notification">
                                <div>
                                    <span>
                                        <BsBell />
                                        <div className="nCount">5</div>
                                    </span>
                                </div>
                            </div>
                            <UserMessage />
                        </div>
                    </div>
                    <label htmlFor="adminInfo">

                    </label>
                </div>
            </div>
            <AdminInfo />
        </>
    );
};

export default DashboradNavbar;
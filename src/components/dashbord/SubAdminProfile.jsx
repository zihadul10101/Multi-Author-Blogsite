import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
const SubAdminProfile = () => {
    const user = 'admin'
    return (
        <div className='sub-admin-profile'>
            <Helmet >
                <title>
                    Sub Admin Profile
                </title>
            </Helmet>
            <div className="profile-contents">
                <div className="numOf-search-newAdd">
                    <div className="numOf">
                        <h2>profile(22)</h2>
                    </div>

                    <div className="newAdd">
                        <Link to='/dashborad/all-sub-admin' className="btn">
                            Sub Admin
                        </Link>
                    </div>
                </div>
                <div className="profile-image-artical">
                    <div className="profile-image-details">
                        <div className="image">
                            <img src="https://i.ibb.co/WpVNgJc/react-1.jpg" alt="" />

                        </div>
                        <ul className="profile-details">

                            <li>
                                <span>  Name:</span>
                                <span>Zihadul Islam</span>
                            </li>
                            {
                                user === 'admin' && <li>
                                    <span>  Email:</span>
                                    <span>Zihadul@gmail.com</span>
                                </li>
                            }
                            
                            <li>
                                <span>  Role:</span>
                                <span>Sub Admin</span>
                            </li>
                            <li>
                                <span>  Account Create:</span>
                                <span>5 jun 2022</span>
                            </li>
                            <li>
                                <span>  Article Write:</span>
                                <span>22</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubAdminProfile;
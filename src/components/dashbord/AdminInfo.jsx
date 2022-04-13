import React from 'react';
import { Link } from 'react-router-dom';

const AdminInfo = () => {
    return (
        <div className="adminInfo">
        <div className="image-email">
        <img src="https://i.ibb.co/WpVNgJc/react-1.jpg" alt="" />
        <span>Zihadul@gmail.com</span>
        </div>
        <ul>
            <li>
                <Link to='/dashborad/profile'>Profile</Link>
            </li>
        </ul>
        </div>
    );
};

export default AdminInfo;
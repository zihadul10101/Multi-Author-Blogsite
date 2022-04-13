import React from 'react';
import DashboradNavbar from './DashboradNavbar';
import Sidebar from './Sidebar';

const Dashborad = () => {
    return (
        <div className="dashborad">
            <DashboradNavbar />
            <div className="dashborad-main-content">
                <Sidebar />
            </div>
        </div>
    );
};

export default Dashborad;
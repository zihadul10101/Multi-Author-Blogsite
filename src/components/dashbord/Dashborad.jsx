import React from 'react';
import DashboradNavbar from './DashboradNavbar';
import Sidebar from './Sidebar';
import {Switch,Route} from 'react-router-dom';
import DashboradIndex from './DashboradIndex';
const Dashborad = () => {
    return (
        <div className="dashborad">
            <DashboradNavbar />
            <div className="dashborad-main-content">
                <Sidebar />
                <Switch >
                    <Route path="/" component={DashboradIndex} />
                </Switch>
            </div>
        </div>
    );
};

export default Dashborad;
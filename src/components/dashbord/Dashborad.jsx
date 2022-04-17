import React from 'react';
import DashboradNavbar from './DashboradNavbar';
import Sidebar from './Sidebar';
import {Switch,Route} from 'react-router-dom';
import DashboradIndex from './DashboradIndex';
import DashboradArtical from './DashboradArtical';
import { Helmet } from 'react-helmet';
const Dashborad = () => {
    return (
        <div className="dashborad">
                <Helmet >
              <title>
                  Dashborad
              </title>
          </Helmet>
            <DashboradNavbar />
            <div className="dashborad-main-content">
                <Sidebar />
                <Switch >
                    <Route path="/dashborad" component={DashboradIndex} exact/>
                    <Route path="/dashborad/all-artical" component={DashboradArtical} exact/>
                </Switch>
            </div>
        </div>
    );
};

export default Dashborad;
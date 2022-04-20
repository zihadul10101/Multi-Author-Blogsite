import React from 'react';
import DashboradNavbar from './DashboradNavbar';
import Sidebar from './Sidebar';
import { Switch, Route } from 'react-router-dom';
import DashboradIndex from './DashboradIndex';
import DashboradArtical from './DashboradArtical';
import ArticleAdd from './ArticleAdd';
import { Helmet } from 'react-helmet';
import AllCategory from './AllCategory';
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
                    <Route path="/dashborad" component={DashboradIndex} exact />
                    <Route path="/dashborad/all-artical/:currentPage?" component={DashboradArtical} exact />
                    <Route path="/dashborad/artical-add/:currentPage?" component={ArticleAdd} exact />
                    <Route path="/dashborad/all-category/:currentPage?" component={AllCategory} exact />
                </Switch>
            </div>
        </div>
    );
};

export default Dashborad;
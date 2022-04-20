import React from 'react';
import DashboradNavbar from './DashboradNavbar';
import Sidebar from './Sidebar';
import { Switch, Route } from 'react-router-dom';
import DashboradIndex from './DashboradIndex';
import DashboradArtical from './DashboradArtical';
import ArticleAdd from './ArticleAdd';
import { Helmet } from 'react-helmet';
import AllCategory from './AllCategory';
import AddCategory from './AddCategory';
import ArticalEdit from './ArticalEdit';
import EditCategory from './EditCategory';
import AllTag from './AllTag';
import AddTag from './AddTag';
import EditTag from './EditTag';
import AllSubAdmin from './AllSubAdmin';
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
                    <Route path="/dashborad/artical-add" component={ArticleAdd} exact />
                    <Route path="/dashborad/artical/edit/:articalSlug" component={ArticalEdit} exact />
                    <Route path="/dashborad/all-category/:currentPage?" component={AllCategory} exact />
                    <Route path="/dashborad/category-add" component={AddCategory} exact />
                    <Route path="/dashborad/category/edit/:cateSlug" component={EditCategory} exact />
                    <Route path="/dashborad/all-tag/:currentPage?" component={AllTag} exact />
                    <Route path="/dashborad/tag-add" component={AddTag} exact />
                    <Route path="/dashborad/tag/edit/:tagSlug" component={EditTag} exact />
                    <Route path="/dashborad/all-sub-admin/:currentPage?" component={AllSubAdmin} exact />

                </Switch>
            </div>
        </div>
    );
};

export default Dashborad;
import React from 'react';
import {  FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
const AllSubAdmin = () => {
    return (
        <div className="all-sub-admin">
             <Helmet >
                <title>
                    All Sub Admin
                </title>
            </Helmet>
            <div className="elements-numberOf-search-add_new">
            <div className="numOf-search-newAdd">
                    <div className="numOf">
                        <h2>   All Sub Admin(22)</h2>
                    </div>
                    <div className="searchOf">
                        <div className="search">
                            <input type="text" placeholder="search Artical" className="form-control" />
                            <span>
                                <FaSearch />
                            </span>
                        </div>

                    </div>
                    <div className="newAdd">
                        <Link to='/dashborad/category-add' className="btn">
                            Add New
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllSubAdmin;
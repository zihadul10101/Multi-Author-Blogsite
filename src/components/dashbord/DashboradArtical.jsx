import React from 'react';
import Helmet from 'react-helmet';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const DashboradArtical = () => {
    return (
        <div className="dashborad-artical">
            <Helmet >
                <title>
                    All Article
                </title>
            </Helmet>
            <div className="artical-action-pagination">
                <div className="numOf-search-newAdd">
                    <div className="numOf">
                        <h2>Article(22)</h2>
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
                        <Link to='/dashborad/add-artical' className="btn">
                            New Add
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboradArtical;
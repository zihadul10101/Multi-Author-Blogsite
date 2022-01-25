import React from 'react';
import Navbar from './Navbar';

const Home = () => {
    return (
        <div className="home">
            <Navbar />
            {/* main content start */}
            <div className="main-content">
                <div className="container">
                    <div className="row">
                        <div className="col-8">
                            <h3>Articles</h3>
                        </div>
                        <div className="col-4">
                            {/* search content start */}
                            <div className="search-category-tag">
                                <div className="search">
                                    <h2>Search</h2>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="search" />
                                    </div>
                                    <div className="form-group">
                                        <button className="btn btn-block">Search</button>
                                    </div>
                                </div>

                            </div>
                                {/* search content end */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
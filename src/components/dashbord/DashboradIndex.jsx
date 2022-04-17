import React from 'react';
import { BsFillPeopleFill } from 'react-icons/bs';
import {Link} from 'react-router-dom';
import { FaRegCaretSquareRight, FaTag,  FaUser } from 'react-icons/fa'

const DashboradIndex = () => {
    return (
        <div className="dashborad-main-content-elements">
            <div className="dashborad-elements">
                <div className="cards">
                    <div className="single-card">
                        <div className="card-icon">
                            <BsFillPeopleFill />
                        </div>
                        <div className="card-info">
                            <h2>26</h2>
                            <span>Visitors</span>
                        </div>
                    </div>
                    <Link to="/artical" className="single-card">
                        <div className="card-icon">
                            <BsFillPeopleFill />
                        </div>
                        <div className="card-info">
                            <h2>26</h2>
                            <span>Article</span>
                        </div>
                    </Link>
                    <Link  className="single-card">
                        <div className="card-icon">
                            <FaRegCaretSquareRight />
                        </div>
                        <div className="card-info">
                            <h2>26</h2>
                            <span>Category</span>
                        </div>
                    </Link>
                    <Link  className="single-card">
                        <div className="card-icon">
                            <FaTag />
                        </div>
                        <div className="card-info">
                            <h2>26</h2>
                            <span>Tag</span>
                        </div>
                    </Link>
                    <Link to="/artical" className="single-card">
                        <div className="card-icon">
                            <FaUser />
                        </div>
                        <div className="card-info">
                            <h2>26</h2>
                            <span>Sub Admin</span>
                        </div>
                    </Link>
                  
                </div>
            </div>
        </div>
    );
};

export default DashboradIndex;
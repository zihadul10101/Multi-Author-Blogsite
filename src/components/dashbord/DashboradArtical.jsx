import React from 'react';
import Helmet from 'react-helmet';
import { FaRegEye, FaSearch } from 'react-icons/fa';
import { MdDelete, MdEdit } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { htmlToText } from 'html-to-text';
import Pagiation from '../home/Pagination'
const DashboradArtical = () => {
    const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium temporibus ab repudiandae eaque dolores at aut mollitia sunt nesciunt consequuntur.'
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
                        <Link to='/dashborad/artical-add' className="btn">
                            New Add
                        </Link>
                    </div>
                </div>
                <div className="height-70vh">
                    <div className="articles">
                        <div className="article">
                            <img src="https://i.ibb.co/WpVNgJc/react-1.jpg" alt="" />
                            <Link to="/artical/details/ggg">Lorem ipsum dolor sit amet.</Link>

                            <p>
                                {text}
                            </p>
                            <div className="action">
                                <span>
                                    <Link>
                                        <MdEdit />
                                    </Link>
                                </span>
                                <span>
                                    <Link>
                                        <FaRegEye />
                                    </Link>
                                </span>
                                <span>
                                    <MdDelete />
                                </span>
                            </div>
                        </div>
                        <div className="article">
                            <img src="https://i.ibb.co/WpVNgJc/react-1.jpg" alt="" />
                            <Link to="/artical/details/ggg">Lorem ipsum dolor sit amet.</Link>

                            <p>
                                {text}
                            </p>
                            <div className="action">
                                <span>
                                    <Link>
                                        <MdEdit />
                                    </Link>
                                </span>
                                <span>
                                    <Link>
                                        <FaRegEye />
                                    </Link>
                                </span>
                                <span>
                                    <MdDelete />
                                </span>
                            </div>
                        </div>
                        <div className="article">
                            <img src="https://i.ibb.co/WpVNgJc/react-1.jpg" alt="" />
                            <Link to="/artical/details/ggg">Lorem ipsum dolor sit amet.</Link>

                            <p>
                                {text}
                            </p>
                            <div className="action">
                                <span>
                                    <Link>
                                        <MdEdit />
                                    </Link>
                                </span>
                                <span>
                                    <Link>
                                        <FaRegEye />
                                    </Link>
                                </span>
                                <span>
                                    <MdDelete />
                                </span>
                            </div>
                        </div>
                        <div className="article">
                            <img src="https://i.ibb.co/WpVNgJc/react-1.jpg" alt="" />
                            <Link to="/artical/details/ggg">Lorem ipsum dolor sit amet.</Link>

                            <p>
                                {text}
                            </p>
                            <div className="action">
                                <span>
                                    <Link>
                                        <MdEdit />
                                    </Link>
                                </span>
                                <span>
                                    <Link>
                                        <FaRegEye />
                                    </Link>
                                </span>
                                <span>
                                    <MdDelete />
                                </span>
                            </div>
                        </div>
                        <div className="article">
                            <img src="https://i.ibb.co/WpVNgJc/react-1.jpg" alt="" />
                            <Link to="/artical/details/ggg">Lorem ipsum dolor sit amet.</Link>

                            <p>
                                {text}
                            </p>
                            <div className="action">
                                <span>
                                    <Link>
                                        <MdEdit />
                                    </Link>
                                </span>
                                <span>
                                    <Link>
                                        <FaRegEye />
                                    </Link>
                                </span>
                                <span>
                                    <MdDelete />
                                </span>
                            </div>
                        </div>
                        <div className="article">
                            <img src="https://i.ibb.co/WpVNgJc/react-1.jpg" alt="" />
                            <Link to="/artical/details/ggg">Lorem ipsum dolor sit amet.</Link>

                            <p>
                                {text}
                            </p>
                            <div className="action">
                                <span>
                                    <Link>
                                        <MdEdit />
                                    </Link>
                                </span>
                                <span>
                                    <Link>
                                        <FaRegEye />
                                    </Link>
                                </span>
                                <span>
                                    <MdDelete />
                                </span>
                            </div>
                        </div>
                        <div className="article">
                            <img src="https://i.ibb.co/WpVNgJc/react-1.jpg" alt="" />
                            <Link to="/artical/details/ggg">Lorem ipsum dolor sit amet.</Link>

                            <p>
                                {text}
                            </p>
                            <div className="action">
                                <span>
                                    <Link>
                                        <MdEdit />
                                    </Link>
                                </span>
                                <span>
                                    <Link>
                                        <FaRegEye />
                                    </Link>
                                </span>
                                <span>
                                    <MdDelete />
                                </span>
                            </div>
                        </div>
                    </div>
                  
                  
                </div>
                <Pagiation />
            </div>
        </div>
    );
};

export default DashboradArtical;
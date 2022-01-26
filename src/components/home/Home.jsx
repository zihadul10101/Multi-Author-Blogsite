import React from 'react';
import { FaChevronCircleRight, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import PopularArticle from './PopularArticle';

const Home = () => {
    return (
        <div className="home">
            <Navbar />
            {/* main section start */}
            <div className="main-content">
                <div className="container">
                    <div className="row">
                        <div className="col-8">
                            <h3>Articles</h3>
                        </div>
                        <div className="col-4">
                            {/* search section start */}
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
                            {/* search section end */}

                            {/* PopularArticle section start */}
                            <div className="popular-artical">
                                <div className="title">
                                    <h3>popular article</h3>
                                </div>
                                <PopularArticle />
                            </div>
                            {/* popular article section end */}

                            {/* FLOWING section start */}
                            <div className="flow-facebook">
                                <div className="title">
                                    <h3>FLOWING ME</h3>
                                </div>
                                <div className="image">
                                    <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FLocal-Courier-182877200475921%2F&tabs=timeline&width=340&height=148&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=2932989300353178" style={{ width: "340px", height: "145px", border: "none", overflow: "hidden", scrolling: "no", frameborder: "0", allowfullscreen: "true", allow: "autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" }}></iframe>
                                </div>
                            </div>
                            {/* FLOWING section end */}

                            {/* Category section start */}
                            <div className="category">
                                <div className="title">
                                    <h3>Category</h3>
                                </div>
                                <ul className="cate-list">
                                    <div className="cate-item">
                                        <li><FaChevronRight />  <Link to="/">Algrodem</Link></li>
                                        <span className="">(5)</span>
                                    </div>
                                </ul>
                                <ul className="cate-list">
                                    <div className="cate-item">
                                        <li><FaChevronRight />  <Link to="/">Algrodem</Link></li>
                                        <span className="">(5)</span>
                                    </div>
                                </ul>
                                <ul className="cate-list">
                                    <div className="cate-item">
                                        <li><FaChevronRight />  <Link to="/">Algrodem</Link></li>
                                        <span className="">(5)</span>
                                    </div>
                                </ul>
                                <ul className="cate-list">
                                    <div className="cate-item">
                                        <li><FaChevronRight />  <Link to="/">Algrodem</Link></li>
                                        <span className="">(5)</span>
                                    </div>
                                </ul>
                            </div>
                            {/* Category section end */}

                            {/* TAG SECTION start */}
                            <div className="tag">
                                <div className="title">
                                    <h3>popular tag</h3>
                                </div>
                                <ul>
                                    <li>
                                        <Link to="/">Program</Link>
                                    </li>

                                    <li>
                                        <Link to="/">Program</Link>
                                    </li>

                                    <li>
                                        <Link to="/">Program</Link>
                                    </li>

                                    <li>
                                        <Link to="/">Program</Link>
                                    </li>
                                </ul>

                            </div>
                              {/* TAG SECTION end */}
                        </div>
                    </div>
                </div>
            </div>
             {/* main section end */}
        </div>
    );
};

export default Home;
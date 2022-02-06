import React, { useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { Link, Switch, Route } from 'react-router-dom';
import HomeArtical from './HomeArtical';
import ArticalDetails from './ArticalDetails';
import CategoryArtical from './CategoryArtical';
import Navbar from './Navbar';
import PopularArticle from './PopularArticle';
import TagArtical from './TagArtical';

const Home = ({history}) => {
    const [value,setValue] = useState('');
    // console.log(value);
    const search =(e)=>{
history.push(`/artical/search/${value}`);
    }
    return (
        <div className="home">
            <Navbar />
            {/* main section start */}
            <div className="main-content">
                <div className="container">
                    <div className="row">
                        <div className="col-8">
                            <Switch>
                                <Route path="/" component={HomeArtical} exact />
                                <Route path="/artical/:currentPage?" component={HomeArtical} exact />
                                <Route path="/artical/details/:slug" component={ArticalDetails} exact />
                                <Route path="/artical/category/:categorySlug/:currentPage?" component={CategoryArtical} exact />
                                <Route path="/artical/tag/:tagSlug/:currentPage?" component={TagArtical} exact />
                                <Route path="/artical/search/:searchValue" component={HomeArtical} exact />
                                
                            </Switch>
                        </div>
                        <div className="col-4">
                            {/* search section start */}
                            <div className="search-category-tag">
                                <div className="search">
                                    <h2>Search</h2>
                                    <div className="form-group">
                                        <input onChange={(e)=>setValue(e.target.value)} className="form-control"type="text" className="form-control" placeholder="search" />
                                    </div>
                                    <div className="form-group">
                                        <button onClick={search} className="btn btn-block">Search</button>
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
                                        <li><FaChevronRight />  <Link to="/artical/category/algrodem">Algrodem</Link></li>
                                        <span className="">(5)</span>
                                    </div>
                                </ul>
                                <ul className="cate-list">
                                    <div className="cate-item">
                                        <li><FaChevronRight />  <Link to="/artical/category/algrodem">Algrodem</Link></li>
                                        <span className="">(5)</span>
                                    </div>
                                </ul>
                                <ul className="cate-list">
                                    <div className="cate-item">
                                        <li><FaChevronRight />  <Link to="/artical/category/algrodem">Algrodem</Link></li>
                                        <span className="">(5)</span>
                                    </div>
                                </ul>
                                <ul className="cate-list">
                                    <div className="cate-item">
                                        <li><FaChevronRight />  <Link to="/artical/category/algrodem">Algrodem</Link></li>
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
                                        <Link to="/artical/tag/programing">Program</Link>
                                    </li>

                                    <li>
                                        <Link to="/artical/tag/programing">Program</Link>
                                    </li>

                                    <li>
                                        <Link to="/artical/tag/programing">Program</Link>
                                    </li>

                                    <li>
                                        <Link to="/artical/tag/programing">Program</Link>
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
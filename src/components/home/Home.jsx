import React from 'react';
import Navbar from './Navbar';
import PopularArticle from './PopularArticle';

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

                                {/* PopularArticle start */}
                                <div className="popular-artical">
                                    <div className="title">
                                        <h3>popular article</h3>
                                    </div>
                                    <PopularArticle />
                                </div>
                                 {/* popular article end */}
                                 <div className="flow-facebook">
                                 <div className="title">
                                        <h3>FLOWING ME</h3>
                                    </div>
                                    <div className="image">
                                        <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FLocal-Courier-182877200475921%2F&tabs=timeline&width=340&height=148&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=2932989300353178"style={{ width:"340px", height:"145px", border:"none",overflow:"hidden", scrolling:"no" ,frameborder:"0", allowfullscreen:"true", allow:"autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"}}></iframe>
                                    </div>
                                 </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
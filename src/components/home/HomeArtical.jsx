import React from 'react';
import { Link } from 'react-router-dom';
import Pagination from './Pagination';

const HomeArtical = () => {
    return (
        <>
        <div className="home-articals">
            {/* 1st article */}
            <div className="home-artical">

                <div className="row">
                    <div className="col-4">
                        <div className="home-image">
                            <div className="image">
                                <img src="https://i.ibb.co/WpVNgJc/react-1.jpg" alt="" />
                                <span>Algorithms</span>
                            </div>

                        </div>
                    </div>
                    <div className="col-8">
                        <div className="home-artical-details">
                            <div className="title">
                                <Link to="/artical/details/zihad">Find Sms Online Uk - Sms Online Uk - top10quest.com</Link>
                            </div>
                            <div className="name-time">
                                <span><Link to="/">Zihadul Islam</Link></span>
                                <span>2 jun 2022</span>
                            </div>
                            <div className="artical-text">
                                <p>Text messaging, or texting, is the act of composing and sending electronic messages, typically consisting of alphabetic and numeric characters, between two or more users of mobile devices, desktops/laptops, or another type of compatible computer.</p>
                            </div>
                            <div className="read-more">
                                <button className="read-more-btn">
                                    <Link to="/artical/details/zihad">Read More</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2nd article */}
            <div className="home-artical">
                
                <div className="row">
                    <div className="col-4">
                        <div className="home-image">
                            <div className="image">
                                <img src="https://i.ibb.co/WpVNgJc/react-1.jpg" alt="" />
                                <span>Algorithms</span>
                            </div>

                        </div>
                    </div>
                    <div className="col-8">
                        <div className="home-artical-details">
                            <div className="title">
                                <Link to="/artical/details/zihad">Find Sms Online Uk - Sms Online Uk - top10quest.com</Link>
                            </div>
                            <div className="name-time">
                                <span><Link to="/">Zihadul Islam</Link></span>
                                <span>2 jun 2022</span>
                            </div>
                            <div className="artical-text">
                                <p>Text messaging, or texting, is the act of composing and sending electronic messages, typically consisting of alphabetic and numeric characters, between two or more users of mobile devices, desktops/laptops, or another type of compatible computer.</p>
                            </div>
                            <div className="read-more">
                                <button className="read-more-btn">
                                    <Link to="/artical/details/zihad">Read More</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* 3rd article */}
            <div className="home-artical">
                
                <div className="row">
                    <div className="col-4">
                        <div className="home-image">
                            <div className="image">
                                <img src="https://i.ibb.co/WpVNgJc/react-1.jpg" alt="" />
                                <span>Algorithms</span>
                            </div>

                        </div>
                    </div>
                    <div className="col-8">
                        <div className="home-artical-details">
                            <div className="title">
                                <Link to="/artical/details/zihad">Find Sms Online Uk - Sms Online Uk - top10quest.com</Link>
                            </div>
                            <div className="name-time">
                                <span><Link to="/artical/details/zihad">Zihadul Islam</Link></span>
                                <span>2 jun 2022</span>
                            </div>
                            <div className="artical-text">
                                <p>Text messaging, or texting, is the act of composing and sending electronic messages, typically consisting of alphabetic and numeric characters, between two or more users of mobile devices, desktops/laptops, or another type of compatible computer.</p>
                            </div>
                            <div className="read-more">
                                <button className="read-more-btn">
                                    <Link to="/">Read More</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* 4th article */}
            <div className="home-artical">
                
                <div className="row">
                    <div className="col-4">
                        <div className="home-image">
                            <div className="image">
                                <img src="https://i.ibb.co/WpVNgJc/react-1.jpg" alt="" />
                                <span>Algorithms</span>
                            </div>

                        </div>
                    </div>
                    <div className="col-8">
                        <div className="home-artical-details">
                            <div className="title">
                                <Link to="/artical/details/zihad">Find Sms Online Uk - Sms Online Uk - top10quest.com</Link>
                            </div>
                            <div className="name-time">
                                <span><Link to="/">Zihadul Islam</Link></span>
                                <span>2 jun 2022</span>
                            </div>
                            <div className="artical-text">
                                <p>Text messaging, or texting, is the act of composing and sending electronic messages, typically consisting of alphabetic and numeric characters, between two or more users of mobile devices, desktops/laptops, or another type of compatible computer.</p>
                            </div>
                            <div className="read-more">
                                <button className="read-more-btn">
                                    <Link to="/artical/details/zihad">Read More</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Pagination />
        </>
    );
};

export default HomeArtical;
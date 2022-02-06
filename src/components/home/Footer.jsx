import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <section id="footer" >
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <div className="title">
                                <h3>Old Artical</h3>
                            </div>
                            {/* 1st article */}
                            <div className="some-resent-artical">
                                <div className="row">
                                    <div className="col-4">
                                        <div className="img">
                                            <img src="https://i.ibb.co/WpVNgJc/react-1.jpg" alt="" />

                                        </div>
                                    </div>
                                    <div className="col-8">
                                        <div className="title-link">
                                            <Link to="/artical/details/zihad">Find Sms Online Uk - Sms Online Uk - top10quest.com</Link>
                                            <br />
                                            <span>2 jun 2020</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* 2nd article */}
                            <div className="some-resent-artical">
                                <div className="row">
                                    <div className="col-4">
                                        <div className="img">
                                            <img src="https://i.ibb.co/WpVNgJc/react-1.jpg" alt="" />

                                        </div>
                                    </div>
                                    <div className="col-8">
                                        <div className="title-link">
                                            <Link to="/artical/details/zihad">Find Sms Online Uk - Sms Online Uk - top10quest.com</Link>
                                            <br />
                                            <span>2 jun 2020</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* 3rd article */}
                            <div className="some-resent-artical">
                                <div className="row">
                                    <div className="col-4">
                                        <div className="img">
                                            <img src="https://i.ibb.co/WpVNgJc/react-1.jpg" alt="" />

                                        </div>
                                    </div>
                                    <div className="col-8">
                                        <div className="title-link">
                                            <Link to="/artical/details/zihad">Find Sms Online Uk - Sms Online Uk - top10quest.com</Link>
                                            <br />
                                            <span>2 jun 2020</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="title-cate-tag">
                                <div className="title">
                                    <h3>Category</h3>
                                </div>
                                <div className="cate-tag">
                                    <div className="cate">
                                        <ul className="cate-list">
                                            <div className="cate-item">
                                                <li>
                                                    <FaChevronRight />
                                                    <Link to="/">Algorithms</Link>
                                                </li>
                                                <span>(5)</span>
                                            </div>
                                            <div className="cate-item">
                                                <li>
                                                    <FaChevronRight />
                                                    <Link to="/">Algorithms</Link>
                                                </li>
                                                <span>(5)</span>
                                            </div>
                                            <div className="cate-item">
                                                <li>
                                                    <FaChevronRight />
                                                    <Link to="/">Algorithms</Link>
                                                </li>
                                                <span>(5)</span>
                                            </div>
                                        </ul>
                                    </div>
                                    <div className="tag">
                                        <div className="title">
                                            <h3>Tag</h3>
                                        </div>
                                        <ul className="tag-list">
                                            <li className="tag-item">
                                                <Link to="/">computer</Link>
                                            </li>
                                            <li className="tag-item">
                                                <Link to="/">computer</Link>
                                            </li>
                                            <li className="tag-item">
                                                <Link to="/">computer</Link>
                                            </li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="title">
                                <h3>Resent Recipient</h3>
                            </div>
                            <div className="some-resent-artical">
                                <div className="row">
                                    <div className="col-4">
                                        <div className="img">
                                            <img src="https://i.ibb.co/WpVNgJc/react-1.jpg" alt="" />

                                        </div>
                                    </div>
                                    <div className="col-8">
                                        <div className="title-link">
                                            <Link to="/artical/details/zihad">Find Sms Online Uk - Sms Online Uk - top10quest.com</Link>
                                            <br />
                                            <span>2 jun 2020</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="some-resent-artical">
                                <div className="row">
                                    <div className="col-4">
                                        <div className="img">
                                            <img src="https://i.ibb.co/WpVNgJc/react-1.jpg" alt="" />

                                        </div>
                                    </div>
                                    <div className="col-8">
                                        <div className="title-link">
                                            <Link to="/artical/details/zihad">Find Sms Online Uk - Sms Online Uk - top10quest.com</Link>
                                            <br />
                                            <span>2 jun 2020</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="some-resent-artical">
                                <div className="row">
                                    <div className="col-4">
                                        <div className="img">
                                            <img src="https://i.ibb.co/WpVNgJc/react-1.jpg" alt="" />

                                        </div>
                                    </div>
                                    <div className="col-8">
                                        <div className="title-link">
                                            <Link to="/artical/details/zihad">Find Sms Online Uk - Sms Online Uk - top10quest.com</Link>
                                            <br />
                                            <span>2 jun 2020</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
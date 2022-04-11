import React from 'react';
import { Link } from 'react-router-dom';
import { BsChevronRight } from 'react-icons/bs'
import { ImLinkedin } from 'react-icons/im'
import { AiFillTag, AiFillDislike,AiFillLike } from 'react-icons/ai'
import { FaFacebookSquare, FaGithubSquare, FaTwitterSquare } from 'react-icons/fa';
import Comment from './Comment';
const ArticleDetails = () => {
    return (
        <div className="article-details">
            <div className="path">
                <Link to='/' >Home</Link>
                <span className="arrow"><BsChevronRight /></span>
                <Link to="/">Algorithms</Link>
                <span className="arrow"><BsChevronRight /></span>
                <span>MERN STACK Multi Author Blogging article details create and design</span>
            </div>
            <div className="title">
                <h3>
                    <Link>Text messaging, or texting, is the act of composing and sending electronic messages, typically consisting of alphabetic and numeric characters</Link>

                </h3>
            </div>
            <div className="auth-time">
                <div className="auth">
                    <h4><AiFillTag /></h4>
                    <span><Link>Programing</Link></span>
                </div>
                <div className="time">
                    <span>2 jun 2022</span>
                </div>
            </div>
            <div className="home-artical-image">
                <img src="https://i.ibb.co/WpVNgJc/react-1.jpg" alt="" />

            </div>
            <div className="home-artical-text">
                <p>
                    Text messaging, or texting, is the act of composing and sending electronic messages, typically consisting of alphabetic and numeric characters, between two or more users of mobile devices, desktops/laptops, or another type of compatible computer.
                    Text messaging, or texting, is the act of composing and sending electronic messages, typically consisting of alphabetic and numeric characters, between two or more users of mobile devices, desktops/laptops, or another type of compatible computer.
                    Text messaging, or texting, is the act of composing and sending electronic messages, typically consisting of alphabetic and numeric characters, between two or more users of mobile devices, desktops/laptops, or another type of compatible computer.
                    Text messaging, or texting, is the act of composing and sending electronic messages, typically consisting of alphabetic and numeric characters, between two or more users of mobile devices, desktops/laptops, or another type of compatible computer.
                    <p>            <img src="https://i.ibb.co/WpVNgJc/react-1.jpg" alt="" />
                    </p>
                </p>
            </div>
            <div className="like-dislike-view">
                <div className="like-dislike">
                    <div className="dislike">
                        <button className="icon red"><AiFillDislike /></button>
                        {/* <button disabled className="icon "><AiFillDislike /></button> */}
                        <div className="dislike-number">(5)</div>
                    </div>
                    <div className="like">
                    <button className="icon blue"><AiFillLike /></button>
                    {/* <button disabled className="icon "><AiFillLike /></button> */}
                    <div className="like-number">(5)</div>

                    </div>
                </div>
                <div className="view">
                    <span>211</span>
                    <span>View</span>
                </div>
            </div>
            <div className="read-more">
                <span>Read More:</span>
                <Link to="/">Text messaging, or texting, is the act of composing and sending electronic messages, typically consisting of alphabetic and numeric characters</Link>
            </div>
            <div className="more-tags">
                <span>Tags</span>
                <Link to="/">Computer</Link>
                <Link to="/">Java</Link>
                <Link to="/">Computer</Link>
            </div>
            <div className="social-icons">
                <a className='a1' href=""><FaFacebookSquare /></a>
                <a className='a2' href=""><FaTwitterSquare /></a>
                <a className='a3' href=""><FaGithubSquare /></a>
                <a className='a4' href=""><ImLinkedin /></a>
            </div>
            <div className="related-article">
                <div className="more">
                    <h3>Related article</h3>
                </div>
                <div className="articles">
                    <Link  className="article">
                    <img src="https://i.ibb.co/WpVNgJc/react-1.jpg" alt="" />
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                    </Link>
                    <Link  className="article">
                    <img src="https://i.ibb.co/WpVNgJc/react-1.jpg" alt="" />
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                    </Link>
                    <Link  className="article">
                    <img src="https://i.ibb.co/WpVNgJc/react-1.jpg" alt="" />
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                    </Link>
                </div>
            </div>
            <div className="comment-title">
                <h3>Article comment</h3>
            </div>
            <Comment />
        </div>
    );
};

export default ArticleDetails;
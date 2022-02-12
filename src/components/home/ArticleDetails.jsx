import React from 'react';
import { Link } from 'react-router-dom';
import { BsChevronRight } from 'react-icons/bs'
import { AiFillTag } from 'react-icons/ai'
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
        </div>
    );
};

export default ArticleDetails;
import React from 'react';
import {
    Link
} from "react-router-dom";
import {FaFacebookSquare,FaTwitterSquare,FaYoutubeSquare,falinkingSquare, FaGithubSquare} from 'react-icons/fa'
const Navbar = () => {
    return (
        <div id="navbar" className="navbar">
            <div className="container">

                <div className="row">

                    <div className="col-4">
                        <div className="image-menubar">
                            <Link className="image" to="/" >
                                <img src="https://i.ibb.co/8XQtd3P/blogbg.png" alt="" />

                            </Link>
                        </div>
                    </div>
                    <div className="col-8">
                        <ul className="link-list">
                            <li className="link-item">
                                <Link to="/about">About</Link>
                            </li>
                            <li className="link-item">
                                <Link to="/contact">Contact</Link>
                            </li>
                            <li className="link-item">
                                <Link to="/policy">Policy</Link>
                            </li>
                            <li className="link-item">
                                <Link to="/facebook"><span><FaFacebookSquare /></span></Link>
                            </li>
                            <li className="link-item">
                                <Link to="/twitter"><span><FaTwitterSquare /></span></Link>
                            </li>
                            <li className="link-item">
                                <Link to="/youtube"><span><FaYoutubeSquare /></span></Link>
                            </li>
                            <li className="link-item">
                                <Link to="/linkend"><span><falinkingSquare /></span></Link>
                            </li>
                            <li className="link-item">
                                <Link to="/github"><span><FaGithubSquare /></span></Link>
                            </li>
                        </ul>
                    </div>

                </div>


            </div>

        </div>
    );
};

export default Navbar;
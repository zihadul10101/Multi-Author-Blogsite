import React from 'react';
import {
    Link
} from "react-router-dom";
import { FaFacebookSquare, FaTwitterSquare, FaYoutubeSquare, FaGithubSquare } from 'react-icons/fa';
import { BsLinkedin, BsList } from 'react-icons/bs';
const Navbar = () => {
    return (

        // navbar start
        <div id="navbar" className="navbar">
            {/*globle container */}
            <div className="container">
                {/* layout row */}
                <div className="row">
                    <input type="checkbox" id="toggle" />
                    {/* 12 from 4 start */}
                    <div className="col-4">
                        <div className="image-menubar">
                            <Link className="image" to="/" >
                                <img src="https://i.ibb.co/8XQtd3P/blogbg.png" alt="" />
                            </Link>
                            <label className="menu_icon" htmlFor="toggle"><BsList /></label>
                        </div>
                    </div>
                    {/* 12 from 4 end */}

                    {/* 12 from 8 start */}
                    <div className="col-8">
                        <ul className="link-list toggle">
                            <li className="link-item">
                                <Link to="/about">About</Link>
                            </li>
                            <li className="link-item">
                                <Link to="/contact">Contact</Link>
                            </li>
                            <li className="link-item">
                                <Link to="/policy">Policy</Link>
                            </li>
                            {/* socail icons implementation start*/}
                            <div className="socail-icon">
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
                                    <Link to="/linkend"><span><BsLinkedin /></span></Link>
                                </li>
                                <li className="link-item">
                                    <Link to="/github"><span><FaGithubSquare /></span></Link>
                                </li>
                            </div>
                            {/* socail icons implementation end*/}
                        </ul>
                    </div>
                    {/* 12 from 8 end */}
                </div>


            </div>

        </div>
         // navbar end
    );
};

export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';

const PopularArticle = () => {
    return (
        <>

            {/* 1st Article */}
            <div className="row">
                <div className="col-4">
                    <Link to="/" className="image">
                        <img src="https://i.ibb.co/WpVNgJc/react-1.jpg" alt="" />
                        </Link>
                </div>
                <div className="col-8">
                    <div className="title-time">
                        <Link to="/" >Jonshana</Link>
                        <br />
                        <span >5 jun 2022</span>
                    </div>
                </div>
            </div>

            {/* 2nd article */}

            <div className="row">
                <div className="col-4">
                    <Link to="/" className="image"><img src="https://i.ibb.co/vzq9F9f/js.jpg" alt="" /></Link>
                </div>
                <div className="col-8">
                    <div className="title-time">
                        <Link to="/" >Jonshana</Link>
                        <br />
                        <span >5 jun 2022</span>
                    </div>
                </div>
            </div>
            {/* 3rd article */}
            <div className="row">
                <div className="col-4">
                    <Link to="/" className="image"><img src="https://i.ibb.co/bX8z6rh/101387021-252269149386257-7628973931973574656-n.jpg" alt="" /></Link>
                </div>
                <div className="col-8">
                    <div className="title-time">
                        <Link to="/" >Jonshana</Link>
                        <br />
                        <span >5 jun 2022</span>
                    </div>
                </div>
            </div>

        </>
    );
};

export default PopularArticle;
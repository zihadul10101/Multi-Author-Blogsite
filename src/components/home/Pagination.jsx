import React from 'react';
import { Link } from 'react-router-dom';
import { BsChevronDoubleLeft, BsChevronDoubleRight } from 'react-icons/bs'

const Pagination = () => {
    return (
        <div className="pagination">
            <ul>
                <li><Link to="/"><BsChevronDoubleLeft /></Link></li>
                <button disabled className="not-hover"><span> <BsChevronDoubleLeft /></span></button>
                <li className="active"><Link>1</Link></li>
                <li><Link>2</Link></li>
                <li><Link>3</Link></li>
                <li> <Link to="/"><BsChevronDoubleRight /></Link></li>
                <button disabled className="not-hover"><span> <BsChevronDoubleRight /></span></button>
            </ul>
        </div>
    );
};

export default Pagination;
import React, { useEffect } from 'react';
import Helmet from 'react-helmet';
import { FaRegEye, FaSearch } from 'react-icons/fa';
import { MdDelete, MdEdit } from 'react-icons/md';
import { Link, useParams } from 'react-router-dom';
import htmlToText from "react-html-parser";
import Pagiation from '../home/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { get_all_artical, delete_artical } from '../../store/actions/Dashborad/articalAction';

const DashboradArtical = () => {
    const { currentPage } = useParams();
    const dispatch = useDispatch();
    const { allArticle, parPage, articleCount, articleSuccessMessage } = useSelector(state => state.dashboradArtical)
    useEffect(() => {
        dispatch(get_all_artical(currentPage ? currentPage.split('-')[1] : 1))
    }, [currentPage, dispatch])
    ;
    const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium temporibus ab repudiandae eaque dolores at aut mollitia sunt nesciunt consequuntur.'
    return (
        <div className="dashborad-artical">
            <Helmet >
                <title>
                    All Article
                </title>
            </Helmet>
            <div className="artical-action-pagination">
                <div className="numOf-search-newAdd">
                    <div className="numOf">
                        <h2>All Article(22)</h2>
                    </div>
                    <div className="searchOf">
                        <div className="search">
                            <input type="text" onChange={(e) => dispatch(get_all_artical(currentPage ? currentPage.split('-')[1] : 1, e.target.value))} placeholder="search Artical" className="form-control" />
                            <span>
                                <FaSearch />
                            </span>
                        </div>

                    </div>
                    <div className="newAdd">
                        <Link to='/dashborad/artical-add' className="btn">
                            New Add
                        </Link>
                    </div>
                </div>
                <div className="height-70vh">
                    <div className="articles">
                    {
                            allArticle.length > 0 ? allArticle.map((art, index) =>
                            <div className="article">
                            <img src={`http://localhost:3000/articalImage/${art.image}`} alt="" />
                            <Link to={`/artical/details/${art.slug}`}>{htmlToText(art.title.slice(0, 30))}</Link>
                            <p>{htmlToText(art.articleText.slice(0, 50))}</p>
                            <div className="action">
                                <span>
                                <Link to={`/dashborad/artical/edit/${art.slug}`}><MdEdit /></Link>
                                </span>
                                <span>
                                    <Link>
                                        <FaRegEye />
                                    </Link>
                                </span>
                                <span>
                                    <MdDelete />
                                </span>
                            </div>
                        </div>):'Article Not Found'
                    }
                     
                      
                       
                    </div>
                  
                  
                </div>
              
                {/* {
                    articleCount === 0 || articleCount < parPage ? "" : <Pagiation
                        pageNumber={currentPage ? currentPage.split('-')[1] : 1}
                        parPage={parPage}
                        itemCount={articleCount}
                        path='/dashborad/all-artical'
                    />
                } */}
                <Pagiation
                        pageNumber={currentPage ? currentPage.split('-')[1] : 1}
                        parPage={parPage}
                        itemCount={articleCount}
                        path='/dashborad/all-artical'
                    />
            </div>
        </div>
    );
};

export default DashboradArtical;
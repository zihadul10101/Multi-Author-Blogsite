import React, { useEffect } from 'react';
import Helmet from 'react-helmet';
import Pagination from '../home/Pagination'
import { MdDelete, MdEdit } from 'react-icons/md';
import { FaSearch } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import { get_all_category } from '../../store/actions/Dashborad/categoryAction';
import { useDispatch, useSelector } from 'react-redux';
const AllCategory = () => {
    const { currentPage } = useParams();
    const dispatch = useDispatch();
    const { perPage, allCategory, categoryCount } = useSelector(state => state.dashboradCategory)

    useEffect(() => {
        dispatch(get_all_category(currentPage ? currentPage.split('-')[1] : 1))
    }, [currentPage])
    return (
        <div className="all-category">
            <Helmet >
                <title>
                    All Category
                </title>
            </Helmet>
            <div className="show-category-action">
                <div className="numOf-search-newAdd">
                    <div className="numOf">
                        <h2>All Category(22)</h2>
                    </div>
                    <div className="searchOf">
                        <div className="search">
                            <input type="text" placeholder="search Artical" className="form-control" />
                            <span>
                                <FaSearch />
                            </span>
                        </div>

                    </div>
                    <div className="newAdd">
                        <Link to='/dashborad/category-add' className="btn">
                            Add New
                        </Link>
                    </div>
                </div>
                <div className="hight-60vh">
                <div className="categorys">
                    {
                        allCategory.length > 0 ? allCategory.map(category =>
                          
                                <div className="category">
                                    <div className="name">
                                       {category.categoryName}
                                    </div>
                                    <div className="action">
                                        <span>
                                            <Link to={`/dashborad/category/edit/${category.categorySulg}`}>
                                                <MdEdit />
                                            </Link>
                                        </span>
                                        <span>
                                            <MdDelete />
                                        </span>
                                    </div>
                                </div>
                           
                        ) : 'Category Not found'
                    }
                     </div>
                </div>
                <Pagination />
            </div>
        </div>
    );
};

export default AllCategory;
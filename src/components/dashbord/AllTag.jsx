import React, { useEffect } from 'react';
import Helmet from 'react-helmet';
import Pagination from '../home/Pagination'
import { MdDelete, MdEdit } from 'react-icons/md';
import { FaSearch } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import { get_all_tag, delete_tag } from '../../store/actions/Dashborad/tagAction';
import { useDispatch, useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
const AllTag = () => {
    const { currentPage } = useParams();
    const dispatch = useDispatch();
    const { perPage, allTag, tagCount, tagSuccess } = useSelector(state => state.dashboradTag)
    console.log(allTag.tagName)
    useEffect(() => {
        if (tagSuccess) {
            toast.success(tagSuccess);
            dispatch({
                type: 'TAG_SUCCESS_MESSAGE_CLEAR'
            })
        }
        dispatch(get_all_tag(currentPage ? currentPage.split('-')[1] : 1))
    }, [currentPage, tagSuccess])
    return (
        <div className="all-category">
            <Toaster
                position={'bottom-center'}
                reverseOrder={false}
                toastOptions={
                    {
                        style: {
                            fontSize: '15px',
                        }
                    }
                }
            />
            <Helmet >
                <title>
                    All Tag
                </title>
            </Helmet>
            <div className="show-category-action">
                <div className="numOf-search-newAdd">
                    <div className="numOf">
                        <h2>All Tag({allTag.length})</h2>
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
                        <Link to='/dashborad/tag-add' className="btn">
                            Add New
                        </Link>
                    </div>
                </div>
                <div className="hight-60vh">
                    <div className="categorys">
                        {
                            allTag.length > 0 ? allTag.map(tag =>

                                <div key={tag._id} className="category">
                                    <div className="name">
                                        {tag.tagName}
                                    </div>
                                    <div className="action">
                                        <span>
                                            <Link to={`/dashborad/tag/edit/${tag.tagSulg}`}>
                                                <MdEdit />
                                            </Link>
                                        </span>
                                        <span onClick={() => dispatch(delete_tag(tag._id))}>
                                            <MdDelete />
                                        </span>
                                    </div>
                                </div>

                            ) : 'Tag Not found'
                        }

                    </div>
                </div>
                <Pagination
                    pageNumber={currentPage ? currentPage.split('-')[1] : 1}
                    parPage={perPage}
                    itemCount={tagCount}
                    path='/dashborad/all-tag'
                />
            </div>
        </div>
    );
};

export default AllTag;
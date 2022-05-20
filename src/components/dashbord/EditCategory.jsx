import React,{ useEffect} from 'react';
import Helmet from 'react-helmet';
import { Link ,useParams} from 'react-router-dom';
import { edit_category } from '../../store/actions/Dashborad/categoryAction';
import { useDispatch, useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
const EditCategory = () => {
    const { cateSlug } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(edit_category(cateSlug))
    }, [cateSlug])
    return (
        <div className="add-category">
            <Helmet>
                <title>
                    Edit Category 
                </title>
            </Helmet>
            <div className="added">
                <div className="title-show-article">
                    <h2>Edit Category</h2>
                    <Link className='btn' to='/dashborad/all-category'>All Category</Link>
                </div>
                <form >
                    <div className="form-group">
                        <label htmlFor="category-name">Category Name</label>
                        <input type="text" name="category-name" placeholder="Category Name" id="name" className="form-control" />
                        <p className="error">Please Provide category name</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="category-description">Category Name</label>
                        <textarea type="text" name="category-description" placeholder="Category description" id="name" className="form-control" />
                        <p className="error">Please Provide category description</p>
                    </div>
                    <div className="form-group">
                        <div className="btn btn-block">
                           Edit Category
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditCategory;
import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import { Link, useParams } from 'react-router-dom';
import { edit_category ,updated_category} from '../../store/actions/Dashborad/categoryAction';
import { useDispatch, useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
const EditCategory = () => {
    const { cateSlug } = useParams();
    const dispatch = useDispatch();
    const { loader, categoryError, categorySuccess, editRequest, editCategory } = useSelector(state => state.dashboradCategory);

    const [state, setState] = useState({
        categoryName: '',
        categoryDescription: ''
    })
    useEffect(() => {
        if (editRequest) {
            setState({
                categoryName: editCategory.categoryName,
                categoryDescription: editCategory.categoryDescription
            })
            dispatch({ type: 'EDIT_REQUEST_CLEAR' })
        } else {
            dispatch(edit_category(cateSlug));
        }
    }, [editCategory, cateSlug]);

    const inputHendle = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const updated = (e) => {
        e.preventDefault()
        dispatch(updated_category(editCategory._id,state))
    }
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
                <form onSubmit={updated}>
                    <div className="form-group">
                        <label htmlFor="category-name">Category Name</label>
                        <input onChange={inputHendle} type="text" name="categoryName" value={state.categoryName} placeholder="Category Name" id="name" className="form-control" />
                        <p className="error">Please Provide category name</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="category-description">Category Description</label>
                        <textarea onChange={inputHendle} type="text" value={state.categoryDescription} name="categoryDescription" placeholder="Category description" id="name" className="form-control" />
                        <p className="error">Please Provide category description</p>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-block">
                            Edit Category
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditCategory;
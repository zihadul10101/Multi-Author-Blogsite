import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import { add_category } from '../../store/actions/Dashborad/categoryAction';
import { useDispatch, useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
const AddCategory = ({ history }) => {

    const dispatch = useDispatch();
    const { loader, categoryError, categorySuccess } = useSelector(state => state.dashboradCategory);
console.log(categorySuccess);
    const [state, setState] = useState({
        categoryName: '',
        categoryDescription: ''
    })

    const inputHendle = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const addCategory = (e) => {
        e.preventDefault()
        dispatch(add_category(state))
    }
    useEffect(() => {
        if (categoryError && categoryError.error) {
            toast.error(categoryError.error)
            dispatch({ type: 'CATEGORY_ERROR_MESSAGE' })
        }

        if (categorySuccess) {
            toast.success(categorySuccess);
            dispatch({
                type: 'CATEGORY_SUCCESS_MESSAGE'
            })
            history.push('/dashborad/all-category')
        }

    }, [categoryError, categorySuccess])
    return (
        <div className="add-category">
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
            <Helmet>
                <title>
                    Category Add
                </title>
            </Helmet>
            <div className="added">
                <div className="title-show-article">
                    <h2>Add Category</h2>
                    <Link className='btn' to='/dashborad/all-category'>All Category</Link>
                </div>
                <form onSubmit={addCategory}>
                    <div className="form-group">
                        <label htmlFor="category-name">Category Name</label>
                        <input onChange={inputHendle} type="text" name="categoryName" value={state.categoryName} placeholder="Category Name" id="name" className="form-control" />
                        <p className="error">{categoryError ? categoryError.categoryName : ''}</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="category-description">Category Name</label>
                        <textarea onChange={inputHendle} type="text" name="categoryDescription" value={state.categoryDescription} placeholder="Category description" id="name" className="form-control" />
                        <p className="error">{categoryError ? categoryError.categoryDescription : ''}</p>
                    </div>
                    <div className="form-group">
                        {
                            loader ?
                                <button className="btn btn-block">
                                    <div className="spinner">
                                        <div className="spinner1"></div>
                                        <div className="spinner2"></div>
                                        <div className="spinner3"></div>
                                    </div>
                                </button> : <button className="btn btn-block">
                                    Add Category
                                </button>
                        }

                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCategory;
import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import {  add_tag } from '../../store/actions/Dashborad/tagAction';
import { useDispatch, useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
const AddTag = ({ history}) => {
    const dispatch = useDispatch();
    const { loader, tagError, tagSuccess } = useSelector(state => state.dashboradTag);

    const [state, setState] = useState({
        tagName: '',
        tagDescription: ''
    })

    const inputHendle = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const addTag = (e) => {
        e.preventDefault()
        dispatch(add_tag(state))
    }
    useEffect(() => {
        if (tagError && tagError.error) {
            toast.error(tagError.error)
            dispatch({ type: 'TAG_ERROR_MESSAGE' })
        }

        if (tagSuccess) {
            toast.success(tagSuccess);
            dispatch({
                type: 'CATEGORY_SUCCESS_MESSAGE'
            })
            history.push('/dashborad/all-tag')
        }

    }, [tagError, tagSuccess])
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
                   Tag Add
                </title>
            </Helmet>
            <div className="added">
                <div className="title-show-article">
                    <h2>Add Tag</h2>
                    <Link className='btn' to='/dashborad/all-tag'>All Tag</Link>
                </div>
                <form onSubmit={addTag}>
                    <div className="form-group">
                        <label htmlFor="category-name">Tag Name</label>
                        <input onChange={inputHendle}  value={state.tagName} type="text" name="tagName" placeholder="Category Name" id="name" className="form-control" />
                        <p className="error">{tagError ? tagError.tagName : ''}</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="category-description">Tag Name</label>
                        <textarea onChange={inputHendle}  value={state.tagDescription} type="text" name="tagDescription" placeholder="Category description" id="name" className="form-control" />
                        <p className="error">{tagError ? tagError.tagDescription : ''}</p>

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
                                    Add Tag
                                </button>
                        }
                        </div>
                </form>
            </div>
        </div>
    );
};

export default AddTag;
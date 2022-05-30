import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import { Link, useParams } from 'react-router-dom';
import { edit_tag,  updated_tag } from '../../store/actions/Dashborad/tagAction';
import { useDispatch, useSelector } from 'react-redux';

const EditTag = ({ history}) => {
    const { tagSlug } = useParams();

    const dispatch = useDispatch();
    const { loader, tagError, tagSuccess, editRequest, editTag } = useSelector(state => state.dashboradTag);

    const [state, setState] = useState({
        tagName: '',
        tagDescription: ''
    })
    useEffect(() => {
        if (editRequest) {
            setState({
                tagName: editTag.tagName,
                tagDescription: editTag.tagDescription
            })
            dispatch({ type: 'EDIT_REQUEST_CLEAR' })
        } else {
            dispatch(edit_tag(tagSlug));
        }
    }, [editTag, tagSlug]);
    useEffect(() => {
        if (tagSuccess) {
            history.push('/dashborad/all-tag')
        }
    }, [tagSuccess])

    const inputHendle = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const updated = (e) => {
        e.preventDefault()
        dispatch(updated_tag(editTag._id, state))
    }
    return (
        <div className="add-category">
            <Helmet>
                <title>
                    Edit Tag
                </title>
            </Helmet>
            <div className="added">
                <div className="title-show-article">
                    <h2>Edit Tag</h2>
                    <Link className='btn' to='/dashborad/all-tag'>All Tag</Link>
                </div>
                <form onSubmit={updated}>
                    <div className="form-group">
                        <label htmlFor="category-name">Tag Name</label>
                        <input onChange={inputHendle} type="text" name="tagName" value={state.tagName} placeholder="Tag Name" id="name" className="form-control" />
                        <p className="error">{tagError && tagError.tagName}</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="category-description">Tag Name</label>
                        <textarea onChange={inputHendle} type="text" name="tagDescription" value={state.tagDescription} placeholder="Tag description" id="name" className="form-control" />
                        <p className="error">{tagError && tagError.tagDescription}</p>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-block">
                            Updated Tag
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditTag;
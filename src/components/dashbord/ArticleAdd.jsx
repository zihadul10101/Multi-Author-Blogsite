import React, { useState, useRef, useEffect } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import { BsCardImage } from 'react-icons/bs';
import JoditEditor from 'jodit-react';
import { useDispatch, useSelector } from "react-redux";
import { get_tag_category } from "../../store/actions/Dashborad/articalAction";
import toast, { Toaster } from "react-hot-toast";

const ArticleAdd = () => {
    const { allCategory, allTag } = useSelector(state => state.dashboradArtical)

    const dispatch = useDispatch();
    const [updateBtn, setUpdateBtn] = useState(false);
    const [slug, setSlug] = useState('');
    const [state, setState] = useState({
        title: '',
        category: '',
        tag: '',
        image: '',
    })
    const inputHendle = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    const titleHendler = (e) => {
        setState({
            ...state,
            title: e.target.value
        })
        const createSlug = e.target.value.trim().split(' ').join('-');
        setSlug(createSlug)
    }
    const slugHendle = (e) => {
        setSlug(e.target.value);
        setUpdateBtn(true)
    }
    const updateSlug = (e) => {
        e.preventDefault();
        const newSlug = slug.trim().split(' ').join('-');
        setSlug(newSlug)
        setUpdateBtn(false)
    }
    const [text, setText] = useState('')
    const editor = useRef();
    const config = {
        readOnly: false,
    }
    useEffect(() => {
        dispatch(get_tag_category())
    }, [])
    return (
        <div className='add-article'>
            <Helmet>
                <title>
                    Article Add
                </title>
            </Helmet>
            <div className="add">
                <div className="title-show-article">
                    <h2>Add Article</h2>
                    <Link className='btn' to='/dashborad/all-artical'>All Article</Link>
                </div>
                <form action="">
                    <div className="form-group">
                        <label htmlFor="title">Article Title</label>
                        <input onChange={titleHendler} type="text" value={state.title} name="title" placeholder="Article Title" id="title" className="form-control" />
                        <p className="error">Please Provide artical Title</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="slug">Artical Slug</label>
                        <input value={slug} onChange={slugHendle} type="text" placeholder="Artical Slug" className="form-control" name="slug" id="slug" />
                        <p className="error">Please Provide artical Title</p>

                    </div>
                    <button className="btn">Update</button>
                    <div className="form-group">
                        <label htmlFor="category">Category</label>
                        <select onChange={inputHendle} className='form-control' value={state.category} name="category" id="category">
                            <option value="hh">---select artical category</option>
                            {
                                allCategory.length > 0 ? allCategory.map((c, index) => <option value={c.tagSlug}>{c.categoryName}</option>) : ''
                            }
                        </select>
                        <p className="error">Please Provide artical Title</p>

                    </div>
                    <div className="form-group">
                        <label htmlFor="tag">Tag</label>
                        <select onChange={inputHendle} className='form-control' value={state.tag} name="tag" id="tag">
                            <option value="hh">---select artical tag</option>
                            {
                                allTag.length > 0 ? allTag.map((t, index) => <option value={t.tagSlug}>{t.tagName}</option>) : ''
                            }
                        </select>
                        <p className="error">Please Provide artical Title</p>

                    </div>
                    <div className="form-group img-upload">
                        <div className="upload">
                            <label htmlFor="upload-img">
                                <BsCardImage />
                            </label>
                            <input type="file" id="upload-img" />
                        </div>
                        <label htmlFor="article text">Article text </label>
                        <JoditEditor
                            ref={editor}
                            value={text}
                            config={config}
                            tabIndex={1}
                            onBlur={newText => setText(newText)}
                            onChange={newText => { }}
                        />
                        <p className="error">Please Provide artical Title</p>

                    </div>
                    <div className="form-group">
                        <label htmlFor="image"> Image</label>
                        <div className="image-select">
                            <span>Upload Image</span>
                            <label htmlFor="image">Select Image</label>
                            <input type="file" className="form-control" name="image" id="image" />
                        </div>
                        <div className="image">
                            <img src="https://i.ibb.co/WpVNgJc/react-1.jpg" alt="" />
                        </div>
                        <p className="error">Please Provide artical Title</p>

                    </div>
                    <div className="form-group">
                        <button className="btn btn-block">
                            Add Article
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ArticleAdd;
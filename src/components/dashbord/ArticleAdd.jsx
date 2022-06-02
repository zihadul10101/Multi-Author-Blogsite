import React, { useState, useRef, useEffect } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import { BsCardImage } from 'react-icons/bs';
import JoditEditor from 'jodit-react';
import { useDispatch, useSelector } from "react-redux";
import { get_tag_category, add_articale } from "../../store/actions/Dashborad/articalAction";
import toast, { Toaster } from "react-hot-toast";

const ArticleAdd = ({ history }) => {
    const { allCategory, allTag, loader, articalError, articalSuccess } = useSelector(state => state.dashboradArtical)

    useEffect(() => {
        if (articalError && articalError.error) {
            toast.error(articalError.error)
            dispatch({ type: 'ARTCLE_ADD_FAIL' })
        }

        if (articalSuccess) {

            toast.success(articalSuccess);
            dispatch({
                type: 'ARTCLE_SUCCESS_MESSAGE'
            })
            history.push('/dashborad/all-artical')
        }

    }, [articalError, articalSuccess])
    const dispatch = useDispatch();
    const [updateBtn, setUpdateBtn] = useState(false);
    const [slug, setSlug] = useState('');
    const [state, setState] = useState({
        title: '',
        category: '',
        tag: '',
        image: '',
    })
    const [image, setImage] = useState({
        imageName: '',
        img: ''
    })
    const imageHendle = (e) => {
        // console.log(e.target.files)
        if (e.target.files.length !== 0) {
            setState({
                ...state,
                image: e.target.files[0]
            })
            const imageReader = new FileReader();
            imageReader.onload = () => {
                setImage({
                    ...image,
                    img: imageReader.result,
                    imageName: e.target.files[0].name
                })
            }
            imageReader.readAsDataURL(e.target.files[0]);
        }
    }
    // console.log(image)
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
    const add = (e) => {
        e.preventDefault();
        const { title, image, category, tag } = state;

        const formData = new FormData();

        formData.append('title', title);
        formData.append('image', image);
        formData.append('category', category);
        formData.append('tag', tag);
        formData.append('slug', slug);
        formData.append('text', text);


        dispatch(add_articale(formData))
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
                    Article Add
                </title>
            </Helmet>
            <div className="add">
                <div className="title-show-article">
                    <h2>Add Article</h2>
                    <Link className='btn' to='/dashborad/all-artical'>All Article</Link>
                </div>
                <form onSubmit={add}>
                    <div className="form-group">
                        <label htmlFor="title">Article Title</label>
                        <input onChange={titleHendler} type="text" value={state.title} name="title" placeholder="Article Title" id="title" className="form-control" />
                        <p className="error">{articalError ? articalError.title : ''}</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="slug">Artical Slug</label>
                        <input value={slug} onChange={slugHendle} type="text" placeholder="Artical Slug" className="form-control" name="slug" id="slug" />
                        <p className="error">{articalError ? articalError.slug : ''}</p>
                    </div>
                    {
                        updateBtn ? <button onClick={updateSlug} className='btn'>Update</button> : ''
                    }                    <div className="form-group">
                        <label htmlFor="category">Category</label>
                        <select onChange={inputHendle} className='form-control' value={state.category} name="category" id="category">
                            <option value="hh">---select artical category---</option>
                            {
                                allCategory.length > 0 ? allCategory.map((c, index) => <option key={index} value={c.tagSlug}>{c.categoryName}</option>) : ''
                            }
                        </select>
                        <p className="error">{articalError ? articalError.category : ''}</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="tag">Tag</label>
                        <select onChange={inputHendle} className='form-control' value={state.tag} name="tag" id="tag">
                            <option value="hh">---select artical tag---</option>
                            {
                                allTag.length > 0 ? allTag.map((t, index) => <option key={index} value={t.tagSlug}>{t.tagName}</option>) : ''
                            }
                        </select>
                        <p className="error">{articalError ? articalError.tag : ''}</p>
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
                        <p className="error">{articalError ? articalError.text : ''}</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="image"> Image</label>
                        <div className="image-select">
                            {
                                image.imageName ? <span>{image.imageName}</span> : <span></span>
                            }
                            <label htmlFor="image">Select Image</label>
                            <input onChange={imageHendle} type="file" className="form-control" name="image" id="image" />
                        </div>
                        <div className="image">
                            {
                                image.img ? <img src={image.img} alt="" /> : ''
                            }
                        </div>
                        <p className="error">{articalError ? articalError.image : ''}</p>
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
                                    Add Artical
                                </button>
                        }

                    </div>
                </form>
            </div>
        </div>
    );
};

export default ArticleAdd;
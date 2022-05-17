import React,{useState} from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
const AddCategory = () => {
    const [state,setState] = useState({
        categoryName: '',
        categoryDescription: ''
    })

    const inputHendle =(e) => {
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
    }
    return (
        <div className="add-category">
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
                <form >
                    <div className="form-group">
                        <label htmlFor="category-name">Category Name</label>
                        <input onChange={inputHendle} type="text" name="categoryName" placeholder="Category Name" id="name" className="form-control" />
                        <p className="error">Please Provide category name</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="category-description">Category Name</label>
                        <textarea onChange={inputHendle} type="text" name="categoryDescription" placeholder="Category description" id="name" className="form-control" />
                        <p className="error">Please Provide category description</p>
                    </div>
                    <div className="form-group">
                        <div className="btn btn-block">
                            Add Category
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCategory;
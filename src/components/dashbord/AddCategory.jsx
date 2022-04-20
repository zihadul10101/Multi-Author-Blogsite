import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
const AddCategory = () => {
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
                            Add Category
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCategory;
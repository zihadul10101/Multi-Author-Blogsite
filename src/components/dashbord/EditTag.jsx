import React, { useEffect } from 'react';
import Helmet from 'react-helmet';
import { Link ,useParams} from 'react-router-dom';

const EditTag = () => {
    
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
                <form >
                    <div className="form-group">
                        <label htmlFor="category-name">Tag Name</label>
                        <input type="text" name="category-name" placeholder="Category Name" id="name" className="form-control" />
                        <p className="error">Please Provide Tag name</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="category-description">Tag Name</label>
                        <textarea type="text" name="category-description" placeholder="Category description" id="name" className="form-control" />
                        <p className="error">Please Provide Tag description</p>
                    </div>
                    <div className="form-group">
                        <div className="btn btn-block">
                            Edit Tag
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditTag;
import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import Pagination from '../home/Pagination'
const AllUser = () => {
    const user = 'sub-admin';
    const status = 'block';
    return (
        <div className="all-sub-admin">
            <Helmet >
                <title>
                    All User
                </title>
            </Helmet>
            <div className="elements-numberOf-search-add_new">
                <div className="numOf-search-newAdd">
                    <div className="numOf">
                        <h2>   All User(22)</h2>
                    </div>
                    <div className="searchOf">
                        <div className="search">
                            <input type="text" placeholder="search Artical" className="form-control" />
                            <span>
                                <FaSearch />
                            </span>
                        </div>

                    </div>
                    <div className="newAdd">
                        <Link to='/dashborad/all-sub-admin' className="btn">
                            All Sub Admin
                        </Link>
                    </div>
                </div>
                <div className="loading-elements">
                    <div className="elements">
                        <div className="table-wapper">
                            <table>
                                <thead>
                                    <tr className="tr">
                                        <th>No</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Image</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td data-label='No'>1</td>
                                        <td data-label='Name'>Zihadul Islam</td>
                                        <td data-label='Email'>Zihadul1010@gmail.com</td>
                                        <td data-label='image' className='image'>
                                            <img src="https://i.ibb.co/WpVNgJc/react-1.jpg" alt="" />

                                        </td>
                                        <td data-label='Action'>
                                            {
                                                status === 'block' ? <span class="unsus">UnBlock</span> : <span class="sus">Block</span>
                                            }
                                            {
                                                user === 'admin' ? <span>Add Sub Admin</span> : ''
                                            }
                                        </td>
                                    </tr>
                                    <tr>
                                        <td data-label='No'>1</td>
                                        <td data-label='Name'>Zihadul Islam</td>
                                        <td data-label='Email'>Zihadul1010@gmail.com</td>
                                        <td data-label='image' className='image'>
                                            <img src="https://i.ibb.co/WpVNgJc/react-1.jpg" alt="" />

                                        </td>
                                        <td data-label='Action'>
                                        {
                                                 status === 'block' ? <span class="unsus">UnBlock</span> : <span class="sus">Block</span> 
                                            }
                                            {
                                                user === 'admin' ? <span>Add Sub Admin</span> : ''
                                            }
                                        </td>
                                    </tr>
                                    <tr>
                                        <td data-label='No'>1</td>
                                        <td data-label='Name'>Zihadul Islam</td>
                                        <td data-label='Email'>Zihadul1010@gmail.com</td>
                                        <td data-label='image' className='image'>
                                            <img src="https://i.ibb.co/WpVNgJc/react-1.jpg" alt="" />

                                        </td>
                                        <td data-label='Action'>
                                        {
                                                 status === 'block' ? <span class="unsus">UnBlock</span> : <span class="sus">Block</span> 
                                            }
                                            {
                                                user === 'admin' ? <span>Add Sub Admin</span> : ''
                                            }
                                        </td>
                                    </tr>
                                    <tr>
                                        <td data-label='No'>1</td>
                                        <td data-label='Name'>Zihadul Islam</td>
                                        <td data-label='Email'>Zihadul1010@gmail.com</td>
                                        <td data-label='image' className='image'>
                                            <img src="https://i.ibb.co/WpVNgJc/react-1.jpg" alt="" />

                                        </td>
                                        <td data-label='Action'>
                                        {
                                                 status === 'block' ? <span class="unsus">UnBlock</span> : <span class="sus">Block</span> 
                                            }
                                            {
                                                user === 'admin' ? <span>Add Sub Admin</span> : ''
                                            }
                                        </td>
                                    </tr>
                                    <tr>
                                        <td data-label='No'>1</td>
                                        <td data-label='Name'>Zihadul Islam</td>
                                        <td data-label='Email'>Zihadul1010@gmail.com</td>
                                        <td data-label='image' className='image'>
                                            <img src="https://i.ibb.co/WpVNgJc/react-1.jpg" alt="" />

                                        </td>
                                        <td data-label='Action'>
                                        {
                                                 status === 'block' ? <span class="unsus">UnBlock</span> : <span class="sus">Block</span> 
                                            }
                                            {
                                                user === 'admin' ? <span>Add Sub Admin</span> : ''
                                            }
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <Pagination />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllUser;
import React from 'react';
import { BsFillPeopleFill } from 'react-icons/bs';
import {Link} from 'react-router-dom';
import { FaRegCaretSquareRight, FaTag,  FaUser } from 'react-icons/fa'
import Chart from 'react-apexcharts';

const DashboradIndex = () => {
    const chartOptions = {
        series:[
            {
                name:'visitors',
                data:[100,120,390,200,244,324,723,342,321,933,500,1000]
            }
        ],
        options: {
            color:['#181ee8','#181ee8'],
            chart:{
                background: 'transparent'
            },
            dataLabels: {
                enabled:false
            },
            stroke: {
                curve: 'smooth'
            },
            xaxis: {
                categories: ['January','February','March','April','May','June','July','August','September','October','November','December']
            },
            legend:{
                position: 'top'
            },
            grid: {
                show: 'false'
            }
        }
    }
    return (
        <div className="dashborad-main-content-elements">
            <div className="dashborad-elements">
                <div className="cards">
                    <div className="single-card">
                        <div className="card-icon">
                            <BsFillPeopleFill />
                        </div>
                        <div className="card-info">
                            <h2>26</h2>
                            <span>Visitors</span>
                        </div>
                    </div>
                    <Link to="/dashborad/all-artical" className="single-card">
                        <div className="card-icon">
                            <BsFillPeopleFill />
                        </div>
                        <div className="card-info">
                            <h2>26</h2>
                            <span>Article</span>
                        </div>
                    </Link>
                    <Link to="/dashborad/all-category"  className="single-card">
                        <div className="card-icon">
                            <FaRegCaretSquareRight />
                        </div>
                        <div className="card-info">
                            <h2>26</h2>
                            <span>Category</span>
                        </div>
                    </Link>
                    <Link to="/dashborad/all-tag"  className="single-card">
                        <div className="card-icon">
                            <FaTag />
                        </div>
                        <div className="card-info">
                            <h2>26</h2>
                            <span>Tag</span>
                        </div>
                    </Link>
                    <Link to="/dashborad/all-sub-admin" className="single-card">
                        <div className="card-icon">
                            <FaUser />
                        </div>
                        <div className="card-info">
                            <h2>26</h2>
                            <span>Sub Admin</span>
                        </div>
                    </Link>
                  
                </div>
                <div className="card-chart">
                    <Chart 
                    options={chartOptions.options}
                    series={chartOptions.series}
                    type='bar'
                    height='100%'
                    width='100%'
                    />
                </div>
            </div>
        </div>
    );
};

export default DashboradIndex;
import React from 'react';
import './Features.css';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
const Features = () => {
    return (
        <div className='features'>
            <div className="feature-item">
                <div className="feature-title">Revanue</div>
                <div className="feature-status">
                    <p>$2,415</p>
                    <span>-11.4</span>
                    <ArrowDownwardIcon className='feature-icon negative'/>
                </div>
                <div className="feature-caption">Compared to last month</div>
                </div> 

                <div className="feature-item">
                <div className="feature-title">Sales</div>
                <div className="feature-status">
                    <p>$4,415</p>
                    <span>-1.4</span>
                    <ArrowDownwardIcon className='feature-icon negative'/>
                </div>
                <div className="feature-caption">Compared to last month</div>
                </div> 

                <div className="feature-item">
                <div className="feature-title">Cost</div>
                <div className="feature-status">
                    <p>$2,255</p>
                    <span>-2.4</span>
                    <ArrowUpwardIcon className='feature-icon '/>
                </div>
                <div className="feature-caption">Compared to last month</div>
                </div>            
        </div>
    );
}

export default Features;

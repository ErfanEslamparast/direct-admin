import React from 'react';
import './WidgetLg.css'
import { transactions } from '../../datas';
const WidgetLg = () => {
    return (
        <div className='WidgetLg-container'>
            <h3 className="title">Latest Transactions</h3>
            <div className='widgetLg'>
                   <ul className='widgetLg-header'>
                   <li className='customers'>Customers</li>
                    <li className='date'>Date</li>
                    <li className='amount'>Amount</li>
                    <li className='status'>Status</li>
                   </ul>
                   <ul className='widgetLg-body'>

                    {transactions.map(user=>(
                        <li className='widgetLg-item'>
                        <div className='userInfo'><img  className='user-image' src={user.imgSrc} />
                            <span className='username'>{user.name}</span>
                        </div>
                        
                        <span className='date'>{user.date}</span>
                        <span className='amount'>${user.amount}</span>
                        <span className={'status '+user.status}>{user.status}</span>
                    </li>
))}
                    </ul>
            </div>
        </div>
    );
}

export default WidgetLg;

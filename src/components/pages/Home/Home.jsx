import React from 'react';
import './Home.css';
import Features from '../../Features/Features';
import Chart from '../../Chart/Chart';
import {datas} from '../../../datas'
import WidgetSm from '../../WidgetSm/WidgetSm';
import WidgetLg from '../../WidgetLg/WidgetLg';
const Home = () => {
    return (
       <div className='home'>
            
            <Features/>
            <Chart title={'Month sale'} data={datas} dataKey={'sale'} parameters={'name'}/>
            <div className="widgets">
            <WidgetSm/>
            <WidgetLg/>
            </div>
         </div>
    );
}

export default Home;

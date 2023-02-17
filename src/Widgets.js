import React from 'react'
import './Widgets.css';
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {

    const newsAricle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__article__right">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>

    )

    return (
        <div className='widgets'>
            <div className="widgets__header">
                <h2>Linkedin News</h2>
                <InfoIcon />
            </div>

            {newsAricle('PAPA React is back', 'Top News - 90999 readers')}
            {newsAricle('CoronaVirus: SA Updates', 'Top News - 856 readers')}
            {newsAricle('Tesla hits new highs', 'Cars & auto - 300 readers')}
            {newsAricle('Bitcoin Breaks $22k', 'Crypto - 8000 readers')}
            {newsAricle('Is react too good?', 'Code - 123 readers')}
            {newsAricle('PAPA react launches course?', 'Top News - 6503 readers')}

        </div>
    )
}

export default Widgets
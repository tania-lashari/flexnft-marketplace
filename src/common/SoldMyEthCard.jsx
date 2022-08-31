import React from 'react';
import { Avatar } from '@mui/material';
import buycard from '../assets/buycard.webp';
import binance from '../assets/ethereum.png';

const SoldMyEthCard = ({data, walletvalue, loadWeb3}) => {
    return (
        <div className='owned-card'>
              {data["category"] === "ART" && (
        <img className="card__img" src={data?.image} alt="post" />
      )}

      {data["category"] === "VIDEO" && (
        <video className="card__img" controls>
          <source src={data?.image} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
       {data["category"] === "MEME" && (
        <img className="card__img" src={data?.image} alt="post" />
      )}

      {data["category"] === "MOVIE" && (
        <video className="card__img" controls>
          <source src={data?.image} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
       {data["category"] === "PHOTOGRAPHY" && (
        <img className="card__img" src={data?.image} alt="post" />
      )}
       {data["category"] === "AUDEO" && (
        <audeo className="card__img" controls>
          <source src={data?.image} type="audeo/*" />
          Your browser does not support the video tag.
        </audeo>
      )}
            <div className='card__content'>
                <div className='content__logos'>
                   <img src={binance} className='logos' />
                </div>
                <div className='content__heading'>{data?.name}</div>
                <div className='content__data'>
                    <div className='data__left'>
                        <div className='left__title'>Token address:</div>
                        <a href='https://bscscan.com/token/0x2c2dab5e5708fec52c2c40cef7b9c500a0bdc2d5' className='left__link'>0x2c2dab5e5708fec52c2c40cef7b9c500a0bdc2d5 </a>
                    </div>
                    <div className='data__right'>
                        <div className='right__title'>Token Id:</div>
                        <div className='right__title'>{data?.itemId}</div>
                    </div>

                </div>
                {/*<button className='content___details'>DETAILS</button>*/}
            </div>
        </div>
    )
}

export default SoldMyEthCard
import React from 'react';
import { Avatar } from '@mui/material';
import buycard from '../assets/buycard.webp';
import binance from '../assets/ethereum.png';
import { Link } from 'react-router-dom';

const SoldEthCard = ({data, walletvalue, loadWeb3}) => {
    return (
        <div className='sold-card'>
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
                    {/*} <Avatar src="/broken-image.jpg" />*/}
                    <img src={binance} className='logos' />
                </div>
                <div className='content__heading'>{data?.name}</div>
                <div className='content___buy'>
                  {/*}  <Link to="#" >VIEW ARTWORK</Link>*/}
                </div>
            </div>
        </div>
    )
}

export default SoldEthCard;
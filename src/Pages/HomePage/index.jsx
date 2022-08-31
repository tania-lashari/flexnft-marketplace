import React from 'react'
import { Avatar } from '@mui/material';
import heroCard from '../../assets/heroCard.webp';
import binance from '../../assets/binance.svg';
import AppButton from '../../common/AppButton'
import { Link } from 'react-router-dom';
import BuyCard from '../../common/BuyEthCard';
import CreatorCard from '../../common/CreatorCard';
import ethereum from '../../assets/ethereum.png'
//import binance from '../../assets/binance.svg'

const HomePage = () => {

    return (
        <div className='home-page'>
            <div className='page__intro'>
                <div className='intro__content'>

                    <div className='content__heading'>Create and Explore The World Of NFT's</div>
                    <div className='content__desc'>The easiest way to create, buy and sell NFT's in a space</div>
                    <div className='content--button'>
                        <AppButton title='BNB' /><AppButton title='ETH' />
                    </div>

                </div>
                {/* <div className='intro_pic' dangerouslySetInnerHTML={{
                    __html: `
        <video
          loop
          muted
          autoplay
          playsinline
          src="${nft1}"
          class="list__img"
        />,
      ` }} ></div> */}
                <div className='intro_pic'>
                  {/*}  <img className='pic' src={heroCard} />*/}
                   
                </div>
            </div>
            {/*<div className='page__featured'>
                <div className='featured__top'>
                    <div className='top__heading'>Featured Artworks</div>
                    <Link to='#' className='top__links'>View all</Link>
                </div>
                <div className='featured__wrapper'>
                   {/*} <BuyCard />
                    <BuyCard />
                    <BuyCard />
                    <BuyCard />
                    <BuyCard />
                    <BuyCard />
                    <BuyCard />
    <BuyCard />*/}
               {/*} </div>

            </div>
            <div className='page__featured'>
                <div className='featured__top'>
                    <div className='top__heading'>Featured Creators </div>
                </div>
                <div className='featured__wrapper1'>
                   {/*} <CreatorCard />
                    <CreatorCard />
                    <CreatorCard />
                    <CreatorCard />
                    <CreatorCard />
                    <CreatorCard />
                    <CreatorCard />
                    <CreatorCard />
                    <CreatorCard />
                    <CreatorCard />
                    <CreatorCard />
                    <CreatorCard />
                    <CreatorCard />
                    <CreatorCard />
    <CreatorCard />

                </div>

            </div>*/}
        </div>
    )
}

export default HomePage
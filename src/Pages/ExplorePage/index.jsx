import React,{useEffect} from 'react'
import BuyEthCard from '../../common/BuyEthCard'
import BuyBnbCard from '../../common/BuyBnbCard'
import ethereum from '../../assets/ethereum.png'
import binance from '../../assets/binance.svg'
import Filters from './Filters'

function ExplorePage({setAlertModal,alertModal, address,bscWeb3, ethWeb3,loadEthNFTs,ethnfts,loadBnbNFTs,bnbnfts, walletvalue, loadWeb3}) {

    useEffect(() => {
        loadEthNFTs()
        loadBnbNFTs()
    }, []);

    return (
        <div className='explore-page'>
            <div className='page__filters'>

                <Filters />
            </div>
            <div className='page__content'>
                <div className='content__heading'>Explore Artworks</div>
                <div className='content__wrapper'>
               


                {ethnfts?.map((data) => {
                    return <BuyEthCard bscWeb3={bscWeb3} ethWeb3={ethWeb3} data={data} walletvalue={walletvalue} loadWeb3={loadWeb3} />

                })}
                

                {bnbnfts?.map((data) => {
                    return <BuyBnbCard setAlertModal={setAlertModal} alertModal={alertModal} address ={address} bscWeb3={bscWeb3} ethWeb3={ethWeb3} data={data}  walletvalue={walletvalue} loadWeb3={loadWeb3}/>

                })}
               
                </div>
            </div>

        </div>
    )
}

export default ExplorePage
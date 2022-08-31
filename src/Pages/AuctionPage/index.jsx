import React,{useEffect} from 'react'
import AuctionBnbCard from '../../common/AuctionBnbCard'
import AuctionEthCard from '../../common/AuctionEthCard'


const AuctionPage = ({address, bscWeb3, ethWeb3,getbnbData, bnbcost, loadEthANFTs, ethAnfts, loadBnbANFTs, bnbAnfts, walletvalue, loadWeb3} ) => {

    useEffect(() => {
        //loadEthANFTs()
        loadBnbANFTs()
        getbnbData()
    }, []);
    return (
        <div className='auction-page'>
            <div className='page__heading'>Explore Auctions</div>
            <div className='page__wrapper'>
            {ethAnfts?.map((data) => {
                    return <AuctionEthCard bscWeb3={bscWeb3} ethWeb3={ethWeb3} getbnbData={getbnbData} bnbcost={bnbcost}  data={data}  walletvalue={walletvalue} loadWeb3={loadWeb3}/>

                })}

                {bnbAnfts?.map((data) => {
                    return <AuctionBnbCard address={address} bscWeb3={bscWeb3} ethWeb3={ethWeb3} getbnbData={getbnbData} bnbcost={bnbcost}  data={data}  walletvalue={walletvalue} loadWeb3={loadWeb3}/>

                })}
            </div>
        </div>
    )
}

export default AuctionPage
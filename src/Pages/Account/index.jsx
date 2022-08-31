// ====================== IMPORTED LIBRARIES ========================
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
//import BuyCard from '../../common/BuyEthCard';
//import AuctionCard from '../../common/AuctionCard';
//import CreatorsProfileInfo from './CreatorsProfileInfo';
//import OwnedCard from '../../common/OwnedCard';
import bgImage from '../../assets/hero.webp'
import AuctionMyBnbCard from '../../common/AuctionMyBnbCard'
import AuctionMyEthCard from '../../common/AuctionMyEthCard'
import ListedBnbCard from '../../common/ListedBnbCard'
import ListedEthCard from '../../common/ListedEthCard'
import OwnedBnbCard from '../../common/OwnedBnbCard'
import OwnedEthCard from '../../common/OwnedEthCard'
import SoldMyBnbCard from '../../common/SoldMyBnbCard'
import SoldMyEthCard from '../../common/SoldMyEthCard'


const Account = ({bscWeb3, ethWeb3,
    address, bnbmyLnfts, ethmyLnfts, bnbmySnfts, ethmySnfts, bnbmyOnfts, ethmyOnfts, ethmyAnfts, bnbmyAnfts, loadMyBnbONFTs, loadMyEthONFTs,  loadMyBnbLNFTs, loadMyEthLNFTs,  loadMyBnbSNFTs, loadMyEthSNFTs,  loadMyBnbANFTs, loadMyEthANFTs, walletvalue, loadWeb3
              
}) => {
    const [activeTab, setActiveTab] = useState('LISTED');
    const params = useParams();

    useEffect(() => {
        //loadMyBnbONFTs()
       // loadMyEthONFTs()
       // loadMyBnbLNFTs()
       // loadMyEthLNFTs()
       // loadMyBnbSNFTs()
       // loadMyEthSNFTs()
       // loadMyBnbANFTs()
       // loadMyEthANFTs()
    }, []);

    return (
        <>
           
            <div className="desktop-profile-info">
              
            <img src={bgImage} className="profile__background" />
            <div className="profile--actions">
            </div>
            <div className="profile__info">
                <div className="update__info">
                   {/*} {profilePic ? (
                        <img src={profilePic} className="picture" />
                    ) : (
                        <img src={`/icons/visual-profile.svg`} className="missing__picture" />
                    )}*/}
                    <div className="info__profile">

                        <div className="profile__username">{walletvalue}
                        
                            {/* <img className='user__verified' src='/icons/verified.svg' /> */}
                        </div>

                      {/*}  <div className="profile__bio">NFT art collector!</div>
                        <div className="profile__about-heading">About Me</div>
                <div className="profile__about-text">New and upcoming NFT artist. For the past 10 years I’ve been serving Active Duty with the U.S. Army. Afghan war vet, Operation Enduring Freedom, and worked for two years at Guantanamo Bay 🇺🇸 Getting out the Army in a few weeks. Currently trying to find my place in the civilian world, I think this might be my calling. I accept requests to make custom NFTs on Twitter via: Safemoon_Demon 💯💎</div>*/}

                    </div>
                </div>
            </div>

        </div>
            <div className='creators-page'>
            
                <div className='page__heading'>
                    Artworks
                </div>
                {address === 'Connect' ? <div className='app__description'>Connect your wallet to see your Art</div> :
                <div className='page__tabs'>
                    
                    <div className={activeTab === 'LISTED' ? 'tabs__name active' : 'tabs__name'} onClick={() => setActiveTab('LISTED')}>LISTED NFT'S</div>
                    <div className={activeTab === 'SOLD' ? 'tabs__name active' : 'tabs__name'} onClick={() => setActiveTab('SOLD')}>SOLD NFT'S</div>
                    <div className={activeTab === 'OWNED' ? 'tabs__name active' : 'tabs__name'} onClick={() => setActiveTab('OWNED')}>OWNED NFT'S</div>
                    <div className={activeTab === 'AUCTION' ? 'tabs__name active' : 'tabs__name'} onClick={() => setActiveTab('AUCTION')}>AUCTION NFT'S</div>
                </div>}
                {activeTab === 'LISTED' && <div className='page__wrapper'>
                {ethmyLnfts?.map((data) => {
                    return <ListedEthCard data={data}  walletvalue={walletvalue} loadWeb3={loadWeb3}/>

                })}

                {bnbmyLnfts?.map((data) => {
                    return <ListedBnbCard data={data}  walletvalue={walletvalue} loadWeb3={loadWeb3}/>

                })}
                </div>}
                {activeTab === 'SOLD' && <div className='page__wrapper'>
                {ethmySnfts?.map((data) => {
                    return <SoldMyEthCard data={data}  walletvalue={walletvalue} loadWeb3={loadWeb3}/>

                })}

                {bnbmySnfts?.map((data) => {
                    return <SoldMyBnbCard data={data}  walletvalue={walletvalue} loadWeb3={loadWeb3}/>

                })}
                </div>}
                {activeTab === 'OWNED' && <div className='page__wrapper'>
                {ethmyOnfts?.map((data) => {
                    return <OwnedEthCard data={data}  walletvalue={walletvalue} loadWeb3={loadWeb3}/>

                })}

                {bnbmyOnfts?.map((data) => {
                    return <OwnedBnbCard data={data}  walletvalue={walletvalue} loadWeb3={loadWeb3}/>

                })}
                </div>}
                {activeTab === 'AUCTION' && <div className='page__wrapper'>
                {ethmyAnfts?.map((data) => {
                    return <AuctionMyEthCard bscWeb3={bscWeb3} ethWeb3={ethWeb3} data={data}  walletvalue={walletvalue} loadWeb3={loadWeb3}/>

                })}

                {bnbmyAnfts?.map((data) => {
                    return <AuctionMyBnbCard bscWeb3={bscWeb3} ethWeb3={ethWeb3} data={data}  walletvalue={walletvalue} loadWeb3={loadWeb3}/>

                })}
                </div>}
            </div>
        </>
    );
};

export default Account;

// ====================== IMPORTED LIBRARIES ========================
import React, { useState } from 'react';
import { useParams } from "react-router-dom";
//import BuyCard from '../../common/BuyEthCard';
//import AuctionCard from '../../common/AuctionCard';
import CreatorsProfileInfo from './CreatorsProfileInfo';
//import OwnedCard from '../../common/OwnedCard';


const CreatorsPage = ({
    data = {},
}) => {
    const [activeTab, setActiveTab] = useState('LISTED');
    const params = useParams();

    return (
        <>
            <CreatorsProfileInfo />
            
            <div className='creators-page'>
                <div className='page__heading'>
                    Artworks
                </div>
                <div className='page__tabs'>
                    <div className={activeTab === 'LISTED' ? 'tabs__name active' : 'tabs__name'} onClick={() => setActiveTab('LISTED')}>LISTED NFT'S</div>
                    <div className={activeTab === 'SOLD' ? 'tabs__name active' : 'tabs__name'} onClick={() => setActiveTab('SOLD')}>SOLD NFT'S</div>
                    <div className={activeTab === 'OWNED' ? 'tabs__name active' : 'tabs__name'} onClick={() => setActiveTab('OWNED')}>OWNED NFT'S</div>
                    <div className={activeTab === 'AUCTION' ? 'tabs__name active' : 'tabs__name'} onClick={() => setActiveTab('AUCTION')}>AUCTION NFT'S</div>
                </div>
                {activeTab === 'LISTED' && <div className='page__wrapper'>
                   {/*} <BuyCard />
                    <BuyCard />
                    <BuyCard />
                    <BuyCard />
                    <BuyCard />
                    <BuyCard />
                    <BuyCard />
    <BuyCard />*/}
                </div>}
                {activeTab === 'SOLD' && <div className='page__wrapper'>
                  {/*}  <BuyCard buttonName='Sold' />
                    <BuyCard buttonName='Sold' />
                    <BuyCard buttonName='Sold' />
                    <BuyCard buttonName='Sold' />
                    <BuyCard buttonName='Sold' />
                    <BuyCard buttonName='Sold' />
                    <BuyCard buttonName='Sold' />
<BuyCard buttonName='Sold' />*/}
                </div>}
                {activeTab === 'OWNED' && <div className='page__wrapper'>
                  {/*}  <OwnedCard />
                    <OwnedCard />
                    <OwnedCard />
                    <OwnedCard />
                    <OwnedCard />
                    <OwnedCard />
                    <OwnedCard />
<OwnedCard />*/}
                </div>}
                {activeTab === 'AUCTION' && <div className='page__wrapper'>
                   {/*} <AuctionCard />
                    <AuctionCard />
                    <AuctionCard />
                    <AuctionCard />
                    <AuctionCard />
                    <AuctionCard />
                    <AuctionCard />
<AuctionCard />*/}
                </div>}
            </div>
        </>
    );
};

export default CreatorsPage;

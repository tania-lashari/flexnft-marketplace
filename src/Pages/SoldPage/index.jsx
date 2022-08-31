import React,{useEffect} from 'react'
import SoldEthCard from '../../common/SoldEthCard'
import SoldBnbCard from '../../common/SoldBnbCard'

const SoldPage = ({loadEthSNFTs, ethSnfts, loadBnbSNFTs, bnbSnfts}) => {

    useEffect(() => {
        loadEthSNFTs()
        loadBnbSNFTs()
    }, []);
    return (
        <div className='sold-page'>
            <div className='page__heading'>Recently Sold</div>
            <div className='page__wrapper'>
               
            {ethSnfts?.map((data) => {
                    return <SoldEthCard data={data}  />

                })}

                {bnbSnfts?.map((data) => {
                    return <SoldBnbCard data={data}  />

                })}
            </div>
        </div>
    )
}

export default SoldPage
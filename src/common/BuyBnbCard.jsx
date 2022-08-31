import React, { useState } from 'react';
import { Avatar } from '@mui/material';
import buycard from '../assets/buycard.webp';
import binance from '../assets/binance.svg';
import AlertModal from "../AlertModal";

import Web3 from "web3";
import {
    contractAddress1,
    contractabi1,
    contractAddress2,
    contractabi2,
    // tokenAddress, tokenabi
  } from "../constants/constants";


const BuyBnbCard = ({address, buttonName = 'Buy',bscWeb3, ethWeb3, data, walletvalue, loadWeb3 }) => {
    const [nftprice, nftsetprice] = useState(false)
    const [alertModal, setAlertModal] = useState(false);

    const buytoken = async () => {
        //setshowbbuy(false)
       
        try {
          //bscWeb3()
          // console.log("accountDetails", referral);
          const web3 = window.web3;
          let ccontract = new web3.eth.Contract(contractabi1, contractAddress1);
          bscWeb3()
          //let tokencontract = new web3.eth.Contract(tokenabi, tokenAddress);
          console.log("ll", contractAddress1)
    
    
    
          let tokens = await ccontract.methods
            .createMarketSale(data.itemId)
            .send({
              from: walletvalue,
              gasLimit: 200000,
              value: data.price
            })
            .on("transactionHash", async (hash) => {
              console.log("input", "Your transaction is pending");
    
    
            })
            .on("receipt", async (receipt) => {
              console.log("input", "Your transaction is confirmed", receipt);
              loadWeb3()
              //setshowconfirm(true);
              //setshowbuy(false);
    
            })
            .on("error", async (error) => {
              console.log("input", "User denied transaction", error);
            });
        } catch (e) {
          console.log("error", e);
          console.log("error", e.mesage);
        }
    
       
      };
    

    return (
     
        <div className='buy-card'>
             
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
                <div className='content__price'>
                    <div className='price__title'>Price</div>
                    <div className='price__number'>{data?.pricee} <span></span></div>
                </div>
                <button className='content___buy' title={address === 'Connect' ? `Connect your Wallet to Buy!` : `Buy Now`}onClick={buytoken}>Buy</button>/>
                {/*<button className={buttonName === 'Sold' ? `content___sold` : `content___buy`}>{buttonName}</button>
                {buttonName === 'Buy' && (
        <button className='content___buy'>{buttonName}</button>
      )}

      {buttonName === 'uy' && (
       <button className='content___buy'>{buttonName}</button>
      )}*/}
            </div>
            <AlertModal
        setAlertModal={setAlertModal}
        alertModal={alertModal}
      />
        </div>
      
     
    )
}

export default BuyBnbCard
import React, {useState} from 'react';
import { Avatar } from '@mui/material';
import buycard from '../assets/buycard.webp';
import binance from '../assets/binance.svg';
import Web3 from "web3";
import BuyTransferModal from '../Components/BuyTransferModal';
import SellTransferModal from '../Components/BuyTransferModal';
import {
    contractAddress1,
    contractabi1,
    contractAddress2,
    contractabi2,
    // tokenAddress, tokenabi
  } from "../constants/constants";

const OwnedBnbCard = ({data, walletvalue, loadWeb3}) => {
    const [bnbvalue, setbnbValue] = useState();
    const [showsell, setshowsell] = useState(false);
    const [showadd, setshowadd] = useState(false);
    const [addressvalue, setaddressValue] = useState();
    const [isOpen, setIsOpen] = useState(false);
    const [isTransferOpen, setIsTransferOpen] = useState(false);

    const sellinputbnb = async (e) => {
        try {
          const web3 = window.web3;
          // console.log("bscAddress true", typeof e.target.value);
          // console.log("bscAddress true", e.target.value === "");
          // console.log("bscAddress", window.web3.utils.toWei(e.target.value))
          setbnbValue(web3.utils.toWei(e.target.value));
          console.log("mmm", bnbvalue);
          console.log("nn", walletvalue)
        } catch (e) {
          console.log("error", e);
        }
      };
    
      const inputaddress = async (e) => {
        try {
          const web3 = window.web3;
          // console.log("bscAddress true", typeof e.target.value);
          // console.log("bscAddress true", e.target.value === "");
          // console.log("bscAddress", window.web3.utils.toWei(e.target.value))
          setaddressValue(e.target.value);
          console.log("mmm", addressvalue);
          //console.log("nn",walletvalue)
        } catch (e) {
          console.log("error", e);
        }
      };
    
      const sell = async () => {
        setshowsell(false)
        try {
          const web3 = window.web3;
          let contract = new web3.eth.Contract(contractabi2, contractAddress2);
          console.log("mmmmm", data.itemId, contractAddress2, data.price)
          let accountDetails = await contract.methods
            .resellToken(data.itemId, bnbvalue)
            .send({
              from: walletvalue,
              gasLimit: 3000000,
            })
            .on("transactionHash", async (hash) => {
              console.log("Your transaction is pending");
            })
            .on("receipt", async (receipt) => {
              console.log("Your transaction is confirmed", receipt);
              //toast.success("Your transaction is confirmed");
              loadWeb3()
    
            })
            .on("error", async (error) => {
              console.log("User denied transaction", error);
            });
        } catch (e) {
          console.log("error", e);
        }
        setIsOpen(false);
    
      };
    
      const transfer = async () => {
        setshowsell(false)
        try {
          const web3 = window.web3;
          let contract = new web3.eth.Contract(contractabi2, contractAddress2);
          console.log("mmmmm", data.itemId, contractAddress2, data.price)
          let accountDetails = await contract.methods
            .transferToken(data.itemId, addressvalue)
            .send({
              from: walletvalue,
              gasLimit: 3000000,
            })
            .on("transactionHash", async (hash) => {
              console.log("Your transaction is pending");
            })
            .on("receipt", async (receipt) => {
              console.log("Your transaction is confirmed", receipt);
              //toast.success("Your transaction is confirmed");
              loadWeb3()
    
            })
            .on("error", async (error) => {
              console.log("User denied transaction", error);
            });
        } catch (e) {
          console.log("error", e);
        }
        setIsTransferOpen(false);
    
      };
      const toggle = () => {
        setIsOpen(!isOpen);
    
      }
      const toggleTransfer = () => {
        setIsTransferOpen(!isTransferOpen);
    
      }
      console.log(isTransferOpen);

    return (
        <>
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
               {/*} <div className='card__actions'>
                <button className='actions--transfer' onClick={toggleTransfer}>TRANSFER</button>
                <button className='actions--staking'>AUCTION</button>
                <button className='actions--sell'onClick={toggle}>SELL</button>
       </div>*/}
            </div>
          
        </div>
        <BuyTransferModal
        buttonTitle="Transfer"
        onChange={inputaddress}
        setIsOpen={setIsTransferOpen}
        isOpen={isTransferOpen}
        onClick={transfer}
        toggle={toggleTransfer}
      />
      <SellTransferModal
        buttonTitle="Sell"
        onChange={sellinputbnb}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        onClick={sell}
        toggle={toggle}

      />
        </>
    )
}

export default OwnedBnbCard
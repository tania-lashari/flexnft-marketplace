import React, {useState, useEffect} from 'react';
import { Avatar } from '@mui/material';
import buycard from '../assets/buycard.webp';
import video from '../assets/nft1.mp4';
import binance from '../assets/ethereum.png';
import Web3 from "web3";
import SellTransferModal from '../Components/BuyTransferModal';
import BuyTransferModal from '../Components/BuyTransferModal';
import {
    contractAddress1,
    contractabi1,
    contractAddress2,
    contractabi2,
    // tokenAddress, tokenabi
  } from "../constants/constants";
  import AlertModal from "../AlertModal";

const AuctionEthCard = ({bscWeb3, ethWeb3,data, walletvalue, loadWeb3,getbnbData, bnbcost}) => {
  const [bnbvalue, setbnbValue] = useState();
  const [showsell, setshowsell] = useState(false);
  const [showadd, setshowadd] = useState(false);
  const [addressvalue, setaddressValue] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [isTransferOpen, setIsTransferOpen] = useState(false);
  const [bidbutton, setbidbutton] = useState(true)
  const [endbutton, setendbutton] = useState(false)
  const [alertModal, setAlertModal] = useState(false);
  
  

  var t = 0;
  var f = 1;

  const setbutton = async () => {
   if (t >= f){
     setbidbutton(false)
     setendbutton(true)
      
   }
  };

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
    //ethWeb3()
    try {
      const web3 = window.web3;
      let contract = new web3.eth.Contract(contractabi2, contractAddress2);
      ethWeb3()
      console.log("mmmmm", data.itemId, contractAddress2, data.price)
      let accountDetails = await contract.methods
        .bidOnAuction(data.itemId, bnbvalue)
        .send({
          from: walletvalue,
          gasLimit: 3000000,
          value:bnbcost,
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




    const buytoken = async () => {
        //setshowbbuy(false)
    
        try {
          // console.log("accountDetails", referral);
          const web3 = window.web3;
          let ccontract = new web3.eth.Contract(contractabi2, contractAddress2);
          //let tokencontract = new web3.eth.Contract(tokenabi, tokenAddress);
          console.log("ll", contractAddress2)
    
    
    
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

      useEffect(() => {
        setbutton()
     }, []);
    return (
      <>
        <div className='auction-card'>
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
            {/* <img className='card__img' src={buycard} /> */}
           {/*} <div className='intro_pic' dangerouslySetInnerHTML={{
                __html: `
        <video
          loop
          muted
          autoplay
          playsinline
          src="${video}"
          class="card__img"
        />,
           ` }} ></div>*/}
            <div className='card__content'>
                <div className='content__logos'>
                     {/*} <Avatar src="/broken-image.jpg" />*/}
                    <img src={binance} className='logos' />
                </div>
                <div className='content__heading'>{data?.name}1</div>
                <div className='content__bid'>
                    <div className='bid__title'>Bid</div>
                    <div className='bid__number'>{data?.pricee} </div>
                </div>
                {endbutton? <button className='content___buy'>Auction Ended</button>:null}
                {bidbutton? <button className='content___bbuy'onClick={toggle}>Bid</button>:null}
            </div>
        </div>
        <SellTransferModal
        buttonTitle="Confirm"
        onChange={sellinputbnb}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        onClick={sell}
        toggle={toggle}

      />
       <BuyTransferModal
        buttonTitle="Transfer"
        onChange={inputaddress}
        setIsOpen={setIsTransferOpen}
        isOpen={isTransferOpen}
        onClick={sell}
        toggle={toggleTransfer}
      />
        </>
    )
}

export default AuctionEthCard;
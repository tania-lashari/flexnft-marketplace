import React, { useContext, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/nftflexlogo.png";

import AppButton from "../../common/AppButton";
import ConnectModal from "../../ConnectModal";
import { ActiveContext } from "../../App";

const DesktopHeader = () => {
  const {
    active, setActive, address,
    loadNFTs,
    walletconnect,lloadWeb3, getData, hidenetwork, hideconnect,bscWeb3,ethWeb3,hidewalletnetwork,walletethconnect,
    loadWeb3, connectWallet, show, showmeta, showwallet, setShow, account, nfts, walletvalue
 
  } = useContext(ActiveContext);
  const { pathname } = useLocation();

  const handleNetworkChange = (e) => {
  
    let { value } = e.target;
    //setPetsValue(value);

    if (value === 'Binance') {
      bscWeb3()
     
    }
    else if(value === 'Ethereum') {
      ethWeb3()
     
    }
   


}

const handlewalletNetworkChange = (e) => {
  
  let { value } = e.target;
  //setPetsValue(value);

  if (value === 'Binance') {
    walletconnect()
   
  }
  else if(value === 'Ethereum') {
    walletethconnect()
   
  }
 


}

  return (
    <>
      <div className="header" >
        <div className="header__left" data-aos="fade-up" >
          <Link to='/'>
            <img className="left__logo" src={logo} />
          </Link>
        </div>
        <div className="header__right" data-aos="fade-right">
          <Link to='/explore'
            className={pathname === '/explore' ? `right__text border-bottom` : `right__text`}
          >
            Explore
          </Link>
          <Link to='/auction'
            className={pathname === '/auction' ? `right__text border-bottom` : `right__text`}
          >
            Auctions
          </Link>
          <Link to='/sold'
            className={pathname === '/sold' ? `right__text border-bottom` : `right__text`}
          >
            Sold
          </Link>
         {/*} <Link to='/compensation'
            className={pathname === '/compensation' ? `right__text border-bottom` : `right__text`}
          >
            Collections
  </Link>*/}
             <Link to='/Account'
            className={pathname === '/Account' ? `right__text border-bottom` : `right__text`}
          >
            Account
  </Link>

          <Link to='/create'
            className={pathname === '/create' ? `right__text border-bottom` : `right__text`}
          >
            Create
          </Link>
         
         {hidenetwork? <div className='select__wrapper'>
                        <label>Network</label>
                        <select name="network" id="network"
                          onChange={handleNetworkChange} >
                            <option value="Binance">Binance</option>
                            <option value="Ethereum">Ethereum</option>
                            {/*<option value="Polygon">Polygon</option>*/}
                        </select>
                    </div>:null}
                    {hidewalletnetwork? <div className='select__wrapper'>
                        <label>Network</label>
                        <select name="network" id="network"
                          onChange={handlewalletNetworkChange} >
                            <option value="Binance">Binance</option>
                            <option value="Ethereum">Ethereum</option>
                            {/*<option value="Polygon">Polygon</option>*/}
                        </select>
                    </div>:null}
         {hideconnect? <div className="right__mint">
            <ConnectModal />
          </div>:null}
        </div>
      </div>
    </>

  );
};

export default DesktopHeader;

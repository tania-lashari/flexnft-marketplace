import React, { useContext, useEffect, useState } from "react";
import Modal from "react-modal";

import cW from "./assets/cW.png";
import mM from "./assets/mM.png";
import AppButton from "./common/AppButton";
import { ActiveContext } from "./App";



const ConnectModal = () => {
  const {
    active, setActive, address,
    loadNFTs,
    walletconnect,
    loadWeb3, connectWallet, show, showmeta, showwallet, setShow, account, nfts, walletvalue
  
  } = useContext(ActiveContext);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div>

      <div>
        <AppButton title='Connect Wallet' onClick={toggle} />

      </div>
      <Modal
        isOpen={isOpen}
        onRequestClose={toggle}
        overlayClassName="request-modal-overlay"
        className="request-modal"
      >
        <div class="connect-modal">
          <button
            type="button"
            onClick={loadWeb3}
            class="modal--metamask"
          >
            <img className="w--180 " src={mM} alt="" />
            Metamask
            <div className="text">
              Connect to your MetaMask Wallet
            </div>
          </button>
          <button
            type="button"
            onClick={walletconnect}
            class="modal--metamask"
          >
            {" "}
            <img className="w--90 h--90" src={cW} alt="" /> WalletConnect
            <div className="text">
              Scan with WalletConnect to connect
            </div>
          </button>
        </div>

      </Modal>
    </div>
  );
};
export default ConnectModal;

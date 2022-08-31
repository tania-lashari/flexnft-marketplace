import React, { useState, useContext } from "react";
import { slide as Menu } from "react-burger-menu";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import menu from "../../assets/menu.svg";
import AppButton from "../../common/AppButton";
import ConnectModal from "../../ConnectModal";
import { ActiveContext } from "../../App";


const MobileHeader = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const {
    address,
    loadNFTs,
    walletconnect,
    loadWeb3, connectWallet, show, showmeta, showwallet, setShow, account, nfts, walletvalue
  } = useContext(ActiveContext);
  const { pathname } = useLocation();

  return (
    <>
      <div className="mobile-header">
        <Link to='/' onClick={() => setIsOpenMenu(false)}>
          <img src={logo} className="header-logo" />
        </Link>
        <img
          src={menu}
          className="header-hamberg"
          onClick={() => setIsOpenMenu(true)}
        />
      </div>
      <Menu
        right
        width={"100%"}
        id="mbl-menu"
        className="mbl-menu"
        overlayClassName="mbl-menu-overlay"
        isOpen={isOpenMenu}
        onClose={() => {
          setIsOpenMenu(false);
        }}
        onStateChange={(state) => setIsOpenMenu(state.isOpen)}
      >
        <div className="menu-items">
          <div className="mobile__top">
            <Link to='/' onClick={() => setIsOpenMenu(false)}>
              <img src={logo} className="header-logo" />
            </Link>
            <img
              src={menu}
              alt="menu-logo"
              className="header-hamberg"
              onClick={() => setIsOpenMenu(false)}
            />
          </div>
          <div className="menu-buttons">
            <Link to='/' onClick={() => setIsOpenMenu(false)} className={pathname === '/' ? `page-links border-bottom` : `page-links`}>
              HOME
            </Link>

            <Link to='/about-us' onClick={() => setIsOpenMenu(false)} className={pathname === '/about-us' ? `page-links border-bottom` : `page-links`}>
              About Us
            </Link>
            <Link to='faq' onClick={() => setIsOpenMenu(false)} className={pathname === '/faq' ? `page-links border-bottom` : `page-links`}>
              FAQ
            </Link>
            <Link to='/compensation' onClick={() => setIsOpenMenu(false)} className={pathname === '/compensation' ? `page-links border-bottom` : `page-links`}>
              COMPENSATION
            </Link>
            <div className="mt--30">
              <Link to='#' onClick={() => setIsOpenMenu(false)}>
                <ConnectModal />
              </Link>
            </div>
          </div>
        </div>
      </Menu>
    </>
  );
};

export default MobileHeader;

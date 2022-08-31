import React from "react";

import discord from "../assets/discord.png";
import twitter from '../assets/twitter.png';
import facebook from '../assets/facebook.webp';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__top">
        <div className="top__left">Get Latest Updates from Explore.NFT</div>
        <div className="top__right">
          <a>
            <img src={facebook} />
          </a>
          <a>
            <img src={twitter} />
          </a>
          <a>
            <img src={discord} />
          </a>

        </div>
      </div>
      <div className="footer__bottom">
        <div className="bottom__links">
          <div className="links__heading">Navigation</div>
          <div className="links__title">Home </div>
          <div className="links__title">Explore</div>
          <div className="links__title">Auctions</div>
          <div className="links__title">Create</div>
          <div className="links__title">Account</div>

        </div>
        <div className="bottom__links">
          <div className="links__heading">Explore</div>
          <div className="links__title">Explore Artworks</div>
          <div className="links__title">Explore Auctions</div>
          <div className="links__title">Sold</div>
        </div>
        <div className="bottom__links">
          <div className="links__heading">Compnay</div>
          <div className="links__title">Terms of Service</div>
        </div>

      </div>
    </div>
  );
};

export default Footer;

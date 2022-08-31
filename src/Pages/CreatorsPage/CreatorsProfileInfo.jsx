// ====================== IMPORTED LIBRARIES ========================
import React from 'react';
import { useParams } from "react-router-dom";

import bgImage from '../../assets/profile_bg.png'
import profilePic from '../../assets/creator.gif'


const CreatorsProfileInfo = ({
    data = {},
}) => {
    const params = useParams();

    return (
        <div className="desktop-profile-info">
            <img src={bgImage} className="profile__background" />
            <div className="profile--actions">
            </div>
            <div className="profile__info">
                <div className="update__info">
                    {profilePic ? (
                        <img src={profilePic} className="picture" />
                    ) : (
                        <img src={`/icons/visual-profile.svg`} className="missing__picture" />
                    )}
                    <div className="info__profile">
                        <div className="profile__username">
                            0x14a323e8af5aad4fb4949f9369654cbeb6a90026

                            {/* <img className='user__verified' src='/icons/verified.svg' /> */}
                        </div>

                        <div className="profile__bio">NFT art collector!</div>
                        <div className="profile__about-heading">About Me</div>
                        <div className="profile__about-text">New and upcoming NFT artist. For the past 10 years I’ve been serving Active Duty with the U.S. Army. Afghan war vet, Operation Enduring Freedom, and worked for two years at Guantanamo Bay 🇺🇸 Getting out the Army in a few weeks. Currently trying to find my place in the civilian world, I think this might be my calling. I accept requests to make custom NFTs on Twitter via: Safemoon_Demon 💯💎</div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default CreatorsProfileInfo;

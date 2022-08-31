import React from 'react'
import { Link } from 'react-router-dom';
import creator from '../assets/creator.gif';
import verified from '../assets/verified.svg'

const CreatorCard = ({ wallet = '0x14a323e8af5aad4fb4949f9369654cbeb6a90026' }) => {
    return (
        <Link to={`/explore/creators/${wallet}`} >
            <div className='creator-card'>
                <div className='card__profile'>
                    <img className='profile__pic' src={creator} />
                    <img className='profile__verified' src={verified} />
                </div>
                <div className='card__username'>WANTED: Dead or Alive </div>
            </div>
        </Link>
    )
}

export default CreatorCard
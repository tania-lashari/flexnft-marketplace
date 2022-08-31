import React from 'react';
import Modal from 'react-modal';
import AlertModal from '../AlertModal';
import AppButton from '../common/AppButton';
//import AlertModal from "../AlertModal";



const BuyTransferModal = ({
    isOpen,
    toggle,
    buttonTitle,
    onClick,
    onChange,
  
    address
}) => {
   
    return (
        <>
       
        <Modal
            isOpen={isOpen}
            onRequestClose={toggle}
            overlayClassName="request-modal-overlay"
            className="request-modal"
        >
            <div className="request-email pb--20">
                <div className="request--cancel">
                    <img src="/images/header/cross.svg" onClick={toggle} />
                </div>
                <input
                    className='modal__input'
                    type="text"
                    placeholder="bnb"
                    onChange={onChange}
                />

                <div className="request--button" onClick={onClick}>
                    {buttonTitle}
                </div>
            </div>
        </Modal>
       
        </>
    );
};
export default BuyTransferModal;

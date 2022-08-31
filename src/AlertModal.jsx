import React from "react";
import Modal from "react-modal";



const customStyles = {
  content: {
    top: "20%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0",
    width: "300px",
    height: "150px",
  },
  overlay: { zIndex: 1000, backgroundColor: "rgba(255, 255, 255, 0.35)" },
};

const AlertModal = ({ setAlertModal, alertModal }) => {
  const toggleAlert = () => {
    setAlertModal(!alertModal);
  };

  return (
    <div>
      <Modal
        isOpen={alertModal}
        onRequestClose={toggleAlert}
        style={customStyles}
        contentLabel="Example Modal"
        // className="connect-modal-overlay"
      >
        <h2
          style={{
            fontSize: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "black",
            paddingTop: "60px",
            
          }}
        >
          Connect Wallet First
        </h2>
      </Modal>
    </div>
  );
};
export default AlertModal;

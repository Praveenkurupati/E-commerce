import React from "react";
import "./ReUsableCard.css";

function ReUsableCard({ Quantity, header }) {
  return (
    <div className="monthly-ctc-card">
      <div className="monthly-ctc-card-header">
        <h4>{header}</h4>
        <hr className="header-body-divider" />
      </div>
      <div className="monthly-ctc-card-content">
        <p className="amount-with-icon">
          <b>{Quantity}</b>
        </p>
      </div>
    </div>
  );
}

export default ReUsableCard;

import React from "react";

const AddAccount = () => {
  return (
    <div className="addAccountPage" id="addAccountPage">
      <div className="addAccountForm">
        <div className="addAccHeader">
          <h2>Add Account</h2>
        </div>
        <div className="addAccName">
          <label>Account Name</label>
          <input />
        </div>
        <div className="addAccUsername">
          <label>Account Username</label>
          <input />
        </div>
        <div className="addAccPass">
          <label>Account Password</label>
          <input />
        </div>
        <div className="addAccEmail">
          <label>Account Email</label>
          <input />
        </div>
        <div className="addAccPhone">
          <label>Account Phone #</label>
          <input />
        </div>
        <div>
          <label></label>
          <input />
        </div>
        <div>
          <label></label>
          <input />
        </div>
        <div>
          <label></label>
          <input />
        </div>
        <div>
          <label></label>
          <input />
        </div>
        <div className="updateBtn">
          <button>Add Account</button>
        </div>
      </div>
    </div>
  );
};

export default AddAccount;
